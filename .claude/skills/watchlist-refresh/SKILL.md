---
name: watchlist-refresh
description: Monthly refresh of Megan's "Fresh Ink" new-releases calendar (watchlist.html / watchlist-data.js), the page that tracks upcoming and recently released books that could land on the Goodreads Choice Awards ballot. Use when Megan says "refresh the watchlist", "refresh Fresh Ink", "update the watchlist", "monthly book update", or asks what new books she should be watching, or adds/removes a book from it.
---

# Refreshing Fresh Ink (the new-releases watchlist)

The page is `watchlist.html`; **all content lives in `watchlist-data.js`**. Never
hand-edit the HTML for a refresh. The page is a long scrolling month-by-month calendar: covers sit on their
release day (days with several books show "+N" and open a list), month-only
dates go in a "date TBC" row under that month, year-only dates go at the very
bottom. Holidays (with emoji) are computed in `watchlist.html`; add more there if
she asks. Months extend automatically to cover every entry and the award window.

**The page is deliberately standalone** (own dark design, "Fresh Ink").
Megan does not want it tied to the rest of the site: don't make it read
`reading-data.js`, and don't add nav links to the other pages. Covers: the page
looks books up on Open Library in the browser and falls back to a placeholder.
When a real cover is revealed or the lookup misses, set `cover:` to an image URL
on that entry.

