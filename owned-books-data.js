/* =========================================================================
   Books Megan actually OWNS, grouped by format. This is separate from
   reading-data.js (which tracks books she's read) — a book can be owned
   without being read yet, or read without being owned (library loans,
   borrowed copies, etc).

   Used by book-collection.html.

   Each entry needs at least a title. Everything else is optional but
   makes the shelf look much better:
     author   : "First Last"
     cover    : URL or local path to a cover image
     narrator : audible only — who reads the audiobook
     color    : physical only — hex color for the spine. Leave it off and
                one gets picked automatically from the 90s palette.

   NOTE: the entries below are just a handful pulled from reading-data.js
   to demo the layout (the Audible pick is confirmed from her "listened
   on audiobook" note; Monte Cristo has its own physical checklist page).
   Swap these out for your real collection — add/remove freely in each
   list, order doesn't matter.
   ========================================================================= */
const OWNED_BOOKS = {
  kindle: [
    {title:"Fourth Wing", author:"Rebecca Yarros", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1761312598i/61431922.jpg"},
    {title:"Onyx Storm", author:"Rebecca Yarros", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1766329694i/209439446.jpg"},
    {title:"A Court of Mist and Fury", author:"Sarah J. Maas", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1620325671i/50659468.jpg"},
  ],
  audible: [
    {title:"And Now, Back to You", author:"B.K. Borison", narrator:"", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1748482477i/217513554.jpg"},
    {title:"Sharp Objects", author:"Gillian Flynn", narrator:"", cover:"https://covers.openlibrary.org/b/isbn/9780307341556-L.jpg"},
    {title:"Doctor Sleep", author:"Stephen King", narrator:"", cover:"https://covers.openlibrary.org/b/id/14652972-L.jpg"},
  ],
  physical: [
    {title:"The Count of Monte Cristo", author:"Alexandre Dumas", cover:"count-of-monte-cristo/monte-cristo-cover.jpg"},
    {title:"Project Hail Mary", author:"Andy Weir", cover:"https://covers.openlibrary.org/b/id/11200092-L.jpg"},
    {title:"The Princess Bride", author:"William Goldman", cover:"https://covers.openlibrary.org/b/id/9284881-L.jpg"},
  ],
};
