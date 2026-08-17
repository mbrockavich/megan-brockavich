/* =========================================================================
   Books Megan actually OWNS, grouped by format. This is separate from
   reading-data.js (which tracks books she's read) — a book can be owned
   without being read yet, or read without being owned (library loans,
   borrowed copies, etc).

   Used by book-collection.html, which also cross-references reading-data.js
   by title — if a book here has also been logged as read there, its rating
   and note show up automatically when you tap it. Nothing to do on this
   end for that to work, just make sure the title matches exactly.

   Each entry needs at least a title. Everything else is optional but
   makes the shelf look much better:
     author   : "First Last"
     cover    : URL or local path to a cover image
     narrator : audible only — who reads the audiobook
     color    : physical only — hex color for the spine. Leave it off and
                one gets picked automatically from the garden palette.

   Add your real collection below, section by section — order doesn't
   matter within a list.
   ========================================================================= */
const OWNED_BOOKS = {
  kindle: [
  ],
  audible: [
    {title:"And Now, Back to You", author:"B.K. Borison", narrator:"", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1748482477i/217513554.jpg"},
  ],
  physical: [
  ],
};
