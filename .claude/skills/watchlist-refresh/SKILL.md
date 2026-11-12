---
name: watchlist-refresh
description: Monthly refresh of Megan's Choice Awards Watchlist (watchlist.html / watchlist-data.js), the page that tracks upcoming and recently released books that could land on the Goodreads Choice Awards ballot. Use when Megan says "refresh the watchlist", "update the watchlist", "monthly book update", or asks what new books she should be watching, or adds/removes a book from it.
---

# Refreshing the Choice Awards Watchlist

The page is `watchlist.html`; **all content lives in `watchlist-data.js`**. Never
hand-edit the HTML for a refresh. The page splits "Out now" vs "Coming up" from
today's date by itself.

**The page is deliberately standalone** (own dark design, "The Ballot Watch").
Megan does not want it tied to the rest of the site: don't make it read
`reading-data.js`, and don't add nav links to the other pages. Covers: the page
looks books up on Open Library in the browser and falls back to a placeholder.
When a real cover is revealed or the lookup misses, set `cover:` to an image URL
on that entry.

## Goal
Help Megan keep up in 2027 with books that could be nominated for the Goodreads
Choice Awards (voting opens each November). Eligibility window assumed to be
Nov 11 of one year through Nov 10 of the next (2026 rules were Nov 12 2025 to
Nov 10 2026). Confirm against goodreads.com/choiceawards once the 2027 rules post,
then fix `windowStart`/`windowEnd` in `WATCHLIST_META`.

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