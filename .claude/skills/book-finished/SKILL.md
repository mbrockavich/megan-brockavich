---
name: book-finished
description: Log a book Megan just finished reading into her personal reading-tracker site (this repo). Use whenever she says she finished/completed a book, gives a star rating for something she read, pastes a Goodreads/StoryGraph "finished" screenshot, or otherwise reports a completed read — even if she only gives a title and doesn't mention the site by name. Walks through adding it to reading-data.js (and owned-books-data.js / the SERIES list when relevant), asks for anything missing, then pushes the update live.
---

# Logging a finished book

This repo (`megan-brockavich`) is Megan's personal reading tracker. Every page —
2026 stats, the master list, series tracker, author tracker, book club — reads
from the same handful of data files, so finishing a book is really just one
good edit to `reading-data.js` (plus, sometimes, `owned-books-data.js`) that
then shows up everywhere automatically.

**Before touching anything, re-read the comment block at the top of
`reading-data.js`.** It's the live source of truth for the field conventions
(the allowed genre list, what `rating`/`spicy`/`note` mean, how `pastReads`
differs from `books`, how `SERIES` and `activelyReading` work). That comment
gets edited independently of this skill, so don't rely on a copy of it here —
go read the actual file each time.

## 1. Figure out what book this is

Get title + author from whatever she gives you — a screenshot (like a
Goodreads book-detail page), a plain mention, a cover photo. If you're missing
solid metadata (cover image URL, page count, original publication year/date),
look it up rather than guessing — WebSearch or an openlibrary.org /
goodreads-style cover URL, matching the style already used throughout
`reading-data.js` (`covers.openlibrary.org/b/isbn/<ISBN>-L.jpg` is the most
reliable pattern when you have an ISBN).

Ask her to confirm the finish date if it isn't obvious — default to today.

## 2. Ask what you can't infer

Some fields you can only get from her. Always ask about (don't just guess or
skip):

- **Rating and genre** — required for the shelves/stats to compute correctly.
  Genre must come from the fixed list in the `reading-data.js` comment block;
  if the book doesn't cleanly fit, ask her rather than picking the closest
  match silently.
- **A note/review** — even a sentence or two. Keep her voice, don't polish it
  into marketing copy.
- **Spicy tag** — ask, don't assume, even for romance/romantasy.
- **Ownership format** — does she own this one (physical / Kindle / Audible /
  Kindle Unlimited)? If yes, it needs an entry in `owned-books-data.js` too
  (see step 4).
- **Series info** — is this part of a series? See step 3.

If she already volunteered an answer in her message (like she did for Lore
Olympus — description, "def for adults" note, and the spicy tag all in one
go), don't ask again for that field. Only chase what's actually missing.

## 3. Series handling

Check `SERIES` in `reading-data.js` for an existing entry matching this book.

- **Existing series, book already listed** — nothing to add there; the read
  status is computed automatically from the title matching in `books`.
- **Existing series, but this book/volume isn't listed yet** (a new
  installment) — add it to that series' `books` array.
- **No series entry yet** — ask if she wants one created. If yes, look up the
  full run of the series (WebSearch is fine — this is exactly what got Lore
  Olympus's volumes 2–11 right) and list every entry in reading order, using
  `pubDate` for already-released ones and `comingSoon:"Month YYYY"` (or
  `comingSoon:true` if no date is announced) for future ones. Be honest about
  uncertainty — if sources disagree or you can't confirm a date, leave
  `pubDate` off rather than inventing one; the file's own comment says that's
  fine.
- Either way, ask whether to set `activelyReading: true` on the series — that
  flag is never inferred, only set by hand, per the file's own comment.

## 4. Ownership

If she owns a copy, add an entry to the matching array in
`owned-books-data.js` (`kindle` / `audible` / `physical` / `kindleUnlimited` —
a book can be in more than one). Reuse the same cover URL you used in
`reading-data.js` so the two stay visually consistent. Read that file's own
top comment too — it explains the `color`/`spineTitle` physical-only fields
and how `kindleUnlimited` differs from `kindle`.

## 5. Validate before committing

Run `node --check <file>.js` on every `.js` file you touched. A syntax slip
here (stray comma, unclosed bracket) breaks every page on the site, not just
the one you're editing.

## 6. Commit and push live

Megan's preference: **push straight to `main`**, the same way we did for Lore
Olympus — no draft branch, no waiting for a review. So:

1. `git status` — make sure you're not stomping on unrelated uncommitted work.
2. `git fetch origin main`, then check whether your local `main` can
   fast-forward to `origin/main` and whether your current branch is based on
   that same tip (`git merge-base` / `git rev-list --left-right --count`,
   same check as last time). If it's a clean fast-forward with no divergence,
   proceed. If `main` has moved in a way that conflicts, **stop and tell her**
   instead of rebasing or force-pushing on your own.
3. Commit with a short, specific message (what book, what got added — e.g.
   "Add <title> as finished, mark <series> as actively reading").
4. Fast-forward `main` to include your commit(s) and `git push origin main`.

Close with a one- or two-line summary of exactly what changed (book added,
series touched, ownership shelf updated) so she can see it's live without
digging through the diff herself.
