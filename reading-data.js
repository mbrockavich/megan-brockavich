/* =========================================================================
   Shared reading data, used by both 2026-reading-stats.html and
   series-tracker.html. Edit here once and both pages stay in sync.
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

/* Multi-book series touched by the 2026 shelf, in reading order.
   `read` books are matched by exact title against the `books` array above
   to pull their cover; unread books render as greyed-out placeholders.
   `status` reflects whether the AUTHOR is done writing the series, not
   whether you're caught up on it: "complete" = no more books planned,
   "ongoing" = more entries are announced or expected. */
const SERIES = [
  {
    name: "Darkmore Penitentiary",
    author: "Caroline Peckham & Susanne Valenti",
    status: "complete",
    books: [
      {title:"Caged Wolf", read:true, readDate:"August 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1680885592i/126128250.jpg"},
      {title:"Alpha Wolf", read:true, readDate:"October 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1622992365i/58272634.jpg"},
      {title:"Feral Wolf", read:true},
      {title:"Wild Wolf", read:true}
    ]
  },
  {
    name: "The Ashen",
    author: "Demi Winters",
    status: "ongoing",
    books: [
      {title:"The Road of Bones", read:true, readDate:null, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1704736755i/205044632.jpg"},
      {title:"Kingdom of Claw", read:true, readDate:"April 2024", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1706976049i/207041696.jpg"},
      {title:"Roots of Darkness", read:true},
      {title:"Dawn of the North", read:true}
    ]
  },
  {
    name: "Red Rising Saga",
    author: "Pierce Brown",
    status: "ongoing",
    books: [
      {title:"Red Rising", read:true},
      {title:"Golden Son", read:true},
      {title:"Morning Star", read:true},
      {title:"Iron Gold", read:true},
      {title:"Dark Age", read:true},
      {title:"Light Bringer", read:false},
      {title:"Red God", read:false}
    ]
  },
  {
    name: "The Ravenhood",
    author: "Kate Stewart",
    status: "complete",
    books: [
      {title:"Flock", read:true},
      {title:"Exodus", read:true},
      {title:"The Finish Line", read:true}
    ]
  },
  {
    name: "The Magicians Trilogy",
    author: "Lev Grossman",
    status: "complete",
    books: [
      {title:"The Magicians", read:true},
      {title:"The Magician King", read:true},
      {title:"The Magician's Land", read:true}
    ]
  },
  {
    name: "Heartstring Duet",
    author: "Liv Zander",
    status: "complete",
    books: [
      {title:"Crown Me Dead", read:true},
      {title:"Crown Me Yours", read:true}
    ]
  },
  {
    name: "The Housemaid",
    author: "Freida McFadden",
    status: "complete",
    books: [
      {title:"The Housemaid", read:true, readDate:"April 2024", cover:"https://covers.openlibrary.org/b/id/15105883-L.jpg"},
      {title:"The Housemaid's Secret", read:true, readDate:"September 2024", cover:"https://covers.openlibrary.org/b/id/13439869-L.jpg"},
      {title:"The Housemaid's Wedding", read:true},
      {title:"The Housemaid Is Watching", read:true, readDate:"September 2024", cover:"https://covers.openlibrary.org/b/id/14633291-L.jpg"}
    ]
  },
  {
    name: "Letters of Enchantment",
    author: "Rebecca Ross",
    status: "complete",
    books: [
      {title:"Divine Rivals", read:false},
      {title:"Ruthless Vows", read:true}
    ]
  },
  {
    name: "The Shining",
    author: "Stephen King",
    status: "complete",
    books: [
      {title:"The Shining", read:false},
      {title:"Doctor Sleep", read:true}
    ]
  },
  {
    name: "Firefly Lane",
    author: "Kristin Hannah",
    status: "complete",
    books: [
      {title:"Firefly Lane", read:false},
      {title:"Fly Away", read:true}
    ]
  },
  {
    name: "Skye O'Shea Paranormal Cozy Mystery",
    author: "Rowan Dillon",
    status: "ongoing",
    books: [
      {title:"A Mystical Legacy", read:true},
      {title:"Bogs, Brews, and Banshees", read:false},
      {title:"Whispers, Whiskey, and Wishes", read:false},
      {title:"Pranks, Poitin, and Pucas", read:false},
      {title:"Roots, Rum, and Revenants", read:false},
      {title:"Spectacles, Sangria, and Selkies", read:false},
      {title:"Greed, Guinness, and Grogochs", read:false}
    ]
  }
];
