/* =========================================================================
   Shared reading data, used by 2026-reading-stats.html, series-tracker.html,
   and all-books.html. Edit here once and every page stays in sync. Add a
   book to `books` (or `pastReads`) and it flows into the all-time library,
   the 2026 stats page, and any series tracker automatically.

   Read status is never hand-set per series/tracker entry. It's computed by
   looking up a book's title in `books` (this year's reads) or `pastReads`
   (everything finished before 2026). Add a title to either array once, and
   every tracker that lists that book checks it off automatically.

   Optional fields you can add to any book entry (in `books` or `pastReads`),
   whenever you're ready:
     rating: 1-5   : your star rating (half-stars like 3.5 are fine). Shown
                     as ★ marks wherever the book appears — master list
                     cards, series pop-ups, and the 2026 genre shelf.
     spicy: true   : marks it as spicy. Shown as a single 🌶️ sticker over
                     the bottom-left corner of the cover. Only add this when
                     told to for a specific book, never guess.
     note: "..."   : your thoughts/review of the book. Tap any cover on the
                     Master List, inside a series pop-up, or on a 2026 genre
                     shelf to see it in a detail popup. Keep it as short or
                     long as you want — plain text only, no HTML.
   Favorites on all-books.html are computed automatically from 5-star
   ratings — rate a book 5 stars and it becomes eligible for its genre's
   Top 10 (and the Series tab's Top Series carousel) with no extra setup.
   ========================================================================= */
