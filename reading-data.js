/* =========================================================================
   Shared reading data, used by 2026-reading-stats.html, series-tracker.html,
   and zodiac-world-tracker.html. Edit here once and every page stays in sync.

   Read status is never hand-set per series/tracker entry — it's computed by
   looking up a book's title in `books` (this year's reads) or `pastReads`
   (everything finished before 2026). Add a title to either array once, and
   every tracker that lists that book checks it off automatically.
   ========================================================================= */
const GOAL = 80;
const books = [
  {title:"Sunrise on the Reaping", cover:"https://covers.openlibrary.org/b/isbn/1546171460-L.jpg", author:"Suzanne Collins", genre:"Science Fiction", pages:419, dateFinished:"2026-01-03"},
  {title:"Feral Wolf", cover:"https://covers.openlibrary.org/b/id/15130580-L.jpg", author:"Caroline Peckham & Susanne Valenti", genre:"Romantasy", pages:408, dateFinished:"2026-01-08"},
  {title:"Untamed", cover:"https://m.media-amazon.com/images/I/51YkYhYbRdL.jpg", author:"Glennon Doyle", genre:"Memoir", pages:352, dateFinished:"2026-01-10"},
  {title:"Red Rising", cover:"https://covers.openlibrary.org/b/id/7316188-L.jpg", author:"Pierce Brown", genre:"Science Fiction", pages:401, dateFinished:"2026-01-17"},
  {title:"Golden Son", cover:"https://covers.openlibrary.org/b/id/8454351-L.jpg", author:"Pierce Brown", genre:"Science Fiction", pages:466, dateFinished:"2026-01-22"},
  {title:"Morning Star", cover:"https://covers.openlibrary.org/b/id/8566174-L.jpg", author:"Pierce Brown", genre:"Science Fiction", pages:526, dateFinished:"2026-01-31"},
  {title:"A Mystical Legacy", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1701384644i/203011116.jpg", author:"Rowan Dillon", genre:"Mystery", pages:32, dateFinished:"2026-01-31"},
  {title:"Roots of Darkness", cover:"https://covers.openlibrary.org/b/id/15151850-L.jpg", author:"Demi Winters", genre:"Romantasy", pages:213, dateFinished:"2026-02-14"},
  {title:"The Thicket", cover:"https://covers.openlibrary.org/b/id/12054789-L.jpg", author:"Noelle West Ihli", genre:"Horror", pages:332, dateFinished:"2026-02-22"},
  {title:"Dawn of the North", cover:"https://covers.openlibrary.org/b/id/15215659-L.jpg", author:"Demi Winters", genre:"Romantasy", pages:608, dateFinished:"2026-02-28"},
  {title:"Flock", cover:"https://m.media-amazon.com/images/I/41yC9PdU0gL.jpg", author:"Kate Stewart", genre:"Contemporary Romance", pages:450, dateFinished:"2026-03-01"},
  {title:"Exodus", cover:"https://m.media-amazon.com/images/I/41XHkcLHMEL.jpg", author:"Kate Stewart", genre:"Contemporary Romance", pages:500, dateFinished:"2026-03-10"},
  {title:"The Comfy Cozy Witch's Guide to Making Magic in Your Everyday Life", cover:"https://covers.openlibrary.org/b/id/14804484-L.jpg", author:"Jennie Blonde", genre:"Nonfiction", pages:208, dateFinished:"2026-03-12"},
  {title:"The Finish Line", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1610549876i/56182388.jpg", author:"Kate Stewart", genre:"Contemporary Romance", pages:560, dateFinished:"2026-03-15"},
  {title:"Project Hail Mary", cover:"https://covers.openlibrary.org/b/id/11200092-L.jpg", author:"Andy Weir", genre:"Science Fiction", pages:496, dateFinished:"2026-03-20"},
  {title:"Just For the Cameras", cover:"https://covers.openlibrary.org/b/id/15170471-L.jpg", author:"Meghan Quinn", genre:"Contemporary Romance", pages:637, dateFinished:"2026-03-22"},
  {title:"We Should All Be Feminists", cover:"https://covers.openlibrary.org/b/id/11324542-L.jpg", author:"Chimamanda Ngozi Adichie", genre:"Nonfiction", pages:64, dateFinished:"2026-03-25"},
  {title:"Dear Debbie", cover:"https://covers.openlibrary.org/b/id/15171146-L.jpg", author:"Freida McFadden", genre:"Thriller", pages:336, dateFinished:"2026-03-27"},
  {title:"Cleopatra", cover:"https://m.media-amazon.com/images/I/61SqZSwLTvL.jpg", author:"Saara El-Arifi", genre:"Historical Fiction", pages:448, dateFinished:"2026-04-01"},
  {title:"A Wrinkle in Time: The Graphic Novel", cover:"https://covers.openlibrary.org/b/id/7364130-L.jpg", author:"Madeleine L'Engle", genre:"Graphic Novel", pages:392, dateFinished:"2026-04-01"},
  {title:"The Princess Bride", cover:"https://covers.openlibrary.org/b/id/9284881-L.jpg", author:"William Goldman", genre:"Fantasy", pages:432, dateFinished:"2026-04-09"},
  {title:"Ruthless Vows", cover:"https://covers.openlibrary.org/b/id/14572083-L.jpg", author:"Rebecca Ross", genre:"Romantasy", pages:419, dateFinished:"2026-04-23"},
  {title:"The Book Witch", cover:"https://covers.openlibrary.org/b/id/15208007-L.jpg", author:"Meg Shaffer", genre:"Fantasy", pages:320, dateFinished:"2026-04-25"},
  {title:"Katabasis", cover:"https://covers.openlibrary.org/b/id/15117021-L.jpg", author:"R.F. Kuang", genre:"Fantasy", pages:567, dateFinished:"2026-05-02"},
  {title:"The Dinner Party", cover:"https://covers.openlibrary.org/b/id/15235011-L.jpg", author:"Freida McFadden", genre:"Thriller", pages:196, dateFinished:"2026-05-02"},
  {title:"The Magicians", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1715695565i/7125342.jpg", author:"Lev Grossman", genre:"Fantasy", pages:402, dateFinished:"2026-05-07"},
  {title:"The Magician King", cover:"https://m.media-amazon.com/images/I/51uxgRMrw6L.jpg", author:"Lev Grossman", genre:"Fantasy", pages:400, dateFinished:"2026-05-12"},
  {title:"The Magician's Land", cover:"https://m.media-amazon.com/images/I/51TZvbTMO8L.jpg", author:"Lev Grossman", genre:"Fantasy", pages:401, dateFinished:"2026-05-15"},
  {title:"The Last Letter", cover:"https://covers.openlibrary.org/b/id/10165652-L.jpg", author:"Rebecca Yarros", genre:"Contemporary Romance", pages:336, dateFinished:"2026-05-19"},
  {title:"Crown Me Dead", cover:"https://covers.openlibrary.org/b/id/15226806-L.jpg", author:"Liv Zander", genre:"Romantasy", pages:270, dateFinished:"2026-05-21"},
  {title:"Crown Me Yours", cover:"https://covers.openlibrary.org/b/id/15228557-L.jpg", author:"Liv Zander", genre:"Romantasy", pages:244, dateFinished:"2026-05-25"},
  {title:"My Husband's Wife", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1747668611i/231127462.jpg", author:"Alice Feeney", genre:"Thriller", pages:320, dateFinished:"2026-05-26"},
  {title:"The Devil at His Elbow", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1712842498i/210454076.jpg", author:"Valerie Bauerlein", genre:"Nonfiction", pages:489, dateFinished:"2026-06-03"},
  {title:"Wild Wolf", cover:"https://m.media-amazon.com/images/I/41kTxqoYBwL.jpg", author:"Caroline Peckham & Susanne Valenti", genre:"Romantasy", pages:430, dateFinished:"2026-06-06"},
  {title:"Remarkably Bright Creatures", cover:"https://covers.openlibrary.org/b/id/12019989-L.jpg", author:"Shelby Van Pelt", genre:"Literary Fiction", pages:368, dateFinished:"2026-06-07"},
  {title:"Iron Gold", cover:"https://covers.openlibrary.org/b/id/14511722-L.jpg", author:"Pierce Brown", genre:"Science Fiction", pages:605, dateFinished:"2026-06-14"},
  {title:"Pendulum Magic for Beginners", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1386166779i/19176827.jpg", author:"Richard Webster", genre:"Nonfiction", pages:241, dateFinished:"2026-06-28"},
  {title:"Doctor Sleep", cover:"https://covers.openlibrary.org/b/id/14652972-L.jpg", author:"Stephen King", genre:"Horror", pages:531, dateFinished:"2026-06-28"},
  {title:"The Housemaid's Wedding", cover:"https://covers.openlibrary.org/b/id/14840898-L.jpg", author:"Freida McFadden", genre:"Thriller", pages:86, dateFinished:"2026-06-29"},
  {title:"Dark Age", cover:"https://covers.openlibrary.org/b/id/8748017-L.jpg", author:"Pierce Brown", genre:"Science Fiction", pages:776, dateFinished:"2026-07-03"},
  {title:"Fly Away", cover:"https://covers.openlibrary.org/b/id/9418741-L.jpg", author:"Kristin Hannah", genre:"Contemporary Fiction", pages:416, dateFinished:"2026-07-07"}
];

/* Everything finished before 2026 that still shows up as "read" on a
   tracker page. Same idea as `books` above but without stats-page fields
   (genre/pages/dateFinished) — just enough to check a title off and show
   when/what cover to use. */
const pastReads = [
  {title:"The Awakening", readDate:"March 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1560277389i/46261182.jpg"},
  {title:"Ruthless Fae", readDate:"March 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1565943045l/51966347.jpg"},
  {title:"The Reckoning", readDate:"March 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1635198815i/59450488.jpg"},
  {title:"Origins of an Academy Bully", readDate:"June 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1677104440i/49646047.jpg"},
  {title:"Shadow Princess", readDate:"June 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1570223430l/53146871.jpg"},
  {title:"Cursed Fates", readDate:"June 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1578710951i/50391615.jpg"},
  {title:"The Big A.S.S. Party", readDate:"June 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1596452502i/54798561.jpg"},
  {title:"Fated Throne", readDate:"June 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1605478159i/53535526.jpg"},
  {title:"The Awakening as Told by the Boys", readDate:"June 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1629291604i/58800799.jpg"},
  {title:"Heartless Sky", readDate:"June 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1628199263i/56474282.jpg"},
  {title:"Sorrow and Starlight", readDate:"July 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1664442356i/59808792.jpg"},
  {title:"Beyond the Veil", readDate:"July 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1686777106i/177899172.jpg"},
  {title:"Live and Let Lionel", readDate:"July 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1707177040i/207603149.jpg"},
  {title:"Restless Stars", readDate:"July 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1711995687i/198954263.jpg"},
  {title:"Caged Wolf", readDate:"August 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1680885592i/126128250.jpg"},
  {title:"Alpha Wolf", readDate:"October 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1622992365i/58272634.jpg"},
  {title:"The Road of Bones", readDate:null, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1704736755i/205044632.jpg"},
  {title:"Kingdom of Claw", readDate:"April 2024", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1706976049i/207041696.jpg"},
  {title:"The Housemaid", readDate:"April 2024", cover:"https://covers.openlibrary.org/b/id/15105883-L.jpg"},
  {title:"The Housemaid's Secret", readDate:"September 2024", cover:"https://covers.openlibrary.org/b/id/13439869-L.jpg"},
  {title:"The Housemaid Is Watching", readDate:"September 2024", cover:"https://covers.openlibrary.org/b/id/14633291-L.jpg"},
  {title:"Divine Rivals", readDate:"February 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1661929417i/62202008.jpg"},
  {title:"The Shining", readDate:"October 2024", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1353277730i/11588.jpg"},
  {title:"Firefly Lane", readDate:"April 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1485338283i/3524297.jpg"},
  {title:"Dark Fae", readDate:"May 2025", cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1619705977i/57892054._SY180_.jpg"},
  {title:"Savage Fae", readDate:"May 2025", cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1619382623i/57849105._SY180_.jpg"},
  {title:"Vicious Fae", readDate:"May 2025", cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1619382736i/57849111._SY180_.jpg"},
  {title:"Broken Fae", readDate:"June 2025", cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1619382818i/57849125._SY180_.jpg"},
  {title:"Warrior Fae", readDate:"June 2025", cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1619382385i/57849074._SY180_.jpg"},
  {title:"Scythe", readDate:"September 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1456172676i/28954189.jpg"},
  {title:"Powerless", readDate:"June 2024", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1672676191i/75513900.jpg"},
  {title:"Powerful", readDate:"June 2024", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1731714728i/203840597.jpg"},
  {title:"Reckless", readDate:"July 2024", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1731714752i/183086339.jpg"},
  {title:"Fearless", readDate:"August 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1730330746i/214151222.jpg"},
  {title:"Wicked: Everyone Deserves the Chance to Fly", readDate:"December 2024", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1733855486i/30241301.jpg"},
  {title:"Assistant to the Villain", readDate:"August 2024", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1702057336i/123257687.jpg"},
  {title:"First-Time Caller", readDate:"July 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1718283728i/213243908.jpg"},
  {title:"The Assassin's Blade", readDate:null, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1680869667i/126062562.jpg"},
  {title:"Throne of Glass", readDate:null, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1673566495i/76703559.jpg"},
  {title:"Crown of Midnight", readDate:null, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1673566594i/76705490.jpg"},
  {title:"Heir of Fire", readDate:null, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1673566654i/76706470.jpg"},
  {title:"Queen of Shadows", readDate:null, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1677267561i/123004944.jpg"},
  {title:"Empire of Storms", readDate:null, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1676979605i/76713323.jpg"},
  {title:"Tower of Dawn", readDate:null, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1673567264i/76714487.jpg"},
  {title:"Kingdom of Ash", readDate:null, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1673567331i/76715522.jpg"},
  {title:"A Court of Thorns and Roses", readDate:null, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1620324329i/50659467.jpg"},
  {title:"A Court of Mist and Fury", readDate:null, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1620325671i/50659468.jpg"},
  {title:"A Court of Wings and Ruin", readDate:null, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1585623092i/50659472.jpg"},
  {title:"A Court of Frost and Starlight", readDate:null, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1585622963i/50659471.jpg"},
  {title:"A Court of Silver Flames", readDate:null, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1734440950i/53138095.jpg"},
  {title:"House of Earth and Blood", readDate:null, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1559142847i/44778083.jpg"},
  {title:"House of Sky and Breath", readDate:null, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1633097753i/40132775.jpg"},
  {title:"House of Flame and Shadow", readDate:null, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1689809645i/52857700.jpg"},
  {title:"Fourth Wing", readDate:null, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1761312598i/61431922.jpg"},
  {title:"Iron Flame", readDate:null, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1706724269i/90202302.jpg"},
  {title:"Onyx Storm", readDate:"January 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1766329694i/209439446.jpg"}
];

/* Looks a title up in this year's `books` first, then in `pastReads`.
   Returns the matching object (with .cover, and either .readDate or
   .dateFinished) or null if the book hasn't been logged as read anywhere. */
function findRead(title) {
  return books.find(b => b.title === title) || pastReads.find(b => b.title === title) || null;
}

/* Multi-book series touched by the 2026 shelf, in reading order.
   Read/unread is computed via findRead() above, not stored per book —
   entries here are just {title}, plus optional `cover` (a preview image
   for an unread book) or `comingSoon:true` (not released yet).
   `status` reflects whether the AUTHOR is done writing the series, not
   whether you're caught up on it: "complete" = no more books planned,
   "ongoing" = more entries are announced or expected. */
const SERIES = [
  {
    name: "The Empyrean (Fourth Wing)",
    author: "Rebecca Yarros",
    status: "ongoing",
    books: [
      {title:"Fourth Wing"},
      {title:"Iron Flame"},
      {title:"Onyx Storm"},
      {title:"Empyrean Book 4", comingSoon:true},
      {title:"Empyrean Book 5", comingSoon:true}
    ]
  },
  {
    name: "Throne of Glass",
    author: "Sarah J. Maas",
    status: "complete",
    books: [
      {title:"Throne of Glass"},
      {title:"Crown of Midnight"},
      {title:"Heir of Fire"},
      {title:"The Assassin's Blade"},
      {title:"Queen of Shadows"},
      {title:"Empire of Storms"},
      {title:"Tower of Dawn"},
      {title:"Kingdom of Ash"}
    ]
  },
  {
    name: "A Court of Thorns and Roses",
    author: "Sarah J. Maas",
    status: "ongoing",
    books: [
      {title:"A Court of Thorns and Roses"},
      {title:"A Court of Mist and Fury"},
      {title:"A Court of Wings and Ruin"},
      {title:"A Court of Frost and Starlight"},
      {title:"A Court of Silver Flames"},
      {title:"ACOTAR Book 6", comingSoon:"October 2026"},
      {title:"ACOTAR Book 7", comingSoon:"January 2027"}
    ]
  },
  {
    name: "Crescent City",
    author: "Sarah J. Maas",
    status: "ongoing",
    books: [
      {title:"House of Earth and Blood"},
      {title:"House of Sky and Breath"},
      {title:"House of Flame and Shadow"},
      {title:"Crescent City Book 4", comingSoon:true}
    ]
  },
  {
    name: "Heartstrings",
    author: "B.K. Borison",
    status: "ongoing",
    books: [
      {title:"First-Time Caller"},
      {title:"And Now, Back to You", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1748482477i/217513554.jpg"},
      {title:"Longtime Listener", comingSoon:"February 2027"}
    ]
  },
  {
    name: "The Wicked Years",
    author: "Gregory Maguire",
    status: "ongoing",
    books: [
      {title:"Elphie: A Wicked Childhood", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1722577882i/199743711.jpg"},
      {title:"Wicked: Everyone Deserves the Chance to Fly"},
      {title:"Son of a Witch", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1370992595i/13521.jpg"},
      {title:"A Lion Among Men", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1370992593i/3124249.jpg"},
      {title:"Out of Oz", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1370992585i/10594929.jpg"}
    ]
  },
  {
    name: "Assistant to the Villain",
    author: "Hannah Nicole Maehrer",
    status: "ongoing",
    books: [
      {title:"Assistant to the Villain"},
      {title:"Apprentice to the Villain", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1730881672i/203147386.jpg"},
      {title:"Accomplice to the Villain", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1765013612i/219209774.jpg"},
      {title:"Adversary to the Villain", comingSoon:"August 2026"}
    ]
  },
  {
    name: "The Powerless Trilogy",
    author: "Lauren Roberts",
    status: "ongoing",
    books: [
      {title:"Powerless"},
      {title:"Powerful"},
      {title:"Reckless"},
      {title:"Fearless"},
      {title:"Fearful", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1749656949i/220161171.jpg"}
    ]
  },
  {
    name: "Arc of a Scythe",
    author: "Neal Shusterman",
    status: "complete",
    books: [
      {title:"Scythe"},
      {title:"Thunderhead", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1505658534i/33555224.jpg"},
      {title:"The Toll", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1558117336i/43822024.jpg"},
      {title:"Gleanings", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1649100303i/60320602.jpg"}
    ]
  },
  {
    name: "Ruthless Boys of the Zodiac",
    author: "Caroline Peckham & Susanne Valenti",
    status: "complete",
    books: [
      {title:"Dark Fae"},
      {title:"Savage Fae"},
      {title:"Vicious Fae"},
      {title:"Broken Fae"},
      {title:"Warrior Fae"}
    ]
  },
  {
    name: "Zodiac Academy",
    author: "Caroline Peckham & Susanne Valenti",
    status: "complete",
    books: [
      {title:"The Awakening"},
      {title:"Ruthless Fae"},
      {title:"The Reckoning"},
      {title:"Origins of an Academy Bully"},
      {title:"Shadow Princess"},
      {title:"Cursed Fates"},
      {title:"The Big A.S.S. Party"},
      {title:"Fated Throne"},
      {title:"The Awakening as Told by the Boys"},
      {title:"Heartless Sky"},
      {title:"Sorrow and Starlight"},
      {title:"Beyond the Veil"},
      {title:"Live and Let Lionel"},
      {title:"Restless Stars"}
    ]
  },
  {
    name: "Darkmore Penitentiary",
    author: "Caroline Peckham & Susanne Valenti",
    status: "complete",
    books: [
      {title:"Caged Wolf"},
      {title:"Alpha Wolf"},
      {title:"Feral Wolf"},
      {title:"Wild Wolf"}
    ]
  },
  {
    name: "The Ashen",
    author: "Demi Winters",
    status: "ongoing",
    books: [
      {title:"The Road of Bones"},
      {title:"Kingdom of Claw"},
      {title:"Roots of Darkness"},
      {title:"Dawn of the North"}
    ]
  },
  {
    name: "Red Rising Saga",
    author: "Pierce Brown",
    status: "ongoing",
    books: [
      {title:"Red Rising"},
      {title:"Golden Son"},
      {title:"Morning Star"},
      {title:"Iron Gold"},
      {title:"Dark Age"},
      {title:"Light Bringer", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1667655583i/29227774.jpg"},
      {title:"Red God", comingSoon:true}
    ]
  },
  {
    name: "The Ravenhood",
    author: "Kate Stewart",
    status: "complete",
    books: [
      {title:"Flock"},
      {title:"Exodus"},
      {title:"The Finish Line"}
    ]
  },
  {
    name: "The Magicians Trilogy",
    author: "Lev Grossman",
    status: "complete",
    books: [
      {title:"The Magicians"},
      {title:"The Magician King"},
      {title:"The Magician's Land"}
    ]
  },
  {
    name: "Heartstring Duet",
    author: "Liv Zander",
    status: "complete",
    books: [
      {title:"Crown Me Dead"},
      {title:"Crown Me Yours"}
    ]
  },
  {
    name: "The Housemaid",
    author: "Freida McFadden",
    status: "complete",
    books: [
      {title:"The Housemaid"},
      {title:"The Housemaid's Secret"},
      {title:"The Housemaid's Wedding"},
      {title:"The Housemaid Is Watching"}
    ]
  },
  {
    name: "Letters of Enchantment",
    author: "Rebecca Ross",
    status: "complete",
    books: [
      {title:"Wild Reverence", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1737937394i/222376906.jpg"},
      {title:"Divine Rivals"},
      {title:"Ruthless Vows"}
    ]
  },
  {
    name: "The Shining",
    author: "Stephen King",
    status: "complete",
    books: [
      {title:"Before the Play", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1557520154i/45714016.jpg"},
      {title:"The Shining"},
      {title:"Doctor Sleep"}
    ]
  },
  {
    name: "Firefly Lane",
    author: "Kristin Hannah",
    status: "complete",
    books: [
      {title:"Firefly Lane"},
      {title:"Fly Away"}
    ]
  },
  {
    name: "Skye O'Shea Paranormal Cozy Mystery",
    author: "Rowan Dillon",
    status: "ongoing",
    books: [
      {title:"A Mystical Legacy"},
      {title:"Bogs, Brews, and Banshees", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1699539434i/201899519.jpg"},
      {title:"Whispers, Whiskey, and Wishes", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1708359064i/208878163.jpg"},
      {title:"Pranks, Poitin, and Pucas", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1724848086i/217912014.jpg"},
      {title:"Roots, Rum, and Revenants", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1758805415i/242063842.jpg"},
      {title:"Spectacles, Sangria, and Selkies", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1782483297i/254609775.jpg"},
      {title:"Greed, Guinness, and Grogochs", comingSoon:"April 2027"}
    ]
  }
];

/* The full Caroline Peckham & Susanne Valenti "Solaria" universe, in
   chronological/reading order across every era. Same {title}/{title,cover}/
   {title,comingSoon} shape as SERIES above, checked off via findRead(). */
const WORLD_TRACKER = [
  {
    name: "Ruthless Boys of the Zodiac",
    era: "The Fae Lands",
    blurb: "The prequel — five years before the Academy",
    books: [
      {title:"Dark Fae", cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1619705977i/57892054._SY180_.jpg"},
      {title:"Savage Fae", cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1619382623i/57849105._SY180_.jpg"},
      {title:"Vicious Fae", cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1619382736i/57849111._SY180_.jpg"},
      {title:"Broken Fae", cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1619382818i/57849125._SY180_.jpg"},
      {title:"Warrior Fae", cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1619382385i/57849074._SY180_.jpg"}
    ]
  },
  {
    name: "Zodiac Academy",
    era: "Zodiac Academy",
    blurb: "The main saga",
    books: [
      {title:"The Awakening"},
      {title:"Ruthless Fae"},
      {title:"The Reckoning"},
      {title:"Origins of an Academy Bully"},
      {title:"Shadow Princess"},
      {title:"Cursed Fates"},
      {title:"The Big A.S.S. Party"},
      {title:"Fated Throne"},
      {title:"The Awakening as Told by the Boys"},
      {title:"Heartless Sky"},
      {title:"Sorrow and Starlight"},
      {title:"Beyond the Veil"},
      {title:"Live and Let Lionel"},
      {title:"Restless Stars"}
    ]
  },
  {
    name: "Darkmore Penitentiary",
    era: "Darkmore Penitentiary",
    blurb: "Five years after the Academy",
    books: [
      {title:"Caged Wolf"},
      {title:"Alpha Wolf"},
      {title:"Feral Wolf"},
      {title:"Wild Wolf"}
    ]
  },
  {
    name: "Sins of the Zodiac",
    era: "The Waning Lands",
    blurb: "The newest era — new characters, same world",
    books: [
      {title:"Never Keep", cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1717864038i/210966754._SY180_.jpg"},
      {title:"Echo Fort", cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1747983780i/219503833._SY180_.jpg"},
      {title:"Cinder Vale", cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1746267651i/232736952._SY180_.jpg"},
      {title:"Oracle Bay", comingSoon:"March 2027"}
    ]
  }
];

/* Sarah J. Maas's three fantasy worlds, in reading order per series.
   Same {title}/{title,cover}/{title,comingSoon} shape, checked off via
   findRead(). */
const SJM_UNIVERSE = [
  {
    name: "Throne of Glass",
    realm: "Erilea",
    blurb: "Where it all began",
    books: [
      {title:"Throne of Glass"},
      {title:"Crown of Midnight"},
      {title:"Heir of Fire"},
      {title:"The Assassin's Blade"},
      {title:"Queen of Shadows"},
      {title:"Empire of Storms"},
      {title:"Tower of Dawn"},
      {title:"Kingdom of Ash"}
    ]
  },
  {
    name: "A Court of Thorns and Roses",
    realm: "Prythian",
    blurb: "The Night Court and beyond",
    books: [
      {title:"A Court of Thorns and Roses"},
      {title:"A Court of Mist and Fury"},
      {title:"A Court of Wings and Ruin"},
      {title:"A Court of Frost and Starlight"},
      {title:"A Court of Silver Flames"},
      {title:"ACOTAR Book 6", comingSoon:"October 2026"},
      {title:"ACOTAR Book 7", comingSoon:"January 2027"}
    ]
  },
  {
    name: "Crescent City",
    realm: "Midgard",
    blurb: "The newest world",
    books: [
      {title:"House of Earth and Blood"},
      {title:"House of Sky and Breath"},
      {title:"House of Flame and Shadow"},
      {title:"Crescent City Book 4", comingSoon:true}
    ]
  }
];
