/* =========================================================================
   Megan's book shopping list — stuff to buy, separate from what she
   already owns (owned-books-data.js) and what she's read (reading-data.js).
   Checking an item off on shopping-list.html doesn't remove it from here;
   it just saves a "got it" flag to that browser's localStorage. Delete the
   entry below whenever you actually want it gone from the list.

   Each entry needs at least a title. Everything else is optional:
     author : "First Last"
     cover  : URL or local path to a cover image
     note   : why it's on the list ("own the audiobook, want it in print", etc)
   ========================================================================= */
const SHOPPING_LIST = [
  {title:"The Dungeon Anarchist's Cookbook", author:"Matt Dinniman", cover:"dungeon-crawler-carl/dungeon-anarchists-cookbook-cover.jpg", note:"Already own the audiobook — want a physical copy for the shelf."},
  {title:"Carl's Doomsday Scenario", author:"Matt Dinniman", cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1719949673i/212393364._SY180_.jpg", note:"Book 2 in the Dungeon Crawler Carl series."},
];
