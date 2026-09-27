/* =========================================================================
   Brunch Book Club history, used by book-club.html. One entry per month you
   met, newest first or oldest first — the page sorts it either way, so just
   add entries wherever's convenient.

   Each entry:
     year, month  : month is 1-12 (11 = November). Used to sort and to pick
                    the little seasonal emoji/color on that month's card.
     title        : the book you discussed. Must match a title in
                    reading-data.js (`books` or `pastReads`) EXACTLY —
                    capitalization and punctuation included — so the page
                    can pull the real cover image and your star rating from
                    there automatically. If it's not found there, the card
                    falls back to `author`/`cover` below.
     author       : optional. Only shown if the title isn't found in
                    reading-data.js (otherwise the real author is used).
     cover        : optional. Only used as a fallback if the title isn't
                    found in reading-data.js.
     location     : where you met for brunch that month, e.g. "Snooze A.M.
                    Eatery" — shown as "📍 Brunch at ___" on the card.
     pick         : optional. Whose turn it was to pick the book, e.g.
                    "Sue's pick" or "Group choice" — shown as a small line
                    on the card.
     note         : optional. Anything you want remembered about that
                    meetup — plain text only, no HTML.
   ========================================================================= */
const BOOK_CLUB = [
  {year: 2026, month: 1, title: "Artificial Truth", location: "Wood-n-Tap, Farmington", pick: "Group choice", note: "Nobody really liked this one."},
  {year: 2026, month: 2, title: "The Thicket", location: "The Flying Monkey Grill & Bar, Newington", pick: "Rachel's pick", note: "We all thought this was interesting — I think it was a 3 across the board."},
  {year: 2026, month: 3, title: "Just For the Cameras", location: "The Barn Restaurant", pick: "Rachel's pick", note: "It was ok. I think Sue and Rachel liked it more than I did."},
  {year: 2026, month: 5, title: "Cleopatra", location: "Ocho Cafe, West Hartford", pick: "Megan's pick", note: "Fell flat. Sue really didn't like it."},
  {year: 2026, month: 6, title: "My Husband's Wife", location: "Ocho Cafe, West Hartford", pick: "Sue's pick", note: "5 stars for Sue. I thought it was great right until the ending — the ending didn't wrap things up for me."},
  {year: 2026, month: 8, title: "Funny Story", location: "Hammonasset Beach State Park", pick: "Sue's pick", note: "Everyone really liked it. Sue and I gave it 5 stars, and Rachel + Alyssa gave it 4.5 stars."},
  {year: 2026, month: 9, title: "Sharp Objects", location: "Sayulita Restaurant"},
];
