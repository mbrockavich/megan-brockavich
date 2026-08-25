/* =========================================================================
   Books Megan actually OWNS, grouped by format. This is separate from
   reading-data.js (which tracks books she's read) — a book can be owned
   without being read yet, or read without being owned (library loans,
   borrowed copies, etc).

   Used by the format filter (Kindle / Audible / Physical) on all-books.html,
   which also cross-references reading-data.js by title — if a book here has
   also been logged as read there, its rating and note show up automatically
   when you tap it. Nothing to do on this end for that to work, just make
   sure the title matches exactly.

   Each entry needs at least a title. Everything else is optional but
   makes the shelf look much better:
     author   : "First Last"
     cover    : URL or local path to a cover image
     narrator : audible only — who reads the audiobook
     color      : physical only — hex color for the spine. Leave it off and
                  one gets picked automatically from the garden palette.
     spineTitle : physical only — a short title to print on the spine
                  instead of the full title, for long titles that don't
                  fit. The full title still shows everywhere else (modal,
                  aria-label, tooltip).

   Add your real collection below, section by section — order doesn't
   matter within a list.
   ========================================================================= */
const OWNED_BOOKS = {
  kindle: [
    {title:"The Count of Monte Cristo", author:"Alexandre Dumas", cover:"count-of-monte-cristo/monte-cristo-cover.jpg"},
  ],
  audible: [
    {title:"And Now, Back to You", author:"B.K. Borison", narrator:"", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1748482477i/217513554.jpg"},
    {title:"The Count of Monte Cristo", author:"Alexandre Dumas", narrator:"", cover:"count-of-monte-cristo/monte-cristo-cover.jpg"},
    {title:"The Assassin's Blade", author:"Sarah J. Maas", narrator:"", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1680869667i/126062562.jpg"},
  ],
  physical: [
    {title:"Control Unleashed: Creating a Focused and Confident Dog", spineTitle:"Control Unleashed", author:"Leslie McDevitt", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1349894884i/2101812.jpg"},
    {title:"Alice's Adventures in Wonderland & Through the Looking Glass: Lavishly Illustrated with Interactive Elements", spineTitle:"Alice in Wonderland", author:"Lewis Carroll", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1554894039i/43208990.jpg"},
    {title:"The Iliad", author:"Homer", cover:"https://covers.openlibrary.org/b/id/12621988-L.jpg"},
    {title:"The Odyssey", author:"Homer", cover:"https://covers.openlibrary.org/b/id/12474938-L.jpg"},
    {title:"The Song of Achilles", author:"Madeline Miller", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1357177533i/13623848._SX300_.jpg"},
    {title:"Circe", author:"Madeline Miller", cover:"https://covers.openlibrary.org/b/id/8739376-L.jpg"},
    {title:"Bloody Jack: Being an Account of the Curious Adventures of Mary \"Jacky\" Faber, Ship's Boy", spineTitle:"Bloody Jack", author:"L.A. Meyer", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1328336242i/8488973.jpg"},
    {title:"BookMail: A Meta Horror Novel", spineTitle:"BookMail", author:"Jason R. Davis", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1746988324i/230237670._SX300_.jpg"},
    {title:"It Ends with Us", author:"Colleen Hoover", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1670795825i/62627512._SX300_.jpg"},
    {title:"It Starts with Us", author:"Colleen Hoover", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1644605295i/60393672.jpg"},
    {title:"Funny Story", author:"Emily Henry", cover:"https://covers.openlibrary.org/b/id/14625690-L.jpg"},
    {title:"The Handmaid's Tale", author:"Margaret Atwood", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1488552336i/34454589.jpg"},
    {title:"The Handmaid's Tale: The Graphic Novel", spineTitle:"The Handmaid's Tale (Graphic Novel)", author:"Renee Nault", cover:"https://covers.openlibrary.org/b/id/14339099-L.jpg"},
    {title:"The Testaments", author:"Margaret Atwood", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1549292344i/42975172._SX300_.jpg"},
    {title:"Dungeon Crawler Carl, Vol. 1 (Graphic Novel)", author:"Matt Dinniman", cover:"https://covers.openlibrary.org/b/isbn/9781638493655-L.jpg"},
    {title:"The Assassin's Blade", author:"Sarah J. Maas", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1680869667i/126062562.jpg"},
  ],
};

/* Looks a title up across all three owned-format lists. Returns an array
   of format keys ("kindle","audible","physical") the title appears in, in
   that order, or [] if it isn't owned in any format. Powers the Kindle /
   Audible / Physical filter pills on all-books.html. */
function findOwnedFormats(title) {
  return ["kindle", "audible", "physical"].filter(
    fmt => OWNED_BOOKS[fmt].some(b => b.title === title)
  );
}