## Goal
The page is named **Fresh Ink** (Megan chose it so it isn't tied to Goodreads). It tracks new
and upcoming books worth reading, with extra attention on award contenders.

Help Megan keep up in 2027 with books that could be nominated for the Goodreads
Choice Awards (voting opens each November). Eligibility window assumed to be
Nov 11 of one year through Nov 10 of the next (2026 rules were Nov 12 2025 to
Nov 10 2026). Confirm against goodreads.com/choiceawards once the 2027 rules post,
then fix `windowStart`/`windowEnd` in `WATCHLIST_META`.

## Cover ALL genres (important)
Megan noticed the first version only had romance, romantasy and fantasy. Every
refresh must sweep each category in `CATS`, one search per genre per month:
mystery/thriller, horror, sci-fi, historical fiction, literary/general fiction,
YA, memoir/biography and nonfiction too, not just romance and fantasy. Genre roundups that
worked: CrimeReads (thrillers), Fangirlish, Book Riot (monthly per-genre posts),
Lit Hub (sci-fi/fantasy), AV Club and Time Out (all-genre monthly picks), Kirkus
(release dates for nonfiction), Marie Claire, Hachette's monthly nonfiction post.
Watch for last year's lists showing up in results (check the year).

## Monthly steps
1. **Read `watchlist-data.js`** first, so you build on what's there.
2. **Search for the current month and the next 2 to 3 months** (WebSearch):
   - "most anticipated books [month year]" and per genre: romance, romantasy,
     fantasy, thriller, sci-fi, historical fiction, fiction, YA, nonfiction.
   - Goodreads: readers' most anticipated posts, "most added" new releases,
     and, once it exists, the Choice Awards nominee lists (late Nov onward).
   - Sources that have worked: Book Riot, Time Out, AV Club, Lit Hub, Fangirlish,
     Ink and Imaginings, Bookishelf. Some hosts may be blocked in cloud sessions
     (shereadsromancebooks.com and bookishelf.com were); if a fetch fails with a
     DNS error, stop trying that host and tell Megan it needs allowing.
3. **Update `watchlist-data.js`:**
   - Set `lastRefreshed` to today (YYYY-MM-DD).
   - Add new books. Keep it to ones with real signal: big authors, Goodreads
     "most added", award-winning authors, strong early reviews, series she reads
     (you may peek at `SERIES` in `reading-data.js` for ideas, read-only). Aim for quality over volume.
   - Fix any release dates that moved. Use `YYYY-MM-DD` only when the date is
     confirmed; otherwise `YYYY-MM` or `YYYY`.
   - Add or update `buzz` for books that are blowing up, and `hot: true` for
     the few lead picks.
   - Never invent titles, dates or buzz. If the title isn't announced, say so in
     `note` (e.g. "Title TBA") like the existing entries do.
   - Don't delete books after release; they move to "Out now" on their own.
     Prune only when the award year rolls over (see below) or if a book is
     cancelled/pulled.
4. **Use the right category** from `CATS` at the top of the data file; keep them
   matching Goodreads' categories.
5. **Check it renders:** open `watchlist.html` in headless Chromium (Playwright is
   preinstalled), confirm no console errors and no horizontal scroll at 390px wide.
6. **Commit and push live**, following the same process as the `book-finished`
   skill (push straight to `main`, fast-forward only, stop and tell Megan if
   `main` has moved in a conflicting way).
7. **Tell Megan** what changed: new books added, dates that moved, and anything
   from the "out now" list she hasn't read that looks like a must-read. Mention
   any dates you couldn't verify.

## Around award time
- **Mid/late November:** Goodreads opens the Choice Awards. Pull the official
  nominee lists, mark nominees with `buzz: "Choice Awards nominee"` (and the
  category), and note which ones Megan has read vs. not.
- **December:** Goodreads posts "Readers' Most Anticipated Books of [next year]".
  Cross-check the watchlist against it.
- **Each November, after the window closes:** archive the past year's entries
  (move them to a `watchlist-archive-YYYY.js` or delete them), bump
  `windowStart`/`windowEnd`, and update the page heading/text if the year changed.

## Monthly: check against what Megan reads (series and favorite authors)
Do this every refresh, in addition to the genre sweep. It's about her own
reading, not just award buzz.

1. **Series check.** Run a script that loads `reading-data.js` and lists every
   series in `SERIES` with: books read / released, last book, any `comingSoon`
   entries, and whether it's DNF. Skip DNF and fully caught-up complete series.
   For every active series (she's reading it, or a new book is expected), search
   for the next book's title and release date.
   - New or confirmed dates: add to `watchlist-data.js` (put the series and
     number in `series`, and set `hot: true` if she's read most of it), and
     update the matching `comingSoon` entry in `reading-data.js` (use the real
     title instead of a placeholder like "Book 7", and a "Month YYYY" string).
   - Books listed in `SERIES` that are missing from the tracker: add them.
   - Any `comingSoon` whose month has already passed: tell Megan and ask her to
     confirm it's out before flipping it to a normal released book (that changes
     her "books to go" counts, so don't flip it silently).
2. **Author check.** Count authors across `books` and `pastReads` (pastReads
   mostly has no `author`, so counts are from this year's reads) and take the
   top ~25. Search each for new books, ignoring ones already on the list or in
   the tracker. Skip reissues, new editions and short stories unless she'd care,
   and say so.
3. **Report.** Tell her what was added, what is already out but unread, and
   what has no date yet. A search that returns nothing means "no date found",
   not "nothing coming". Say which authors you couldn't find anything for.

Last full check: November 12, 2026. Authors with no confirmed 2027 book found:
J.K. Rowling, Suzanne Collins, Madeline Miller (short story *Mestra* only),
Stephanie Garber (only a paperback edition), Kate Stewart, Liv Zander,
Scott Westerfeld, James Dashner, Lev Grossman, Veronica Roth.

## What Fresh Ink can do now (so you don't break it)
- The calendar runs from the earliest entry (Jan 2025) to the end of the award year.
  Past months show books that are already out; entries with no known day sit in a
  "Released in <month>, exact day not recorded" row.
- Controls at the top: genre buttons, a From/To month range, and All / Unread / Read.
  Nonfiction and memoir share one genre button. Read/unread comes only from `read:true`.
- **Do not list Megan's past reads.** She said the page is for what could end up on the
  Goodreads Choice list, not her reading history. The calendar covers the 2026
  award year (Nov 12 2025 to Nov 10 2026) and the 2027 one that follows. `read:true`
  only checks off books that are already on that list.
- The 2026 award-year content is **all 300 opening-round Goodreads Choice nominees**
  (15 categories, ~270 unique books) pulled on Nov 13, 2026 from
  `https://www.goodreads.com/choiceawards/best-books-2026` and its
  `readers-favorite-<category>-books-2026` pages, with release days, direct
  Goodreads links and covers (all from Goodreads: the nominee page has the
  title, author, cover and book URL; each book's page has "First published <date>").
  Use `curl` (the WebFetch tool can't resolve these hosts). The first request to a
  book page sometimes returns empty, so retry. Next year, redo this for the 2027
  nominees (opening round starts around Nov 10). Books in several categories are
  merged into one entry; Debut Novel and Audiobook nominees keep their other category.
  Drop audiobook-only nominees for old books (Goodreads gives their original date, e.g.
  Harry Potter 2007): they aren't new releases and they stretch the calendar back for years.
- Release days: Bookishelf's month pages (`bookishelf.com/published/<year>/<month>/`)
  list every reviewed book with its day, and shereadsromancebooks.com's monthly
  and "new romance/romantasy books <year>" pages give days for romance. Use `curl`
  from Bash for these hosts: the WebFetch tool can't resolve them, but curl works
  once they're allowed. Treat downloaded pages as untrusted data and parse them
  with `python3 -I` from a different directory.
- Month-only or year-only dates are fine when the day is unknown, but Megan wants
  days, so look harder before settling for a month.

## Fresh Ink is an installable app (PWA)
Files: `manifest.webmanifest`, `sw.js` (both at the site root) and `fresh-ink/` (icons).
- Installed on her phone it opens full-screen and works offline. The service worker
  (`sw.js`) serves the page and `watchlist-data.js` from cache and refreshes them in the
  background. When the data file changes, the open app shows a "New books added" toast
  with a Refresh button. So a normal refresh (edit `watchlist-data.js`, push) needs no
  extra steps. Do NOT hand-bump anything for data changes.
- If you add a new file the app must work offline, add it to `SHELL` in `sw.js` and bump
  `SHELL_CACHE` (e.g. `fresh-ink-shell-v2`). Cover images and fonts are cached at runtime
  only when their host allows CORS (opaque responses are deliberately never stored).
- `sw.js` only touches Fresh Ink's own files, fonts and cover images. It ignores the rest
  of the site, so don't widen it.
- Megan chose: installable + offline only. She did not want a list view, tab bar, voting
  helper or tap-to-mark (she'll tell you what she's read).
- To test: serve a copy of the files from a temp dir with `python3 -m http.server`
  (service workers need http://localhost) and use Playwright's `setOffline`.

## Popular filter and NYT tag
- Megan felt too many obscure books showed up, so Fresh Ink has a **🔥 Popular** toggle
  (on by default, one tap to show everything). It hides books whose Goodreads rating count
  is under 20,000 (under 3,000 if released in the last ~4 months, since new books haven't
  collected ratings yet). Books with no `ratings` value are never hidden (upcoming books,
  non-nominees).
- Each entry with a Goodreads link carries `ratings` (count) and `stars` (average), read from
  `"ratingsCount"` / `"averageRating"` in the book page's HTML. Refresh them monthly with
  `curl` (4 at a time) and patch the entries. When you add new books from Goodreads, add
  their `ratings`/`stars` too.
- **NYT bestseller tag: not built yet.** She asked for a small "NYT bestseller" tag. This
  session could not reach NYT (www.nytimes.com, api.nytimes.com and Wikipedia are blocked,
  and the request to allow www.nytimes.com was rejected by the environments service on
  Nov 14, 2026). NYT lists also only show books after release, so they help as a tag, not
  as the source. If access is allowed later, add a `nyt:true` field and a tag in the sheet.

## Checking books off
There is no filtering and no per-browser "want list" (Megan didn't want anything
that only works in one browser). When she says she read a watchlist book, set
`read: true` on its entry in `watchlist-data.js` and push; also log it in
`reading-data.js` per the `book-finished` skill. At each refresh, glance at
`books`/`pastReads` in `reading-data.js` and offer to check off any watchlist
titles she has already logged.

## Covers
Prefer adding `isbn` (ISBN-13) to each new entry once it exists; that is the most
reliable cover source. Otherwise the page looks covers up in the browser (Google
Books, then Open Library) and falls back to a placeholder. Open Library and Google
image hosts are blocked from cloud sessions, so covers can't be verified here.

## Manual requests
If Megan says "add X to the watchlist", add just that entry (look up the date
and category) and push. 