const GOAL = 80;
const books = [
  {title:"Sunrise on the Reaping", cover:"https://covers.openlibrary.org/b/isbn/1546171460-L.jpg", author:"Suzanne Collins", genre:["Science Fiction","Young Adult"], pages:419, dateFinished:"2026-01-03", rating:5, pubYear:2025},
  {title:"Feral Wolf", cover:"https://covers.openlibrary.org/b/id/15130580-L.jpg", author:"Caroline Peckham & Susanne Valenti", genre:"Fantasy", pages:408, dateFinished:"2026-01-08", rating:3, pubYear:2021},
  {title:"Untamed", cover:"https://m.media-amazon.com/images/I/51YkYhYbRdL.jpg", author:"Glennon Doyle", genre:"Memoir / Biography", pages:352, dateFinished:"2026-01-10", rating:4, pubYear:2020},
  {title:"Red Rising", cover:"https://covers.openlibrary.org/b/isbn/9780345539786-L.jpg", author:"Pierce Brown", genre:"Science Fiction", pages:401, dateFinished:"2026-01-17", rating:5, pubYear:2014},
  {title:"Golden Son", cover:"https://covers.openlibrary.org/b/id/8454351-L.jpg", author:"Pierce Brown", genre:"Science Fiction", pages:466, dateFinished:"2026-01-22", rating:5, pubYear:2015},
  {title:"Morning Star", cover:"https://covers.openlibrary.org/b/id/8566174-L.jpg", author:"Pierce Brown", genre:"Science Fiction", pages:526, dateFinished:"2026-01-31", rating:5, pubYear:2016},
  {title:"A Mystical Legacy", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1701384644i/203011116.jpg", author:"Rowan Dillon", genre:"Mystery", pages:32, dateFinished:"2026-01-31", rating:2},
  {title:"Roots of Darkness", cover:"https://covers.openlibrary.org/b/id/15151850-L.jpg", author:"Demi Winters", genre:"Fantasy", pages:213, dateFinished:"2026-02-14", rating:5, pubYear:2025},
  {title:"The Thicket", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1727282958i/219539959.jpg", author:"Noelle West Ihli", genre:"Horror", pages:332, dateFinished:"2026-02-22", rating:4, pubYear:2021},
  {title:"Dawn of the North", cover:"https://covers.openlibrary.org/b/id/15215659-L.jpg", author:"Demi Winters", genre:"Fantasy", pages:608, dateFinished:"2026-02-28", rating:5, pubYear:2026},
  {title:"Flock", cover:"https://m.media-amazon.com/images/I/41yC9PdU0gL.jpg", author:"Kate Stewart", genre:"Contemporary Romance", pages:450, dateFinished:"2026-03-01", rating:2, pubYear:2020},
  {title:"Exodus", cover:"https://m.media-amazon.com/images/I/41XHkcLHMEL.jpg", author:"Kate Stewart", genre:"Contemporary Romance", pages:500, dateFinished:"2026-03-10", rating:3, pubYear:2020},
  {title:"The Comfy Cozy Witch's Guide to Making Magic in Your Everyday Life", cover:"https://covers.openlibrary.org/b/id/14804484-L.jpg", author:"Jennie Blonde", genre:"Nonfiction", subgenre:"Spirituality", pages:208, dateFinished:"2026-03-12", rating:3},
  {title:"The Finish Line", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1610549876i/56182388.jpg", author:"Kate Stewart", genre:"Contemporary Romance", pages:560, dateFinished:"2026-03-15", rating:3, pubYear:2024},
  {title:"Project Hail Mary", cover:"https://covers.openlibrary.org/b/id/11200092-L.jpg", author:"Andy Weir", genre:"Science Fiction", pages:496, dateFinished:"2026-03-20", rating:4, pubYear:2021},
  {title:"Just For the Cameras", cover:"https://covers.openlibrary.org/b/id/15170471-L.jpg", author:"Meghan Quinn", genre:"Contemporary Romance", pages:637, dateFinished:"2026-03-22", rating:3, pubYear:2026},
  {title:"We Should All Be Feminists", cover:"https://covers.openlibrary.org/b/id/11324542-L.jpg", author:"Chimamanda Ngozi Adichie", genre:"Nonfiction", subgenre:"Essays", pages:64, dateFinished:"2026-03-25", rating:3, pubYear:2014},
  {title:"Dear Debbie", cover:"https://covers.openlibrary.org/b/id/15171146-L.jpg", author:"Freida McFadden", genre:"Thriller", pages:336, dateFinished:"2026-03-27", rating:3, pubYear:2026},
  {title:"Cleopatra", cover:"https://m.media-amazon.com/images/I/61SqZSwLTvL.jpg", author:"Saara El-Arifi", genre:"Historical Fiction", pages:448, dateFinished:"2026-04-01", rating:2, pubYear:2025},
  {title:"A Wrinkle in Time: The Graphic Novel", cover:"https://covers.openlibrary.org/b/id/7364130-L.jpg", author:"Madeleine L'Engle", genre:["Graphic Novel","Science Fiction","Middle Grade"], pages:392, dateFinished:"2026-04-01", rating:4, pubYear:1962},
  {title:"The Princess Bride", cover:"https://covers.openlibrary.org/b/id/9284881-L.jpg", author:"William Goldman", genre:"Fantasy", pages:432, dateFinished:"2026-04-09", rating:5, pubYear:1973},
  {title:"Ruthless Vows", cover:"https://covers.openlibrary.org/b/id/14572083-L.jpg", author:"Rebecca Ross", genre:"Fantasy", pages:419, dateFinished:"2026-04-23", rating:2, pubYear:2023},
  {title:"The Book Witch", cover:"https://covers.openlibrary.org/b/id/15208007-L.jpg", author:"Meg Shaffer", genre:"Fantasy", pages:320, dateFinished:"2026-04-25", rating:4, pubYear:2026},
  {title:"Katabasis", cover:"https://covers.openlibrary.org/b/id/15117021-L.jpg", author:"R.F. Kuang", genre:"Fantasy", pages:567, dateFinished:"2026-05-02", rating:4, pubYear:2025},
  {title:"The Dinner Party", cover:"https://covers.openlibrary.org/b/id/15235011-L.jpg", author:"Freida McFadden", genre:"Thriller", pages:196, dateFinished:"2026-05-02", rating:3, pubYear:2026},
  {title:"The Magicians", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1715695565i/7125342.jpg", author:"Lev Grossman", genre:"Fantasy", pages:402, dateFinished:"2026-05-07", rating:5, pubYear:2009},
  {title:"The Magician King", cover:"https://m.media-amazon.com/images/I/51uxgRMrw6L.jpg", author:"Lev Grossman", genre:"Fantasy", pages:400, dateFinished:"2026-05-12", rating:5, pubYear:2011},
  {title:"The Magician's Land", cover:"https://m.media-amazon.com/images/I/51TZvbTMO8L.jpg", author:"Lev Grossman", genre:"Fantasy", pages:401, dateFinished:"2026-05-15", rating:5, pubYear:2014},
  {title:"The Last Letter", cover:"https://covers.openlibrary.org/b/id/10165652-L.jpg", author:"Rebecca Yarros", genre:"Contemporary Romance", pages:336, dateFinished:"2026-05-19", rating:4, pubYear:2019},
  {title:"Crown Me Dead", cover:"https://covers.openlibrary.org/b/id/15226806-L.jpg", author:"Liv Zander", genre:"Fantasy", pages:270, dateFinished:"2026-05-21", rating:4, pubYear:2026},
  {title:"Crown Me Yours", cover:"https://covers.openlibrary.org/b/id/15228557-L.jpg", author:"Liv Zander", genre:"Fantasy", pages:244, dateFinished:"2026-05-25", rating:4, pubYear:2026},
  {title:"My Husband's Wife", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1747668611i/231127462.jpg", author:"Alice Feeney", genre:"Thriller", pages:320, dateFinished:"2026-05-26", rating:3.5, pubYear:2026},
  {title:"The Devil at His Elbow", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1712842498i/210454076.jpg", author:"Valerie Bauerlein", genre:"Nonfiction", subgenre:"True Crime", pages:489, dateFinished:"2026-06-03", rating:3, pubYear:2024},
  {title:"Wild Wolf", cover:"https://m.media-amazon.com/images/I/41kTxqoYBwL.jpg", author:"Caroline Peckham & Susanne Valenti", genre:"Fantasy", pages:430, dateFinished:"2026-06-06", rating:3, pubYear:2024},
  {title:"Remarkably Bright Creatures", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1651600548i/58733693.jpg", author:"Shelby Van Pelt", genre:"Literary Fiction", pages:368, dateFinished:"2026-06-07", rating:4, pubYear:2022},
  {title:"Iron Gold", cover:"https://covers.openlibrary.org/b/id/14511722-L.jpg", author:"Pierce Brown", genre:"Science Fiction", pages:605, dateFinished:"2026-06-14", rating:4, pubYear:2018},
  {title:"Pendulum Magic for Beginners", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1386166779i/19176827.jpg", author:"Richard Webster", genre:"Nonfiction", subgenre:"Spirituality", pages:241, dateFinished:"2026-06-28", rating:3, pubYear:2002},
  {title:"Doctor Sleep", cover:"https://covers.openlibrary.org/b/id/14652972-L.jpg", author:"Stephen King", genre:"Horror", pages:531, dateFinished:"2026-06-28", rating:3.5, pubYear:2013},
  {title:"The Housemaid's Wedding", cover:"https://covers.openlibrary.org/b/id/14840898-L.jpg", author:"Freida McFadden", genre:"Thriller", pages:86, dateFinished:"2026-06-29", rating:2, pubYear:2024},
  {title:"Dark Age", cover:"https://covers.openlibrary.org/b/id/8748017-L.jpg", author:"Pierce Brown", genre:"Science Fiction", pages:776, dateFinished:"2026-07-03", rating:4, pubYear:2015},
  {title:"Fly Away", cover:"https://covers.openlibrary.org/b/id/9418741-L.jpg", author:"Kristin Hannah", genre:"Contemporary Fiction", pages:416, dateFinished:"2026-07-07", rating:4, pubYear:2001},
  {title:"107 Days", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1753912443i/232466984.jpg", author:"Kamala Harris", genre:"Memoir / Biography", pages:304, dateFinished:"2026-07-13", rating:4, pubYear:2025},
  {title:"The Count of Monte Cristo", cover:"count-of-monte-cristo/monte-cristo-cover.jpg", author:"Alexandre Dumas", genre:"Classic Literature", pages:1566, dateFinished:"2026-08-01", rating:3.5, pubYear:1844, note:"I liked it. It's about this guy who has like literally everyone out to get him, so then he got back at them and spent years just trying to get revenge. It's pretty epic and I did enjoy it... but oh my goodness it was LOOOOONG. 3.5 stars I think lol"},
  {title:"Funny Story", cover:"https://covers.openlibrary.org/b/id/14625690-L.jpg", author:"Emily Henry", genre:"Contemporary Romance", pages:384, dateFinished:"2026-08-02", rating:4.5, pubYear:2024},
  {title:"Light Bringer", cover:"https://covers.openlibrary.org/b/id/15157697-L.jpg", author:"Pierce Brown", genre:"Science Fiction", pages:682, dateFinished:"2026-08-08", rating:5, pubYear:2022},
  {title:"Atomic Habits", cover:"https://covers.openlibrary.org/b/id/12539702-L.jpg", author:"James Clear", genre:"Nonfiction", subgenre:"Self-Development", pages:319, dateFinished:"2026-08-09", rating:4, pubYear:2016},
  {title:"Dungeon Crawler Carl", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1715780755i/211721806.jpg", author:"Matt Dinniman", genre:"Science Fiction", pages:450, dateFinished:"2026-08-13", rating:4, pubYear:2020},
  {title:"Sharp Objects", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1475695315i/18045891._SX300_.jpg", author:"Gillian Flynn", genre:["Thriller","Mystery"], pages:254, dateFinished:"2026-08-15", rating:2, pubYear:2006},
  {title:"And Now, Back to You", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1748482477i/217513554.jpg", author:"B.K. Borison", genre:"Contemporary Romance", pages:464, dateFinished:"2026-08-16", rating:2, pubYear:2026, note:"Listened on audiobook. The one-bed, stuck-together trope felt more corny than swoony this time, and I skipped past the spicy scenes. Two meteorologists ending up working together was a fun premise, but this one just didn't click for me — probably won't continue the series."},
  {title:"Control Unleashed: Creating a Focused and Confident Dog", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1349894884i/2101812.jpg", author:"Leslie McDevitt", genre:"Nonfiction", subgenre:"Dogs", pages:226, dateFinished:"2026-08-17", rating:2, pubYear:2007, note:"It was fine, but got pretty boring toward the end. This is really written for someone running a class or working with dogs in groups, or training sport dogs for agility-type activities — not a lot of it ended up practical for my own dogs. That said, I did pick up a few fun games and exercises out of it that I thought were cool."},
  {title:"Carl's Doomsday Scenario", cover:"https://covers.openlibrary.org/b/olid/OL51633677M-L.jpg", author:"Matt Dinniman", genre:"Science Fiction", pages:528, dateFinished:"2026-08-21", rating:5, pubYear:2021, note:"I really love the Carl & Donut dynamic — that's easily my favorite part. The video game/LitRPG stuff is growing on me too. Book 1 kind of threw me off with how weird and dark it got, but now that I know what to expect going in, I'm enjoying it a lot more."},
];

/* Everything finished before 2026 that still shows up as "read" on a
   tracker page. Same idea as `books` above but without stats-page fields
   (pages/dateFinished), just enough to check a title off, show what genre
   shelf it belongs on, and show when/what cover to use.
   `genre` was backfilled from the master genre list used on the 2026 stats
   page. Double check any that look off and adjust freely. */
const pastReads = [
  {title:"The Awakening", genre:"Fantasy", readDate:"March 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1560277389i/46261182.jpg", pubYear:2019},
  {title:"Ruthless Fae", genre:"Fantasy", readDate:"March 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1565943045l/51966347.jpg"},
  {title:"The Reckoning", genre:"Fantasy", readDate:"March 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1635198815i/59450488.jpg"},
  {title:"Origins of an Academy Bully", genre:"Fantasy", readDate:"June 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1677104440i/49646047.jpg"},
  {title:"Shadow Princess", genre:"Fantasy", readDate:"June 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1570223430l/53146871.jpg"},
  {title:"Cursed Fates", genre:"Fantasy", readDate:"June 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1578710951i/50391615.jpg"},
  {title:"The Big A.S.S. Party", genre:"Fantasy", readDate:"June 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1596452502i/54798561.jpg", pubYear:2020},
  {title:"Fated Throne", genre:"Fantasy", readDate:"June 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1605478159i/53535526.jpg"},
  {title:"The Awakening as Told by the Boys", genre:"Fantasy", readDate:"June 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1629291604i/58800799.jpg", pubYear:2021},
  {title:"Heartless Sky", genre:"Fantasy", readDate:"June 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1628199263i/56474282.jpg"},
  {title:"Sorrow and Starlight", genre:"Fantasy", readDate:"July 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1664442356i/59808792.jpg"},
  {title:"Beyond the Veil", genre:"Fantasy", readDate:"July 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1686777106i/177899172.jpg"},
  {title:"Live and Let Lionel", genre:"Fantasy", readDate:"July 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1707177040i/207603149.jpg"},
  {title:"Restless Stars", genre:"Fantasy", readDate:"July 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1711995687i/198954263.jpg"},
  {title:"Caged Wolf", genre:"Fantasy", readDate:"August 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1680885592i/126128250.jpg", pubYear:2021},
  {title:"Alpha Wolf", genre:"Fantasy", readDate:"October 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1622992365i/58272634.jpg", pubYear:2023},
  {title:"The Road of Bones", genre:"Fantasy", readDate:null, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1704736755i/205044632.jpg", pubYear:2025},
  {title:"Kingdom of Claw", genre:"Fantasy", readDate:"April 2024", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1706976049i/207041696.jpg", pubYear:2025},
  {title:"The Housemaid", genre:"Thriller", readDate:"April 2024", cover:"https://covers.openlibrary.org/b/id/15105883-L.jpg", pubYear:2022},
  {title:"The Housemaid's Secret", genre:"Thriller", readDate:"September 2024", cover:"https://covers.openlibrary.org/b/id/13439869-L.jpg", pubYear:2023},
  {title:"The Housemaid Is Watching", genre:"Thriller", readDate:"September 2024", cover:"https://covers.openlibrary.org/b/id/14633291-L.jpg", pubYear:2024},
  {title:"Divine Rivals", genre:"Fantasy", readDate:"February 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1661929417i/62202008.jpg", pubYear:2023},
  {title:"The Shining", genre:"Horror", readDate:"October 2024", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1353277730i/11588.jpg", rating:2, pubYear:1977},
  {title:"Firefly Lane", genre:"Contemporary Fiction", readDate:"April 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1485338283i/3524297.jpg", pubYear:2008},
  {title:"Dark Fae", genre:"Fantasy", readDate:"May 2025", cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1619705977i/57892054._SY180_.jpg", pubYear:2020},
  {title:"Savage Fae", genre:"Fantasy", readDate:"May 2025", cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1619382623i/57849105._SY180_.jpg", pubYear:2020},
  {title:"Vicious Fae", genre:"Fantasy", readDate:"May 2025", cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1619382736i/57849111._SY180_.jpg", pubYear:2020},
  {title:"Broken Fae", genre:"Fantasy", readDate:"June 2025", cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1619382818i/57849125._SY180_.jpg", pubYear:2022},
  {title:"Warrior Fae", genre:"Fantasy", readDate:"June 2025", cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1619382385i/57849074._SY180_.jpg", pubYear:2022},
  {title:"Scythe", genre:["Young Adult","Science Fiction"], readDate:"September 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1456172676i/28954189.jpg", pubYear:2016},
  {title:"Powerless", genre:["Young Adult","Fantasy"], readDate:"June 2024", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1672676191i/75513900.jpg", pubYear:2023},
  {title:"Powerful", genre:["Young Adult","Fantasy"], readDate:"June 2024", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1731714728i/203840597.jpg", pubYear:2024},
  {title:"Reckless", genre:["Young Adult","Fantasy"], readDate:"July 2024", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1731714752i/183086339.jpg", pubYear:2024},
  {title:"Fearless", genre:["Young Adult","Fantasy"], readDate:"August 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1730330746i/214151222.jpg", pubYear:2025},
  {title:"Wicked: Everyone Deserves the Chance to Fly", genre:["Fantasy","Literary Fiction"], readDate:"December 2024", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1733855486i/30241301.jpg", rating:3, pubYear:1995},
  {title:"Assistant to the Villain", genre:"Fantasy", readDate:"August 2024", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1702057336i/123257687.jpg", pubYear:2023},
  {title:"First-Time Caller", genre:"Contemporary Romance", readDate:"July 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1718283728i/213243908.jpg", pubYear:2025},
  {title:"The Assassin's Blade", genre:["Fantasy","Young Adult"], readDate:"November 2023", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1680869667i/126062562.jpg", pubYear:2014},
  {title:"Throne of Glass", genre:["Fantasy","Young Adult"], readDate:"October 2023", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1673566495i/76703559.jpg", pubYear:2012},
  {title:"Crown of Midnight", genre:["Fantasy","Young Adult"], readDate:"October 2023", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1673566594i/76705490.jpg", pubYear:2013},
  {title:"Heir of Fire", genre:["Fantasy","Young Adult"], readDate:"October 2023", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1673566654i/76706470.jpg", pubYear:2014},
  {title:"Queen of Shadows", genre:["Fantasy","Young Adult"], readDate:"November 2023", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1677267561i/123004944.jpg", pubYear:2015},
  {title:"Empire of Storms", genre:["Fantasy","Young Adult"], readDate:"December 2023", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1676979605i/76713323.jpg", pubYear:2016},
  {title:"Tower of Dawn", genre:["Fantasy","Young Adult"], readDate:"January 2024", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1673567264i/76714487.jpg", pubYear:2017},
  {title:"Kingdom of Ash", genre:["Fantasy","Young Adult"], readDate:"January 2024", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1673567331i/76715522.jpg", pubYear:2018},
  {title:"A Court of Thorns and Roses", genre:"Fantasy", readDate:"July 2023", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1620324329i/50659467.jpg", pubYear:2013},
  {title:"A Court of Mist and Fury", genre:"Fantasy", readDate:"July 2023", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1620325671i/50659468.jpg", pubYear:2020},
  {title:"A Court of Wings and Ruin", genre:"Fantasy", readDate:"August 2023", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1585623092i/50659472.jpg", pubYear:2017},
  {title:"A Court of Frost and Starlight", genre:"Fantasy", readDate:"August 2023", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1585622963i/50659471.jpg", pubYear:2018},
  {title:"A Court of Silver Flames", genre:"Fantasy", readDate:"August 2023", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1734440950i/53138095.jpg", pubYear:2021},
  {title:"House of Earth and Blood", genre:"Fantasy", readDate:"February 2024", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1559142847i/44778083.jpg", pubYear:2019},
  {title:"House of Sky and Breath", genre:"Fantasy", readDate:"February 2024", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1633097753i/40132775.jpg", pubYear:2022},
  {title:"House of Flame and Shadow", genre:"Fantasy", readDate:"February 2024", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1689809645i/52857700.jpg", pubYear:2024},
  {title:"Fourth Wing", genre:"Fantasy", readDate:"November 2023", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1761312598i/61431922.jpg", pubYear:2023},
  {title:"Iron Flame", genre:"Fantasy", readDate:"December 2023", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1706724269i/90202302.jpg", pubYear:2023},
  {title:"Onyx Storm", genre:"Fantasy", readDate:"February 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1766329694i/209439446.jpg", pubYear:2025},
  {title:"'Salem's Lot", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1554318143i/18128._SX300_.jpg", genre:"Horror", author:"Stephen King", readDate:null, rating:4, pubYear:1975},
  {title:"A Christmas Carol", cover:"https://covers.openlibrary.org/b/id/12875748-L.jpg", genre:"Classic Literature", author:"Charles Dickens", readDate:"December 2025", rating:4, pubYear:1843},
  {title:"A Christmas Carol Murder", genre:"Mystery", author:"Heather Redmond", readDate:"December 2025", rating:3, cover:"https://is1-ssl.mzstatic.com/image/thumb/Publication125/v4/98/37/c6/9837c627-f9b6-cf77-2c8c-153a8392c146/9781496717207.jpg/600x600bb.jpg"},
  {title:"A Curse for True Love", cover:"https://covers.openlibrary.org/b/id/13124827-L.jpg", genre:["Fantasy","Young Adult"], author:"Stephanie Garber", readDate:"April 2024", pubYear:2023},
  {title:"A Game of Fate", cover:"https://covers.openlibrary.org/b/id/10450006-L.jpg", genre:"Fantasy", author:"Scarlett St. Clair", readDate:"February 2024", pubYear:2020},
  {title:"A Murder to Remember", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1768605692i/246687262._SX300_.jpg", genre:"Mystery", author:"Brynn Kelly", readDate:"October 2025", rating:2, pubYear:2018},
  {title:"A Swiftly Tilting Planet", cover:"https://covers.openlibrary.org/b/id/8223424-L.jpg", genre:["Middle Grade","Science Fiction"], author:"Madeleine L'Engle", readDate:null, pubYear:1978},
  {title:"A Touch of Darkness", cover:"https://covers.openlibrary.org/b/id/10363130-L.jpg", genre:"Fantasy", author:"Scarlett St. Clair", readDate:"February 2024", pubYear:2019},
  {title:"A Touch of Ruin", cover:"https://covers.openlibrary.org/b/id/11357445-L.jpg", genre:"Fantasy", author:"Scarlett St. Clair", readDate:"June 2024", pubYear:2020},
  {title:"A Welcome Reunion", genre:"Thriller", author:"Lucinda Berry", readDate:"July 2024", pubYear:2023},
  {title:"A Wind in the Door", cover:"https://covers.openlibrary.org/b/id/8276481-L.jpg", genre:["Middle Grade","Science Fiction"], author:"Madeleine L'Engle", readDate:null, pubYear:1973},
  {title:"A Wrinkle in Time", cover:"https://covers.openlibrary.org/b/id/8709146-L.jpg", genre:["Middle Grade","Science Fiction"], author:"Madeleine L'Engle", readDate:null, pubYear:1962},
  {title:"Alice's Adventures in Wonderland & Through the Looking Glass: Lavishly Illustrated with Interactive Elements", cover:"https://covers.openlibrary.org/b/id/8595966-L.jpg", genre:["Classic Literature","Fantasy"], author:"Lewis Carroll", readDate:"August 2025", pubYear:1889},
  {title:"Allegiant", cover:"https://covers.openlibrary.org/b/id/7276393-L.jpg", genre:["Young Adult","Science Fiction"], author:"Veronica Roth", readDate:null, pubYear:2011},
  {title:"An Acceptable Time", cover:"https://covers.openlibrary.org/b/id/8285726-L.jpg", genre:["Middle Grade","Science Fiction"], author:"Madeleine L'Engle", readDate:null, pubYear:1989},
  {title:"Anne of Green Gables", cover:"https://covers.openlibrary.org/b/id/14641084-L.jpg", genre:["Middle Grade","Classic Literature"], author:"L.M. Montgomery", readDate:null, pubYear:1908},
  {title:"Artificial Truth", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1752494069i/231470374.jpg", genre:"Science Fiction", author:"Jung-Myung Lee", readDate:"November 2025"},
  {title:"Astro Poets: Your Guides to the Zodiac", cover:"https://covers.openlibrary.org/b/id/9331284-L.jpg", genre:"Nonfiction", author:"Alex Dimitrov", readDate:"April 2024", pubYear:2019},
  {title:"Beyond the Wand: The Magic & Mayhem of Growing Up a Wizard", genre:"Memoir / Biography", author:"Tom Felton", readDate:"March 2024", cover:"https://is1-ssl.mzstatic.com/image/thumb/Publication122/v4/bc/97/12/bc9712f7-0e68-a8ce-5e8b-b8e61e96c19c/9781538741382.jpg/600x600bb.jpg", rating:2.5},
  {title:"Black Beauty", cover:"https://covers.openlibrary.org/b/id/5007492-L.jpg", genre:["Classic Literature","Middle Grade"], author:"Anna Sewell", readDate:null, pubYear:1877},
  {title:"Blood of Elves", cover:"https://covers.openlibrary.org/b/id/8457619-L.jpg", genre:"Fantasy", author:"Andrzej Sapkowski", readDate:"January 2024", pubYear:1994},
  {title:"Bloody Jack: Being an Account of the Curious Adventures of Mary \"Jacky\" Faber, Ship's Boy", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1328336242i/8488973.jpg", genre:["Young Adult","Historical Fiction"], author:"L.A. Meyer", readDate:"August 2024", rating:3.5, pubYear:2003},
  {title:"BookMail: A Meta Horror Novel", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1746988324i/230237670._SX300_.jpg", genre:"Horror", author:"Jason R. Davis", readDate:"November 2025", rating:3},
  {title:"Breaking Dawn", cover:"https://covers.openlibrary.org/b/id/12643419-L.jpg", genre:["Fantasy","Young Adult"], author:"Stephenie Meyer", readDate:null, pubYear:2000},
  {title:"Bridge to Terabithia", cover:"https://covers.openlibrary.org/b/id/12627341-L.jpg", genre:"Middle Grade", author:"Katherine Paterson", readDate:null, pubYear:1972},
  {title:"Brimstone", cover:"https://covers.openlibrary.org/b/id/15146289-L.jpg", genre:"Fantasy", author:"Callie Hart", readDate:"December 2025", pubYear:2025},
  {title:"Broken Country", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1741267777i/214151202._SX300_.jpg", genre:"Literary Fiction", author:"Clare Leslie Hall", readDate:"November 2025", rating:2, pubYear:2025},
  {title:"Building a Second Brain: A Proven Method to Organize Your Digital Life and Unlock Your Creative Potential", cover:"https://covers.openlibrary.org/b/id/12372866-L.jpg", genre:"Nonfiction", subgenre:"Self-Development", author:"Tiago Forte", readDate:"February 2025", pubYear:2022},
  {title:"Caraval", cover:"https://covers.openlibrary.org/b/id/7990753-L.jpg", genre:["Fantasy","Young Adult"], author:"Stephanie Garber", readDate:"March 2024", pubYear:2000},
  {title:"Catching Fire", cover:"https://covers.openlibrary.org/b/id/12878880-L.jpg", genre:["Science Fiction","Young Adult"], author:"Suzanne Collins", readDate:"October 2023", pubYear:2010},
  {title:"Circe", cover:"https://covers.openlibrary.org/b/id/8739376-L.jpg", genre:["Mythology","Literary Fiction"], author:"Madeline Miller", readDate:"November 2018", rating:5, pubYear:2018},
  {title:"City of Ashes", cover:"https://covers.openlibrary.org/b/id/1787130-L.jpg", genre:["Young Adult","Fantasy"], author:"Cassandra Clare", readDate:null, pubYear:2008},
  {title:"City of Bones", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1432730315i/256683.jpg", genre:["Young Adult","Fantasy"], author:"Cassandra Clare", readDate:null, pubYear:2007},
  {title:"City of Glass", cover:"https://covers.openlibrary.org/b/id/8200332-L.jpg", genre:["Young Adult","Fantasy"], author:"Cassandra Clare", readDate:null, pubYear:2009},
  {title:"Conflicted: How Productive Disagreements Lead to Better Outcomes", cover:"https://covers.openlibrary.org/b/id/10657607-L.jpg", genre:"Nonfiction", author:"Ian Leslie", readDate:"June 2024", pubYear:2021},
  {title:"Curse of the Blue Tattoo: Being an Account of the Misadventures of Jacky Faber, Midshipman and Fine Lady", genre:["Young Adult","Historical Fiction"], author:"L.A. Meyer", readDate:null, cover:"https://is1-ssl.mzstatic.com/image/thumb/Publication116/v4/1d/8f/52/1d8f526d-2825-dfc7-93ae-5de20a7eb176/9780547415871.jpg/600x600bb.jpg"},
  {title:"Death Row", cover:"https://covers.openlibrary.org/b/id/15103391-L.jpg", genre:"Thriller", author:"Freida McFadden", readDate:"August 2025", pubYear:2025},
  {title:"Divergent", cover:"https://covers.openlibrary.org/b/id/13274634-L.jpg", genre:["Young Adult","Science Fiction"], author:"Veronica Roth", readDate:null, pubYear:2010},
  {title:"Dr. Jekyll and Mr. Hyde", cover:"https://covers.openlibrary.org/b/id/295773-L.jpg", genre:["Classic Literature","Horror"], author:"Robert Louis Stevenson", readDate:null, pubYear:1875},
  {title:"Dune", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg", genre:"Science Fiction", author:"Frank Herbert", readDate:"May 2024", pubYear:1965},
  {title:"Eclipse", cover:"https://covers.openlibrary.org/b/id/12643410-L.jpg", genre:["Fantasy","Young Adult"], author:"Stephenie Meyer", readDate:null, pubYear:2006},
  {title:"Ella Enchanted", cover:"https://covers.openlibrary.org/b/id/50323-L.jpg", genre:["Middle Grade","Fantasy"], author:"Gail Carson Levine", readDate:null, pubYear:1997},
  {title:"Enchantra", cover:"https://covers.openlibrary.org/b/id/15115281-L.jpg", genre:"Fantasy", author:"Kaylie Smith", readDate:"April 2025", pubYear:2025},
  {title:"Eragon", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1366212852i/113436.jpg", genre:["Fantasy","Young Adult"], author:"Christopher Paolini", readDate:null, pubYear:2000},
  {title:"Erasing History: How Fascists Rewrite the Past to Control the Future", genre:"Nonfiction", author:"Jason F. Stanley", readDate:"July 2025"},
  {title:"Everything Is Tuberculosis: The History and Persistence of Our Deadliest Infection", cover:"https://covers.openlibrary.org/b/id/14853332-L.jpg", genre:"Nonfiction", author:"John Green", readDate:"November 2025", pubYear:2025},
  {title:"Extras", cover:"https://covers.openlibrary.org/b/id/1787209-L.jpg", genre:["Young Adult","Science Fiction"], author:"Scott Westerfeld", readDate:null, pubYear:2007},
  {title:"Extreme Ownership: How U.S. Navy SEALs Lead and Win", cover:"https://covers.openlibrary.org/b/id/12835042-L.jpg", genre:"Nonfiction", subgenre:"Self-Development", author:"Jocko Willink", readDate:"December 2022", pubYear:2015},
  {title:"Fairy Tale", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1647789287i/60177373.jpg", genre:["Fantasy","Horror"], author:"Stephen King", readDate:"December 2022", rating:4, pubYear:2022},
  {title:"False Note", genre:"Thriller", author:"David Lagercrantz", readDate:"September 2025"},
  {title:"Fifty Shades Darker", cover:"https://covers.openlibrary.org/b/id/14566702-L.jpg", genre:"Contemporary Romance", author:"E.L. James", readDate:null, pubYear:2011},
  {title:"Fifty Shades Freed", cover:"https://covers.openlibrary.org/b/id/14566669-L.jpg", genre:"Contemporary Romance", author:"E.L. James", readDate:null, pubYear:2011},
  {title:"Fifty Shades of Grey", cover:"https://covers.openlibrary.org/b/id/12648183-L.jpg", genre:"Contemporary Romance", author:"E.L. James", readDate:null, pubYear:2000},
  {title:"Finale", cover:"https://covers.openlibrary.org/b/id/8802288-L.jpg", genre:["Fantasy","Young Adult"], author:"Stephanie Garber", readDate:"March 2024", pubYear:2018},
  {title:"Flowers for Algernon", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1689071681i/18373.jpg", genre:["Science Fiction","Literary Fiction"], author:"Daniel Keyes", readDate:null, pubYear:1966},
  {title:"Friends, Lovers, and the Big Terrible Thing", cover:"https://covers.openlibrary.org/b/id/13133707-L.jpg", genre:"Memoir / Biography", author:"Matthew Perry", readDate:"January 2024", pubYear:2022},
  {title:"Galatea: A Short Story", cover:"https://covers.openlibrary.org/b/id/12871689-L.jpg", genre:["Mythology","Literary Fiction"], author:"Madeline Miller", readDate:"November 2025", rating:3, pubYear:2013},
  {title:"Gone Girl", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1554086139i/19288043.jpg", genre:["Thriller","Mystery"], author:"Gillian Flynn", readDate:"March 2024", rating:3, pubYear:2011},
  {title:"Good Neighbors", genre:"Thriller", author:"Chad Zunker", readDate:"September 2025"},
  {title:"Greenlights", cover:"https://covers.openlibrary.org/b/id/10512439-L.jpg", genre:"Memoir / Biography", author:"Matthew McConaughey", readDate:"September 2025", rating:3, pubYear:2020},
  {title:"Hamlet", cover:"https://covers.openlibrary.org/b/id/8281954-L.jpg", genre:"Classic Literature", author:"William Shakespeare", readDate:null, pubYear:1603},
  {title:"Harry Potter and the Chamber of Secrets", cover:"https://covers.openlibrary.org/b/id/15158664-L.jpg", genre:["Fantasy","Young Adult"], author:"J.K. Rowling", readDate:null, pubYear:1998},
  {title:"Harry Potter and the Cursed Child: Parts One and Two", cover:"https://covers.openlibrary.org/b/id/13192207-L.jpg", genre:["Fantasy","Young Adult"], author:"J.K. Rowling", readDate:null, pubYear:2020},
  {title:"Harry Potter and the Deathly Hallows", cover:"https://covers.openlibrary.org/b/id/15158660-L.jpg", genre:["Fantasy","Young Adult"], author:"J.K. Rowling", readDate:null, pubYear:2007},
  {title:"Harry Potter and the Goblet of Fire", cover:"https://covers.openlibrary.org/b/id/12059372-L.jpg", genre:["Fantasy","Young Adult"], author:"J.K. Rowling", readDate:null, pubYear:2000},
  {title:"Harry Potter and the Half-Blood Prince", cover:"https://covers.openlibrary.org/b/id/10716273-L.jpg", genre:["Fantasy","Young Adult"], author:"J.K. Rowling", readDate:null, pubYear:2005},
  {title:"Harry Potter and the Order of the Phoenix", cover:"https://covers.openlibrary.org/b/id/15158666-L.jpg", genre:["Fantasy","Young Adult"], author:"J.K. Rowling", readDate:null, pubYear:2003},
  {title:"Harry Potter and the Prisoner of Azkaban", cover:"https://covers.openlibrary.org/b/id/10580435-L.jpg", genre:["Fantasy","Young Adult"], author:"J.K. Rowling", readDate:null, pubYear:1999},
  {title:"Harry Potter and the Sorcerer's Stone", cover:"https://covers.openlibrary.org/b/id/276518-L.jpg", genre:["Fantasy","Young Adult"], author:"J.K. Rowling", readDate:null, pubYear:2000},
  {title:"Haunted World: 101 Ghostly Places and Encounters", genre:"Nonfiction", author:"Theresa Cheung", readDate:"August 2025", cover:"https://is1-ssl.mzstatic.com/image/thumb/Publication211/v4/40/52/1f/40521fcf-8823-305b-2b3e-101a83723931/9781789295818.jpg/600x600bb.jpg", pubYear:2024},
  {title:"Haunting Adeline", cover:"https://covers.openlibrary.org/b/id/12992962-L.jpg", genre:"Thriller", author:"H.D. Carlton", readDate:"April 2024", pubYear:2021},
  {title:"He's Just Not That Into You: The No-Excuses Truth to Understanding Guys", cover:"https://covers.openlibrary.org/b/id/7109886-L.jpg", genre:"Nonfiction", subgenre:"Self-Development", author:"Greg Behrendt", readDate:null, pubYear:2006},
  {title:"Hell Bent", cover:"https://covers.openlibrary.org/b/id/14357966-L.jpg", genre:"Fantasy", author:"Leigh Bardugo", readDate:"September 2024", pubYear:2023},
  {title:"Holes", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1618269830i/38709._SX300_.jpg", genre:["Middle Grade","Mystery"], author:"Louis Sachar", readDate:null, rating:3, pubYear:1988},
  {title:"Homegoing", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1697879604i/163610118._SX300_.jpg", genre:["Historical Fiction","Literary Fiction"], author:"Yaa Gyasi", readDate:null, rating:4, pubYear:2016},
  {title:"How Stella Learned to Talk: The Groundbreaking Story of the World's First Talking Dog", cover:"https://covers.openlibrary.org/b/id/11007314-L.jpg", genre:"Nonfiction", subgenre:"Dogs", author:"Christina Hunger", readDate:"March 2023", pubYear:2021},
  {title:"Hunting Adeline", cover:"https://covers.openlibrary.org/b/id/14614757-L.jpg", genre:"Thriller", author:"H.D. Carlton", readDate:"April 2024", pubYear:2021},
  {title:"I'm Glad My Mom Died", cover:"https://covers.openlibrary.org/b/id/12855985-L.jpg", genre:"Memoir / Biography", author:"Jennette McCurdy", readDate:null, rating:3, pubYear:2022},
  {title:"Inside of a Dog: What Dogs See, Smell, and Know", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1347980799i/6332526.jpg", genre:"Nonfiction", subgenre:"Dogs", author:"Alexandra Horowitz", readDate:"June 2024", pubYear:2009},
  {title:"Insurgent", cover:"https://covers.openlibrary.org/b/id/7083755-L.jpg", genre:["Young Adult","Science Fiction"], author:"Veronica Roth", readDate:null, pubYear:2011},
  {title:"It Ends with Us", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1670795825i/62627512._SX300_.jpg", genre:"Contemporary Romance", author:"Colleen Hoover", readDate:"May 2024", pubYear:2012},
  {title:"It Starts with Us", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1644605295i/60393672.jpg", genre:"Contemporary Romance", author:"Colleen Hoover", readDate:"July 2024", rating:2.5, pubYear:2022},
  {title:"It's Not Summer Without You", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1651389070i/60911707._SX300_.jpg", genre:["Young Adult","Contemporary Romance"], author:"Jenny Han", readDate:"March 2024", rating:4, pubYear:2010},
  {title:"James and the Giant Peach", cover:"https://covers.openlibrary.org/b/id/8252454-L.jpg", genre:["Middle Grade","Fantasy"], author:"Roald Dahl", readDate:null, pubYear:1961},
  {title:"Jane Eyre", cover:"https://covers.openlibrary.org/b/id/8235363-L.jpg", genre:"Classic Literature", author:"Charlotte Brontë", readDate:null, pubYear:1847},
  {title:"Legendary", cover:"https://covers.openlibrary.org/b/id/9242465-L.jpg", genre:["Fantasy","Young Adult"], author:"Stephanie Garber", readDate:"March 2024", pubYear:2018},
  {title:"Lessons in Chemistry", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1634748496i/58065033._SX300_.jpg", genre:["Historical Fiction","Literary Fiction"], author:"Bonnie Garmus", readDate:null, rating:2, pubYear:2022},
  {title:"Little Women", cover:"https://covers.openlibrary.org/b/id/8775559-L.jpg", genre:"Classic Literature", author:"Louisa May Alcott", readDate:null, pubYear:1868},
  {title:"Lord of the Flies", cover:"https://covers.openlibrary.org/b/id/8684447-L.jpg", genre:"Classic Literature", author:"William Golding", readDate:null, pubYear:1954},
  {title:"Loud: Accept Nothing Less Than the Life You Deserve", cover:"https://covers.openlibrary.org/b/id/15112929-L.jpg", genre:"Nonfiction", author:"Drew Afualo", readDate:"September 2024", pubYear:2024},
  {title:"Macbeth", cover:"https://covers.openlibrary.org/b/id/872432-L.jpg", genre:"Classic Literature", author:"William Shakespeare", readDate:null, pubYear:1508},
  {title:"Manacled", cover:"https://covers.openlibrary.org/b/id/13839050-L.jpg", genre:"Fantasy", author:"SenLinYu", readDate:"March 2024", pubYear:2018},
  {title:"Many Waters", cover:"https://covers.openlibrary.org/b/id/6536498-L.jpg", genre:["Middle Grade","Science Fiction"], author:"Madeleine L'Engle", readDate:null, pubYear:1986},
  {title:"Midnight Sun", cover:"https://covers.openlibrary.org/b/id/9946539-L.jpg", genre:["Fantasy","Young Adult"], author:"Stephenie Meyer", readDate:null, pubYear:2020},
  {title:"Mockingjay", cover:"https://covers.openlibrary.org/b/id/12646459-L.jpg", genre:["Science Fiction","Young Adult"], author:"Suzanne Collins", readDate:"October 2023", pubYear:2010},
  {title:"New Moon", cover:"https://covers.openlibrary.org/b/id/12643406-L.jpg", genre:["Fantasy","Young Adult"], author:"Stephenie Meyer", readDate:null, pubYear:2006},
  {title:"Next Level Basic: The Definitive Basic Bitch Handbook", cover:"https://covers.openlibrary.org/b/id/9008353-L.jpg", genre:"Nonfiction", author:"Stassi Schroeder", readDate:"April 2024", pubYear:2019},
  {title:"Nice Girls Don't Get the Corner Office: 101 Unconscious Mistakes Women Make That Sabotage Their Careers", cover:"https://covers.openlibrary.org/b/id/286348-L.jpg", genre:"Nonfiction", subgenre:"Self-Development", author:"Lois P. Frankel", readDate:"July 2023", pubYear:2004},
  {title:"Nikola Tesla: Imagination and the Man That Invented the 20th Century", genre:"Memoir / Biography", author:"Sean Patrick", readDate:"December 2025", cover:"https://is1-ssl.mzstatic.com/image/thumb/Publication2/v4/fa/25/4a/fa254a07-cc2b-d210-0c98-4366b527c02d/Tesla_HR.jpg/600x600bb.jpg", rating:2},
  {title:"Ninth House", cover:"https://covers.openlibrary.org/b/id/12667414-L.jpg", genre:"Fantasy", author:"Leigh Bardugo", readDate:"September 2024", pubYear:2019},
  {title:"Nobody's Girl: A Memoir of Surviving Abuse and Fighting for Justice", cover:"https://covers.openlibrary.org/b/id/15134796-L.jpg", genre:"Memoir / Biography", author:"Virginia Roberts Giuffre", readDate:"December 2025", rating:4, pubYear:2025},
  {title:"On Writing: A Memoir of the Craft", cover:"https://covers.openlibrary.org/b/id/9255939-L.jpg", genre:"Nonfiction", author:"Stephen King", readDate:"February 2024", pubYear:1999},
  {title:"Once Upon a Broken Heart", cover:"https://covers.openlibrary.org/b/id/11427092-L.jpg", genre:["Fantasy","Young Adult"], author:"Stephanie Garber", readDate:"March 2024", pubYear:2021},
  {title:"Phantasma", cover:"https://covers.openlibrary.org/b/id/14842920-L.jpg", genre:"Fantasy", author:"Kaylie Smith", readDate:"April 2025", pubYear:2024},
  {title:"Pretties", cover:"https://covers.openlibrary.org/b/id/1474615-L.jpg", genre:["Young Adult","Science Fiction"], author:"Scott Westerfeld", readDate:null, pubYear:2005},
  {title:"Prince Caspian", cover:"https://covers.openlibrary.org/b/id/45897-L.jpg", genre:["Middle Grade","Fantasy"], author:"C.S. Lewis", readDate:null, pubYear:1951},
  {title:"Quicksilver", cover:"https://covers.openlibrary.org/b/id/15227615-L.jpg", genre:"Fantasy", author:"Callie Hart", readDate:"February 2025", pubYear:2024},
  {title:"Rebel Rising", genre:"Memoir / Biography", author:"Rebel Wilson", readDate:"July 2024", cover:"https://is1-ssl.mzstatic.com/image/thumb/Publication211/v4/ae/39/1f/ae391f79-b9a0-a80d-6dec-49bba616c4f9/9781668007242.jpg/600x600bb.jpg", rating:3, pubYear:2024},
  {title:"Revenge of The Reaper", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1784178776i/255499535.jpg", genre:"Horror", author:"Molly R. Anderson", readDate:null},
  {title:"Romeo and Juliet", cover:"https://covers.openlibrary.org/b/id/8257991-L.jpg", genre:"Classic Literature", author:"William Shakespeare", readDate:null, pubYear:1597},
  {title:"Run, Rose, Run", cover:"https://covers.openlibrary.org/b/id/11581994-L.jpg", genre:"Thriller", author:"Dolly Parton", readDate:"December 2023", pubYear:2022},
  {title:"Saving Noah", cover:"https://covers.openlibrary.org/b/id/11993833-L.jpg", genre:"Thriller", author:"Lucinda Berry", readDate:"May 2024", pubYear:2017},
  {title:"Shape Up: Stop Running in Circles and Ship Work that Matters", cover:"https://covers.openlibrary.org/b/id/12600273-L.jpg", genre:"Nonfiction", subgenre:"Self-Development", author:"Ryan Singer", readDate:"October 2024", pubYear:2019},
  {title:"Six Scorched Roses", cover:"https://covers.openlibrary.org/b/id/13764916-L.jpg", genre:"Fantasy", author:"Carissa Broadbent", readDate:"May 2025", pubYear:2023},
  {title:"Slaying the Vampire Conqueror", cover:"https://covers.openlibrary.org/b/id/15163940-L.jpg", genre:"Fantasy", author:"Carissa Broadbent", readDate:"October 2025", pubYear:2025},
  {title:"Small Things", cover:"https://covers.openlibrary.org/b/id/8404327-L.jpg", genre:"Thriller", author:"Wanda M. Morris", readDate:"September 2025", pubYear:1991},
  {title:"Specials", cover:"https://covers.openlibrary.org/b/id/761913-L.jpg", genre:["Young Adult","Science Fiction"], author:"Scott Westerfeld", readDate:null, pubYear:2006},
  {title:"Spinning Silver", cover:"https://covers.openlibrary.org/b/id/8423441-L.jpg", genre:"Fantasy", author:"Naomi Novik", readDate:"March 2025", pubYear:2018},
  {title:"Sword of Destiny", cover:"https://covers.openlibrary.org/b/id/11102583-L.jpg", genre:"Fantasy", author:"Andrzej Sapkowski", readDate:"January 2024", pubYear:2019},
  {title:"Talking As Fast As I Can: From Gilmore Girls to Gilmore Girls, and Everything in Between", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1528327669i/40411206.jpg", genre:"Memoir / Biography", author:"Lauren Graham", readDate:"July 2024", rating:2, pubYear:1916},
  {title:"The 90-Day Novel", cover:"https://covers.openlibrary.org/b/id/8857110-L.jpg", genre:"Nonfiction", subgenre:"Self-Development", author:"Alan Watt", readDate:"January 2025", pubYear:2017},
  {title:"The Alchemist", cover:"https://covers.openlibrary.org/b/id/11556106-L.jpg", genre:"Literary Fiction", author:"Paulo Coelho", readDate:null, pubYear:2010},
  {title:"The Ashes & the Star-Cursed King", cover:"https://covers.openlibrary.org/b/id/13976045-L.jpg", genre:"Fantasy", author:"Carissa Broadbent", readDate:"May 2025", pubYear:2023},
  {title:"The Babysitter: My Summers with a Serial Killer", cover:"https://covers.openlibrary.org/b/id/10827568-L.jpg", genre:"Memoir / Biography", author:"Liza Rodman", readDate:"January 2024", rating:3, pubYear:2021},
  {title:"The Ballad of Never After", cover:"https://covers.openlibrary.org/b/id/12945180-L.jpg", genre:["Fantasy","Young Adult"], author:"Stephanie Garber", readDate:"April 2024", pubYear:2022},
  {title:"The Ballad of Songbirds and Snakes", cover:"https://covers.openlibrary.org/b/id/14421833-L.jpg", genre:["Science Fiction","Young Adult"], author:"Suzanne Collins", readDate:"September 2023", pubYear:2020},
  {title:"The Bewitching", cover:"https://covers.openlibrary.org/b/id/15101938-L.jpg", genre:"Horror", author:"Silvia Moreno-Garcia", readDate:"November 2025", pubYear:2025},
  {title:"The Bullet Journal Method: Track Your Past, Order Your Present, Plan Your Future", cover:"https://covers.openlibrary.org/b/id/10413432-L.jpg", genre:"Nonfiction", subgenre:"Self-Development", author:"Ryder Carroll", readDate:"July 2023", pubYear:2018},
  {title:"The Call of the Wild", cover:"https://covers.openlibrary.org/b/id/12393037-L.jpg", genre:["Classic Literature","Middle Grade"], author:"Jack London", readDate:null, pubYear:1903},
  {title:"The Crypt of Lost Souls", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1756517403i/240940458.jpg", genre:"Horror", author:"Molly R. Anderson", readDate:null},
  {title:"The Decision: Overcoming Today's BS for Tomorrow's Success", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1590271157i/53456548.jpg", genre:"Memoir / Biography", author:"Kevin Hart", readDate:"July 2024", rating:2, pubYear:2021},
  {title:"The Diary of a Young Girl", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1696989545i/127441416.jpg", genre:"Memoir / Biography", author:"Anne Frank", readDate:null, rating:4, pubYear:2001},
  {title:"The Duke and I", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1761383929i/56468652._SX300_.jpg", genre:"Historical Fiction", author:"Julia Quinn", readDate:"June 2024", rating:2, pubYear:2000},
  {title:"The Ex-Wives Club", genre:"Thriller", author:"Sally Hepworth", readDate:"August 2025"},
  {title:"The Extra", cover:"https://covers.openlibrary.org/b/id/15235147-L.jpg", genre:"Thriller", author:"Annie Neugebauer", readDate:"December 2025", pubYear:2026},
  {title:"The Fallen & the Kiss of Dusk", genre:"Fantasy", author:"Carissa Broadbent", readDate:"October 2025", cover:"https://is1-ssl.mzstatic.com/image/thumb/Publication211/v4/61/ce/bb/61cebbd6-2633-e9f1-48d6-5fe42d373d53/1064406042.jpg/600x600bb.jpg", pubYear:2026},
  {title:"The Fault in Our Stars", cover:"https://covers.openlibrary.org/b/id/7418786-L.jpg", genre:["Young Adult","Contemporary Fiction"], author:"John Green", readDate:null, pubYear:2010},
  {title:"The Giver", cover:"https://covers.openlibrary.org/b/id/8352502-L.jpg", genre:["Middle Grade","Science Fiction"], author:"Lois Lowry", readDate:null, pubYear:1993},
  {title:"The Giving Tree", cover:"https://covers.openlibrary.org/b/id/8981758-L.jpg", genre:["Classic Literature","Middle Grade"], author:"Shel Silverstein", readDate:null, pubYear:1964},
  {title:"The Golden Compass", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1505766203i/119322.jpg", genre:["Fantasy","Young Adult"], author:"Philip Pullman", readDate:null, pubYear:2016},
  {title:"The Handmaid's Tale", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1488552336i/34454589.jpg", genre:["Literary Fiction","Science Fiction"], author:"Margaret Atwood", readDate:null, rating:5, pubYear:1985},
  {title:"The Handmaid's Tale: The Graphic Novel", cover:"https://covers.openlibrary.org/b/id/14339099-L.jpg", genre:["Graphic Novel","Literary Fiction","Science Fiction"], author:"Renee Nault", readDate:"November 2024", rating:4, pubYear:2019},
  {title:"The Help", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1622355533i/4667024.jpg", genre:["Historical Fiction","Literary Fiction"], author:"Kathryn Stockett", readDate:null, rating:4, pubYear:2009},
  {title:"The Horse and His Boy", cover:"https://covers.openlibrary.org/b/id/9184792-L.jpg", genre:["Middle Grade","Fantasy"], author:"C.S. Lewis", readDate:null, pubYear:1954},
  {title:"The Host", cover:"https://covers.openlibrary.org/b/id/3366731-L.jpg", genre:"Fantasy", author:"Stephenie Meyer", readDate:null, pubYear:2008},
  {title:"The Hunger Games", cover:"https://covers.openlibrary.org/b/id/12646537-L.jpg", genre:["Science Fiction","Young Adult"], author:"Suzanne Collins", readDate:"September 2023", pubYear:2008},
  {title:"The Iliad", cover:"https://covers.openlibrary.org/b/id/12621988-L.jpg", genre:["Classic Literature","Mythology"], author:"Homer", readDate:null, pubYear:1946},
  {title:"The Invisible Life of Addie LaRue", cover:"https://covers.openlibrary.org/b/id/10092261-L.jpg", genre:["Fantasy","Literary Fiction"], author:"V.E. Schwab", readDate:"September 2024", rating:5, pubYear:2015},
  {title:"The Kiss of the Concubine: A story of Anne Boleyn and Henry VIII", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1455468670i/18820989.jpg", genre:"Historical Fiction", author:"Judith Arnopp", readDate:"August 2025", rating:3, pubYear:2013},
  {title:"The Kite Runner", cover:"https://covers.openlibrary.org/b/id/14846827-L.jpg", genre:"Literary Fiction", author:"Khaled Hosseini", readDate:null, rating:3, pubYear:2003},
  {title:"The Last Battle", cover:"https://covers.openlibrary.org/b/id/6529226-L.jpg", genre:["Middle Grade","Fantasy"], author:"C.S. Lewis", readDate:null, pubYear:1956},
  {title:"The Last Wish", cover:"https://covers.openlibrary.org/b/id/7360819-L.jpg", genre:"Fantasy", author:"Andrzej Sapkowski", readDate:"January 2024", pubYear:2022},
  {title:"The Lion, the Witch and the Wardrobe", cover:"https://covers.openlibrary.org/b/id/8441376-L.jpg", genre:["Middle Grade","Fantasy"], author:"C.S. Lewis", readDate:null, pubYear:1950},
  {title:"The Lovely Bones", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1457810586i/12232938._SX300_.jpg", genre:"Literary Fiction", author:"Alice Sebold", readDate:null, pubYear:2000},
  {title:"The Magician's Nephew", cover:"https://covers.openlibrary.org/b/id/1072931-L.jpg", genre:["Middle Grade","Fantasy"], author:"C.S. Lewis", readDate:null, pubYear:1955},
  {title:"The Death Cure", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1303997647i/7864437.jpg", genre:["Science Fiction","Young Adult"], author:"James Dashner", readDate:null, pubYear:2011},
  {title:"The Fever Code", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1449687382i/23267628.jpg", genre:["Science Fiction","Young Adult"], author:"James Dashner", readDate:null, pubYear:2016},
  {title:"The Kill Order", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1330636153i/13089710.jpg", genre:["Science Fiction","Young Adult"], author:"James Dashner", readDate:null, pubYear:2012},
  {title:"The Maze Runner", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1375596592i/6186357.jpg", genre:["Science Fiction","Young Adult"], author:"James Dashner", readDate:null, pubYear:2009},
  {title:"The Scorch Trials", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1388240248i/7631105.jpg", genre:["Science Fiction","Young Adult"], author:"James Dashner", readDate:null, pubYear:2010},
  {title:"The Odyssey", cover:"https://covers.openlibrary.org/b/id/12474938-L.jpg", genre:["Classic Literature","Mythology"], author:"Homer", readDate:null, pubYear:1946},
  {title:"The Perfect Child", cover:"https://covers.openlibrary.org/b/id/8807977-L.jpg", genre:"Thriller", author:"Lucinda Berry", readDate:"June 2024", pubYear:2019},
  {title:"The Poisonwood Bible", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1644073807i/7244.jpg", genre:"Literary Fiction", author:"Barbara Kingsolver", readDate:null, pubYear:1998},
  {title:"The Polar Express", cover:"https://covers.openlibrary.org/b/id/394670-L.jpg", genre:["Classic Literature","Middle Grade"], author:"Chris Van Allsburg", readDate:null, pubYear:1985},
  {title:"The Princess Diaries", cover:"https://covers.openlibrary.org/b/id/6874781-L.jpg", genre:"Young Adult", author:"Meg Cabot", readDate:null, pubYear:2000},
  {title:"The Rise of Magicks", cover:"https://covers.openlibrary.org/b/id/9154264-L.jpg", genre:"Fantasy", author:"Nora Roberts", readDate:"March 2023", pubYear:2019},
  {title:"Year One", cover:"https://covers.openlibrary.org/b/id/8841058-L.jpg", genre:"Fantasy", author:"Nora Roberts", readDate:null, pubYear:2017},
  {title:"Of Blood and Bone", cover:"https://covers.openlibrary.org/b/id/8758039-L.jpg", genre:"Fantasy", author:"Nora Roberts", readDate:null, pubYear:2018},
  {title:"The Serpent and the Wings of Night", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1711665394i/60714999.jpg", genre:"Fantasy", author:"Carissa Broadbent", readDate:"April 2025", pubYear:2024},
  {title:"The Silent Patient", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1668782119i/40097951._SX300_.jpg", genre:["Thriller","Mystery"], author:"Alex Michaelides", readDate:"February 2024", rating:4, pubYear:2018},
  {title:"The Silver Chair", cover:"https://covers.openlibrary.org/b/id/6950992-L.jpg", genre:["Middle Grade","Fantasy"], author:"C.S. Lewis", readDate:null, pubYear:1953},
  {title:"The Skydivers", genre:"Thriller", author:"Chris Bohjalian", readDate:"September 2025"},
  {title:"The Song of Achilles", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1357177533i/13623848._SX300_.jpg", genre:["Mythology","Literary Fiction"], author:"Madeline Miller", readDate:"November 2025", rating:5, pubYear:2011},
  {title:"The Songbird & the Heart of Stone", cover:"https://covers.openlibrary.org/b/id/15148779-L.jpg", genre:"Fantasy", author:"Carissa Broadbent", readDate:"May 2025", pubYear:2024},
  {title:"The Strength of the Few", cover:"https://covers.openlibrary.org/b/id/15150800-L.jpg", genre:"Fantasy", author:"James Islington", readDate:"November 2025", pubYear:2025},
  {title:"The Summer I Turned Pretty", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1496784224i/35380161.jpg", genre:["Young Adult","Contemporary Romance"], author:"Jenny Han", readDate:"March 2024", rating:4, pubYear:2000},
  {title:"The Teacher", cover:"https://covers.openlibrary.org/b/id/14570911-L.jpg", genre:"Thriller", author:"Freida McFadden", readDate:"May 2024", pubYear:2024},
  {title:"The Testaments", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1549292344i/42975172._SX300_.jpg", genre:"Literary Fiction", author:"Margaret Atwood", readDate:"November 2024", rating:4, pubYear:2019},
  {title:"The Very Secret Society of Irregular Witches", cover:"https://covers.openlibrary.org/b/id/14656782-L.jpg", genre:"Fantasy", author:"Sangu Mandanna", readDate:"November 2023", pubYear:2022},
  {title:"The Voyage of the Dawn Treader", cover:"https://covers.openlibrary.org/b/id/9184719-L.jpg", genre:["Middle Grade","Fantasy"], author:"C.S. Lewis", readDate:null, pubYear:1952},
  {title:"The War of Art", cover:"https://covers.openlibrary.org/b/id/288439-L.jpg", genre:"Nonfiction", subgenre:"Self-Development", author:"Steven Pressfield", readDate:"October 2025", pubYear:2002},
  {title:"The Will of the Many", cover:"https://covers.openlibrary.org/b/id/15149934-L.jpg", genre:"Fantasy", author:"James Islington", readDate:"September 2025", pubYear:2023},
  {title:"The Witch's Book of Self-Care: Magical Ways to Pamper, Soothe, and Care for Your Body and Spirit", cover:"https://covers.openlibrary.org/b/id/10232435-L.jpg", genre:"Nonfiction", author:"Arin Murphy-Hiscock", readDate:"April 2025", pubYear:2018},
  {title:"The Woman in Me", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1689090540i/63133205.jpg", genre:"Memoir / Biography", author:"Britney Spears", readDate:"November 2023", rating:3, pubYear:2023},
  {title:"They Never Learn", cover:"https://covers.openlibrary.org/b/id/10492370-L.jpg", genre:"Thriller", author:"Layne Fargo", readDate:"October 2023", pubYear:2020},
  {title:"To Kill a Mockingbird", cover:"https://covers.openlibrary.org/b/id/14351077-L.jpg", genre:"Classic Literature", author:"Harper Lee", readDate:null, pubYear:1960},
  {title:"Tress of the Emerald Sea", cover:"https://covers.openlibrary.org/b/id/13143232-L.jpg", genre:"Fantasy", author:"Brandon Sanderson", readDate:"May 2024", pubYear:2023},
  {title:"Twilight", cover:"https://covers.openlibrary.org/b/id/12641977-L.jpg", genre:["Fantasy","Young Adult"], author:"Stephenie Meyer", readDate:null, pubYear:2005},
  {title:"Uglies", cover:"https://covers.openlibrary.org/b/id/438244-L.jpg", genre:["Young Adult","Science Fiction"], author:"Scott Westerfeld", readDate:null, pubYear:2005},
  {title:"Under the Jolly Roger: Being an Account of the Further Nautical Adventures of Jacky Faber", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1427211277i/295651.jpg", genre:["Young Adult","Historical Fiction"], author:"L.A. Meyer", readDate:null, pubYear:2003},
  {title:"Ushers", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1725223613i/218362004.jpg", genre:"Horror", author:"Joe Hill", readDate:"August 2025", rating:4.5},
  {title:"Water for Elephants", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1667708346i/43641._SX300_.jpg", genre:["Historical Fiction","Literary Fiction"], author:"Sara Gruen", readDate:null, rating:4, pubYear:2006},
  {title:"We'll Always Have Summer", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1646142377i/60530511._SX300_.jpg", genre:["Young Adult","Contemporary Romance"], author:"Jenny Han", readDate:"March 2024", rating:4, pubYear:2011},
  {title:"What Is Real?: The Unfinished Quest for the Meaning of Quantum Physics", cover:"https://covers.openlibrary.org/b/id/9222261-L.jpg", genre:"Nonfiction", author:"Adam Becker", readDate:"February 2025", pubYear:2018},
  {title:"Where the Crawdads Sing", cover:"https://covers.openlibrary.org/b/id/8362947-L.jpg", genre:"Literary Fiction", author:"Delia Owens", readDate:null, rating:3, pubYear:2018},
  {title:"Where the Sidewalk Ends", cover:"https://covers.openlibrary.org/b/id/31070-L.jpg", genre:"Nonfiction", subgenre:"Poetry", author:"Shel Silverstein", readDate:null, pubYear:1974},
  {title:"White Fang", cover:"https://covers.openlibrary.org/b/id/8236920-L.jpg", genre:["Classic Literature","Middle Grade"], author:"Jack London", readDate:null, pubYear:1905},
  {title:"Who Could Ever Love You: A Family Memoir", genre:"Memoir / Biography", author:"Mary L. Trump", readDate:"July 2025", cover:"https://is1-ssl.mzstatic.com/image/thumb/Publication221/v4/b4/3f/d3/b43fd377-ec94-7cf1-a3f6-668a5a84186d/9781250278487.jpg/600x600bb.jpg", rating:3, pubYear:2025},
  {title:"Will My Cat Eat My Eyeballs? Big Questions from Tiny Mortals About Death", cover:"https://covers.openlibrary.org/b/id/8780386-L.jpg", genre:"Nonfiction", author:"Caitlin Doughty", readDate:"August 2025", pubYear:2019},
  {title:"Wuthering Heights", cover:"https://covers.openlibrary.org/b/id/12818862-L.jpg", genre:"Classic Literature", author:"Emily Brontë", readDate:null, pubYear:1846},
];

/* Parses a "YYYY-MM-DD" dateFinished string as a local-timezone date
   instead of UTC midnight, so it doesn't roll back a day in US timezones
   (new Date("2026-08-01") is UTC and shifts to Jul 31 evening locally). */
function parseLocalDate(dateStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(y, m - 1, d);
}

/* Looks a title up in this year's `books` first, then in `pastReads`.
   Returns the matching object (with .cover, and either .readDate or
   .dateFinished) or null if the book hasn't been logged as read anywhere. */
function findRead(title) {
  return books.find(b => b.title === title) || pastReads.find(b => b.title === title) || null;
}

/* Renders a `rating` (1-5, halves allowed) as star glyphs, e.g. 4.5 -> "★★★★½".
   Returns "" for a missing rating so callers can skip the line entirely. */
function formatRating(rating) {
  if (rating == null) return "";
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return "★".repeat(full) + (half ? "½" : "");
}

/* What each star count means. Shown as a "Rating Key" breakdown near the
   top of all-books.html and 2026-reading-stats.html. Each page builds its
   own themed row markup from this list. */
const RATING_LEGEND = [
  {n: 5, text: "I'd totally reread this book"},
  {n: 4, text: "I loved it, but I'll only read it once"},
  {n: 3, text: "I enjoyed it"},
  {n: 2, text: "I didn't like it, or it wasn't for me"},
  {n: 1, text: "I hated it. It made me mad"},
];

/* Multi-book series touched by the 2026 shelf, in reading order.
   Read/unread is computed via findRead() above, not stored per book.
   Entries here are just {title}, plus optional `cover` (a preview image
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
      {title:"Powerless", number:"1"},
      {title:"Powerful", number:"1.5"},
      {title:"Reckless", number:"2"},
      {title:"Fearless", number:"3"},
      {title:"Fearful", number:"3.5", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1749656949i/220161171.jpg"}
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
    status: "ongoing",
    books: [
      {title:"Origins of an Academy Bully", number:"0.5"},
      {title:"The Awakening", number:"1"},
      {title:"Ruthless Fae", number:"2"},
      {title:"The Reckoning", number:"3"},
      {title:"Shadow Princess", number:"4"},
      {title:"Cursed Fates", number:"5"},
      {title:"The Big A.S.S. Party", number:"5.5"},
      {title:"Fated Throne", number:"6"},
      {title:"The Awakening as Told by the Boys", number:"1.5"},
      {title:"Heartless Sky", number:"7"},
      {title:"Sorrow and Starlight", number:"8"},
      {title:"Beyond the Veil", number:"8.5"},
      {title:"Live and Let Lionel", number:"Bonus"},
      {title:"Restless Stars", number:"9"},
      {title:"On the Cursed Day of Christmas", number:"10", comingSoon:true}
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
    name: "Dungeon Crawler Carl",
    author: "Matt Dinniman",
    status: "ongoing",
    books: [
      {title:"Dungeon Crawler Carl", number:"1"},
      {title:"Carl's Doomsday Scenario", number:"2"},
      {title:"The Dungeon Anarchist's Cookbook", number:"3"},
      {title:"The Gate of the Feral Gods", number:"4"},
      {title:"The Butcher's Masquerade", number:"5"},
      {title:"The Eye of the Bedlam Bride", number:"6"},
      {title:"This Inevitable Ruin", number:"7"},
      {title:"A Parade of Horribles", number:"8"},
      {title:"The Beautiful Place", number:"9", comingSoon:true}
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
      {title:"A Mystical Legacy", number:"0.5"},
      {title:"Bogs, Brews, and Banshees", number:"1", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1699539434i/201899519.jpg"},
      {title:"Whispers, Whiskey, and Wishes", number:"2", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1708359064i/208878163.jpg"},
      {title:"Pranks, Poitin, and Pucas", number:"3", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1724848086i/217912014.jpg"},
      {title:"Roots, Rum, and Revenants", number:"4", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1758805415i/242063842.jpg"},
      {title:"Spectacles, Sangria, and Selkies", number:"5", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1782483297i/254609775.jpg"},
      {title:"Greed, Guinness, and Grogochs", number:"6", comingSoon:"April 2027"}
    ]
  },
  {
    name: "Fae & Alchemy",
    author: "Callie Hart",
    status: "ongoing",
    books: [
      {title:"Quicksilver"},
      {title:"Brimstone"}
    ]
  },
  {
    name: "Crowns of Nyaxia",
    author: "Carissa Broadbent",
    status: "ongoing",
    books: [
      {title:"The Serpent and the Wings of Night", number:"1"},
      {title:"Six Scorched Roses", number:"1.5"},
      {title:"The Ashes & the Star-Cursed King", number:"2"},
      {title:"Slaying the Vampire Conqueror", number:"2.5"},
      {title:"The Songbird & the Heart of Stone", number:"3"},
      {title:"The Fallen & the Kiss of Dusk", number:"4"},
      {title:"The Lion & the Deathless Dark", number:"5"},
      {title:"Crowns of Nyaxia Book 6", number:"6", comingSoon:"Soon (still being written)"}
    ]
  },
  {
    name: "The Witcher",
    author: "Andrzej Sapkowski",
    status: "ongoing",
    books: [
      {title:"The Last Wish", number:"1"},
      {title:"Sword of Destiny", number:"2"},
      {title:"Blood of Elves", number:"3"},
      {title:"Time of Contempt", number:"4"},
      {title:"Baptism of Fire", number:"5"},
      {title:"The Tower of the Swallow", number:"6"},
      {title:"The Lady of the Lake", number:"7"},
      {title:"Season of Storms", number:"8"},
      {title:"Crossroads of Ravens", number:"9"}
    ]
  },
  {
    name: "Chronicles of Narnia",
    author: "C.S. Lewis",
    status: "complete",
    books: [
      {title:"The Magician's Nephew"},
      {title:"The Lion, the Witch and the Wardrobe"},
      {title:"The Horse and His Boy"},
      {title:"Prince Caspian"},
      {title:"The Voyage of the Dawn Treader"},
      {title:"The Silver Chair"},
      {title:"The Last Battle"}
    ]
  },
  {
    name: "The Mortal Instruments",
    author: "Cassandra Clare",
    status: "complete",
    books: [
      {title:"City of Bones"},
      {title:"City of Ashes"},
      {title:"City of Glass"},
      {title:"City of Fallen Angels"},
      {title:"City of Lost Souls"},
      {title:"City of Heavenly Fire"}
    ]
  },
  {
    name: "It Ends with Us",
    author: "Colleen Hoover",
    status: "complete",
    books: [
      {title:"It Ends with Us"},
      {title:"It Starts with Us"}
    ]
  },
  {
    name: "Fifty Shades",
    author: "E.L. James",
    status: "complete",
    books: [
      {title:"Fifty Shades of Grey"},
      {title:"Fifty Shades Darker"},
      {title:"Fifty Shades Freed"}
    ]
  },
  {
    name: "Cat and Mouse",
    author: "H.D. Carlton",
    status: "complete",
    books: [
      {title:"Haunting Adeline"},
      {title:"Hunting Adeline"}
    ]
  },
  {
    name: "Harry Potter",
    author: "J.K. Rowling",
    status: "complete",
    books: [
      {title:"Harry Potter and the Sorcerer's Stone"},
      {title:"Harry Potter and the Chamber of Secrets"},
      {title:"Harry Potter and the Prisoner of Azkaban"},
      {title:"Harry Potter and the Goblet of Fire"},
      {title:"Harry Potter and the Order of the Phoenix"},
      {title:"Harry Potter and the Half-Blood Prince"},
      {title:"Harry Potter and the Deathly Hallows"},
      {title:"Harry Potter and the Cursed Child: Parts One and Two"}
    ]
  },
  {
    name: "Hierarchy",
    author: "James Islington",
    status: "ongoing",
    books: [
      {title:"The Will of the Many"},
      {title:"The Strength of the Few"}
    ]
  },
  {
    name: "Summer",
    author: "Jenny Han",
    status: "complete",
    books: [
      {title:"The Summer I Turned Pretty"},
      {title:"It's Not Summer Without You"},
      {title:"We'll Always Have Summer"}
    ]
  },
  {
    name: "Wicked Games",
    author: "Kaylie Smith",
    status: "ongoing",
    books: [
      {title:"Phantasma"},
      {title:"Enchantra"}
    ]
  },
  {
    name: "Bloody Jack",
    author: "L.A. Meyer",
    status: "ongoing",
    books: [
      {title:"Bloody Jack: Being an Account of the Curious Adventures of Mary \"Jacky\" Faber, Ship's Boy"},
      {title:"Curse of the Blue Tattoo: Being an Account of the Misadventures of Jacky Faber, Midshipman and Fine Lady"},
      {title:"Under the Jolly Roger: Being an Account of the Further Nautical Adventures of Jacky Faber"},
      {title:"In the Belly of the Bloodhound: Being an Account of a Particularly Peculiar Adventure in the Life of Jacky Faber"},
      {title:"Mississippi Jack: Being an Account of the Further Waterborne Adventures of Jacky Faber"},
      {title:"My Bonny Light Horseman: Being an Account of the Further Adventures of Jacky Faber, in Love and War"},
      {title:"Rapture of the Deep: Being an Account of the Further Adventures of Jacky Faber, Soldier, Sailor, Mermaid, Spy"},
      {title:"The Wake of the Lorelei Lee: Being an Account of the Further Adventures of Jacky Faber, on Her Way to Botany Bay"},
      {title:"The Mark of the Golden Dragon: Being an Account of the Further Adventures of Jacky Faber, Jewel of the East, Vexation of the West, and Pearl of the South China Sea"},
      {title:"Viva Jacquelina!: Being an Account of the Further Adventures of Jacky Faber, Over the Hills and Far Away"},
      {title:"Boston Jacky: Being an Account of the Further Adventures of Jacky Faber, Taking Care of Business"},
      {title:"Wild Rover No More: Being the Last Recorded Account of the Life and Times of Jacky Faber"}
    ]
  },
  {
    name: "Ninth House",
    author: "Leigh Bardugo",
    status: "ongoing",
    books: [
      {title:"Ninth House"},
      {title:"Hell Bent"}
    ]
  },
  {
    name: "Time Quintet",
    author: "Madeleine L'Engle",
    status: "complete",
    books: [
      {title:"A Wrinkle in Time"},
      {title:"A Wind in the Door"},
      {title:"A Swiftly Tilting Planet"},
      {title:"Many Waters"},
      {title:"An Acceptable Time"}
    ]
  },
  {
    name: "Bridgertons",
    author: "Julia Quinn",
    status: "complete",
    books: [
      {title:"The Duke and I"},
      {title:"The Duke and I: The 2nd Epilogue"},
      {title:"The Viscount Who Loved Me"},
      {title:"The Viscount Who Loved Me: The 2nd Epilogue"},
      {title:"An Offer From a Gentleman"},
      {title:"An Offer From a Gentleman: The 2nd Epilogue"},
      {title:"Romancing Mister Bridgerton"},
      {title:"Romancing Mister Bridgerton: The 2nd Epilogue"},
      {title:"To Sir Phillip, With Love"},
      {title:"To Sir Phillip, With Love: The 2nd Epilogue"},
      {title:"When He Was Wicked"},
      {title:"When He Was Wicked: The 2nd Epilogue"},
      {title:"It's In His Kiss"},
      {title:"It's In His Kiss: The 2nd Epilogue"},
      {title:"On the Way to the Wedding"},
      {title:"On the Way to the Wedding: The 2nd Epilogue"}
    ]
  },
  {
    name: "The Handmaid's Tale",
    author: "Margaret Atwood",
    status: "complete",
    books: [
      {title:"The Handmaid's Tale"},
      {title:"The Testaments"}
    ]
  },
  {
    name: "The Crypt Series",
    author: "Molly R. Anderson",
    status: "ongoing",
    books: [
      {title:"The Crypt of Lost Souls"},
      {title:"Revenge of The Reaper"}
    ]
  },
  {
    name: "Hades & Persephone",
    author: "Scarlett St. Clair",
    status: "complete",
    books: [
      {title:"A Touch of Darkness"},
      {title:"A Touch of Ruin"}
    ]
  },
  {
    name: "Uglies",
    author: "Scott Westerfeld",
    status: "complete",
    books: [
      {title:"Uglies"},
      {title:"Pretties"},
      {title:"Specials"},
      {title:"Extras"}
    ]
  },
  {
    name: "Caraval",
    author: "Stephanie Garber",
    status: "complete",
    books: [
      {title:"Caraval"},
      {title:"Legendary"},
      {title:"Finale"}
    ]
  },
  {
    name: "Once Upon a Broken Heart",
    author: "Stephanie Garber",
    status: "ongoing",
    books: [
      {title:"Once Upon a Broken Heart"},
      {title:"The Ballad of Never After"},
      {title:"A Curse for True Love"}
    ]
  },
  {
    name: "The Twilight Saga",
    author: "Stephenie Meyer",
    status: "complete",
    books: [
      {title:"Twilight"},
      {title:"New Moon"},
      {title:"Eclipse"},
      {title:"Breaking Dawn"},
      {title:"Midnight Sun"}
    ]
  },
  {
    name: "The Hunger Games",
    author: "Suzanne Collins",
    status: "ongoing",
    books: [
      {title:"The Ballad of Songbirds and Snakes"},
      {title:"Sunrise on the Reaping"},
      {title:"The Hunger Games"},
      {title:"Catching Fire"},
      {title:"Mockingjay"}
    ]
  },
  {
    name: "Divergent",
    author: "Veronica Roth",
    status: "complete",
    books: [
      {title:"Divergent"},
      {title:"Insurgent"},
      {title:"Allegiant"}
    ]
  },
  {
    name: "Chronicles of The One",
    author: "Nora Roberts",
    status: "complete",
    books: [
      {title:"Year One"},
      {title:"Of Blood and Bone"},
      {title:"The Rise of Magicks"}
    ]
  },
  {
    name: "Dune Chronicles",
    author: "Frank Herbert",
    status: "complete",
    books: [
      {title:"Dune"},
      {title:"Dune Messiah"},
      {title:"Children of Dune"},
      {title:"God Emperor of Dune"},
      {title:"Heretics of Dune"},
      {title:"Chapterhouse: Dune"}
    ]
  },
  {
    name: "The Maze Runner",
    author: "James Dashner",
    status: "complete",
    books: [
      {title:"The Maze Runner"},
      {title:"The Scorch Trials"},
      {title:"The Death Cure"},
      {title:"The Kill Order"},
      {title:"The Fever Code"}
    ]
  },
  {
    name: "The Inheritance Cycle",
    author: "Christopher Paolini",
    status: "ongoing",
    books: [
      {title:"Eragon"},
      {title:"Eldest"},
      {title:"Brisingr"},
      {title:"Inheritance"},
      {title:"Murtagh"}
    ]
  },
  {
    name: "His Dark Materials",
    author: "Philip Pullman",
    status: "complete",
    books: [
      {title:"Once Upon a Time in the North", number:"0.5"},
      {title:"The Collectors", number:"0.6"},
      {title:"The Golden Compass", number:"1"},
      {title:"The Subtle Knife", number:"2"},
      {title:"The Amber Spyglass", number:"3"},
      {title:"Lyra's Oxford", number:"3.5"},
      {title:"Serpentine", number:"3.6"},
      {title:"The Imagination Chamber", number:"3.7"}
    ]
  },
  {
    name: "The Giver Quartet",
    author: "Lois Lowry",
    status: "complete",
    books: [
      {title:"The Giver"},
      {title:"Gathering Blue"},
      {title:"Messenger"},
      {title:"Son"}
    ]
  },
  {
    name: "Anne of Green Gables",
    author: "L.M. Montgomery",
    status: "complete",
    books: [
      {title:"Anne of Green Gables"},
      {title:"Anne of Avonlea"},
      {title:"Anne of the Island"},
      {title:"Anne of Windy Poplars"},
      {title:"Anne's House of Dreams"},
      {title:"Anne of Ingleside"},
      {title:"Rainbow Valley"},
      {title:"Rilla of Ingleside"}
    ]
  },
  {
    name: "The Princess Diaries",
    author: "Meg Cabot",
    status: "complete",
    books: [
      {title:"The Princess Diaries"},
      {title:"Princess in the Spotlight"},
      {title:"Princess in Love"},
      {title:"Princess in Waiting"},
      {title:"Princess in Pink"},
      {title:"Princess in Training"},
      {title:"Party Princess"},
      {title:"Princess on the Brink"},
      {title:"Princess Mia"},
      {title:"Forever Princess"},
      {title:"Royal Wedding"},
      {title:"The Quarantine Princess Diaries"}
    ]
  },
  {
    name: "A Dickens of a Crime",
    author: "Heather Redmond",
    status: "ongoing",
    books: [
      {title:"A Tale of Two Murders"},
      {title:"Grave Expectations"},
      {title:"A Christmas Carol Murder"},
      {title:"The Pickwick Murders"},
      {title:"A Twist of Murder"}
    ]
  },
  {
    name: "The Host",
    author: "Stephenie Meyer",
    status: "ongoing",
    books: [
      {title:"The Host"},
      {title:"The Seeker", comingSoon:true},
      {title:"The Soul", comingSoon:true}
    ]
  }
];
