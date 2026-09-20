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
                     the bottom-left corner of the cover, and adds the book
                     to the "🌶️ Spicy" filter on all-books.html and the
                     "🌶️ Spicy Reads" shelf on the 2026 stats page. Only add
                     this when told to for a specific book, never guess.
     note: "..."   : your thoughts/review of the book. Tap any cover on the
                     Master List, inside a series pop-up, or on a 2026 genre
                     shelf to see it in a detail popup. Keep it as short or
                     long as you want — plain text only, no HTML.

   `genre` can be one string or an array of strings. Stick to this list so
   the shelves and filter pills stay tidy (a book can carry more than one):

     Fiction:  Fantasy · Science Fiction · Suspense (thriller/horror/mystery)
               Romance · Literary/Contemporary Fiction · Classic Literature
               Historical Fiction · Mythology · Graphic Novel
     Nonfiction: Nonfiction (use `subgenre` to split it) · Memoir/Biography

   Young Adult and Middle Grade are also valid genre tags, but they're
   tracked as age categories (shown apart from the genres above, not mixed
   in) — a book can be e.g. ["Fantasy","Young Adult"]. "Series" and "Spicy"
   are filters computed automatically, never set them as a genre.

   Favorites on all-books.html are computed automatically from 4-star
   and up ratings — rate a book 4 or 5 stars and it becomes eligible for
   its genre's Favorites shelf (and the Series tab's Favorite Series
   carousel) with no extra setup, no cap on count, ranked by rating then
   by most recently finished.
   ========================================================================= */
const GOAL = 80;
const books = [
  {title:"Sunrise on the Reaping", cover:"https://covers.openlibrary.org/b/isbn/1546171460-L.jpg", author:"Suzanne Collins", genre:["Science Fiction","Young Adult"], pages:419, dateFinished:"2026-01-03", rating:5, pubYear:2025, pubDate:"March 2025"},
  {title:"Feral Wolf", cover:"https://covers.openlibrary.org/b/id/15130580-L.jpg", author:"Caroline Peckham & Susanne Valenti", genre:"Fantasy", pages:408, dateFinished:"2026-01-08", rating:3, pubYear:2021, pubDate:"July 2021"},
  {title:"Untamed", cover:"https://m.media-amazon.com/images/I/51YkYhYbRdL.jpg", author:"Glennon Doyle", genre:"Memoir/Biography", pages:352, dateFinished:"2026-01-10", rating:4, pubYear:2020, pubDate:"March 2020"},
  {title:"Red Rising", cover:"https://covers.openlibrary.org/b/isbn/9780345539786-L.jpg", author:"Pierce Brown", genre:"Science Fiction", pages:401, dateFinished:"2026-01-17", rating:5, pubYear:2014, pubDate:"January 2014"},
  {title:"Golden Son", cover:"https://covers.openlibrary.org/b/id/8454351-L.jpg", author:"Pierce Brown", genre:"Science Fiction", pages:466, dateFinished:"2026-01-22", rating:5, pubYear:2015, pubDate:"January 2015"},
  {title:"Morning Star", cover:"https://covers.openlibrary.org/b/id/8566174-L.jpg", author:"Pierce Brown", genre:"Science Fiction", pages:526, dateFinished:"2026-01-31", rating:5, pubYear:2016, pubDate:"February 2016"},
  {title:"A Mystical Legacy", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1701384644i/203011116.jpg", author:"Rowan Dillon", genre:"Suspense", pages:32, dateFinished:"2026-01-31", rating:2, pubYear:2024, pubDate:"February 2024"},
  {title:"Roots of Darkness", cover:"https://covers.openlibrary.org/b/id/15151850-L.jpg", author:"Demi Winters", genre:"Fantasy", pages:213, dateFinished:"2026-02-14", rating:5, pubYear:2025, pubDate:"June 2025"},
  {title:"The Thicket", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1727282958i/219539959.jpg", author:"Noelle West Ihli", genre:"Suspense", pages:332, dateFinished:"2026-02-22", rating:4, pubYear:2021, pubDate:"July 2021"},
  {title:"Dawn of the North", cover:"https://covers.openlibrary.org/b/id/15215659-L.jpg", author:"Demi Winters", genre:"Fantasy", pages:608, dateFinished:"2026-02-28", rating:5, pubYear:2026, pubDate:"February 2026"},
  {title:"Flock", cover:"https://m.media-amazon.com/images/I/41yC9PdU0gL.jpg", author:"Kate Stewart", genre:"Romance", pages:450, dateFinished:"2026-03-01", rating:2, pubYear:2020, pubDate:"July 2020", spicy:true},
  {title:"Exodus", cover:"https://m.media-amazon.com/images/I/41XHkcLHMEL.jpg", author:"Kate Stewart", genre:"Romance", pages:500, dateFinished:"2026-03-10", rating:3, pubYear:2020, pubDate:"July 2020", spicy:true},
  {title:"The Comfy Cozy Witch's Guide to Making Magic in Your Everyday Life", cover:"https://covers.openlibrary.org/b/id/14804484-L.jpg", author:"Jennie Blonde", genre:"Nonfiction", subgenre:"Spirituality", pages:208, dateFinished:"2026-03-12", rating:3, pubYear:2024, pubDate:"September 2024"},
  {title:"The Finish Line", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1610549876i/56182388.jpg", author:"Kate Stewart", genre:"Romance", pages:560, dateFinished:"2026-03-15", rating:3, pubYear:2021, pubDate:"January 2021", spicy:true},
  {title:"Project Hail Mary", cover:"https://covers.openlibrary.org/b/id/11200092-L.jpg", author:"Andy Weir", genre:"Science Fiction", pages:496, dateFinished:"2026-03-20", rating:4, pubYear:2021, pubDate:"May 2021"},
  {title:"Just For the Cameras", cover:"https://covers.openlibrary.org/b/id/15170471-L.jpg", author:"Meghan Quinn", genre:"Romance", pages:637, dateFinished:"2026-03-22", rating:3, pubYear:2026, pubDate:"February 2026"},
  {title:"We Should All Be Feminists", cover:"https://covers.openlibrary.org/b/id/11324542-L.jpg", author:"Chimamanda Ngozi Adichie", genre:"Nonfiction", subgenre:"Essays", pages:64, dateFinished:"2026-03-25", rating:3, pubYear:2014},
  {title:"Dear Debbie", cover:"https://covers.openlibrary.org/b/id/15171146-L.jpg", author:"Freida McFadden", genre:"Suspense", pages:336, dateFinished:"2026-03-27", rating:3, pubYear:2026, pubDate:"January 2026"},
  {title:"Cleopatra", cover:"https://m.media-amazon.com/images/I/61SqZSwLTvL.jpg", author:"Saara El-Arifi", genre:"Historical Fiction", pages:448, dateFinished:"2026-04-01", rating:2, pubYear:2025},
  {title:"A Wrinkle in Time: The Graphic Novel", cover:"https://covers.openlibrary.org/b/id/7364130-L.jpg", author:"Madeleine L'Engle", genre:["Graphic Novel","Science Fiction","Middle Grade"], pages:392, dateFinished:"2026-04-01", rating:4, pubYear:2012, pubDate:"October 2012"},
  {title:"The Princess Bride", cover:"https://covers.openlibrary.org/b/id/9284881-L.jpg", author:"William Goldman", genre:"Fantasy", pages:432, dateFinished:"2026-04-09", rating:5, pubYear:1973},
  {title:"Ruthless Vows", cover:"https://covers.openlibrary.org/b/id/14572083-L.jpg", author:"Rebecca Ross", genre:"Fantasy", pages:419, dateFinished:"2026-04-23", rating:2, pubYear:2023, pubDate:"November 2023"},
  {title:"The Book Witch", cover:"https://covers.openlibrary.org/b/id/15208007-L.jpg", author:"Meg Shaffer", genre:"Fantasy", pages:320, dateFinished:"2026-04-25", rating:4, pubYear:2026},
  {title:"Katabasis", cover:"https://covers.openlibrary.org/b/id/15117021-L.jpg", author:"R.F. Kuang", genre:"Fantasy", pages:567, dateFinished:"2026-05-02", rating:4, pubYear:2025, pubDate:"August 2025"},
  {title:"The Dinner Party", cover:"https://covers.openlibrary.org/b/id/15235011-L.jpg", author:"Freida McFadden", genre:"Suspense", pages:196, dateFinished:"2026-05-02", rating:3, pubYear:2026},
  {title:"The Magicians", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1715695565i/7125342.jpg", author:"Lev Grossman", genre:"Fantasy", pages:402, dateFinished:"2026-05-07", rating:5, pubYear:2009, pubDate:"August 2009"},
  {title:"The Magician King", cover:"https://m.media-amazon.com/images/I/51uxgRMrw6L.jpg", author:"Lev Grossman", genre:"Fantasy", pages:400, dateFinished:"2026-05-12", rating:5, pubYear:2011, pubDate:"August 2011"},
  {title:"The Magician's Land", cover:"https://m.media-amazon.com/images/I/51TZvbTMO8L.jpg", author:"Lev Grossman", genre:"Fantasy", pages:401, dateFinished:"2026-05-15", rating:5, pubYear:2014, pubDate:"August 2014"},
  {title:"The Last Letter", cover:"https://covers.openlibrary.org/b/id/10165652-L.jpg", author:"Rebecca Yarros", genre:"Romance", pages:336, dateFinished:"2026-05-19", rating:4, pubYear:2019, pubDate:"February 2019"},
  {title:"Crown Me Dead", cover:"https://covers.openlibrary.org/b/id/15226806-L.jpg", author:"Liv Zander", genre:"Fantasy", pages:270, dateFinished:"2026-05-21", rating:4, pubYear:2026, pubDate:"April 2026"},
  {title:"Crown Me Yours", cover:"https://covers.openlibrary.org/b/id/15228557-L.jpg", author:"Liv Zander", genre:"Fantasy", pages:244, dateFinished:"2026-05-25", rating:4, pubYear:2026, pubDate:"April 2026"},
  {title:"My Husband's Wife", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1747668611i/231127462.jpg", author:"Alice Feeney", genre:"Suspense", pages:320, dateFinished:"2026-05-26", rating:3.5, pubYear:2026, pubDate:"January 2026"},
  {title:"The Devil at His Elbow", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1712842498i/210454076.jpg", author:"Valerie Bauerlein", genre:"Nonfiction", subgenre:"True Crime", pages:489, dateFinished:"2026-06-03", rating:3, pubYear:2024, pubDate:"August 2024"},
  {title:"Wild Wolf", cover:"https://m.media-amazon.com/images/I/41kTxqoYBwL.jpg", author:"Caroline Peckham & Susanne Valenti", genre:"Fantasy", pages:430, dateFinished:"2026-06-06", rating:3, pubYear:2024, pubDate:"July 2024"},
  {title:"Remarkably Bright Creatures", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1651600548i/58733693.jpg", author:"Shelby Van Pelt", genre:"Literary/Contemporary Fiction", pages:368, dateFinished:"2026-06-07", rating:4, pubYear:2022, pubDate:"May 2022"},
  {title:"Iron Gold", cover:"https://covers.openlibrary.org/b/id/14511722-L.jpg", author:"Pierce Brown", genre:"Science Fiction", pages:605, dateFinished:"2026-06-14", rating:4, pubYear:2018, pubDate:"January 2018"},
  {title:"Pendulum Magic for Beginners", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1386166779i/19176827.jpg", author:"Richard Webster", genre:"Nonfiction", subgenre:"Spirituality", pages:241, dateFinished:"2026-06-28", rating:3, pubYear:2002, pubDate:"February 2002"},
  {title:"Doctor Sleep", cover:"https://covers.openlibrary.org/b/id/14652972-L.jpg", author:"Stephen King", genre:"Suspense", pages:531, dateFinished:"2026-06-28", rating:3.5, pubYear:2013, pubDate:"September 2013"},
  {title:"The Housemaid's Wedding", cover:"https://covers.openlibrary.org/b/id/14840898-L.jpg", author:"Freida McFadden", genre:"Suspense", pages:86, dateFinished:"2026-06-29", rating:2, pubYear:2024, pubDate:"November 2024"},
  {title:"Dark Age", cover:"https://covers.openlibrary.org/b/id/8748017-L.jpg", author:"Pierce Brown", genre:"Science Fiction", pages:776, dateFinished:"2026-07-03", rating:4, pubYear:2019, pubDate:"July 2019"},
  {title:"Fly Away", cover:"https://covers.openlibrary.org/b/id/9418741-L.jpg", author:"Kristin Hannah", genre:"Literary/Contemporary Fiction", pages:416, dateFinished:"2026-07-07", rating:4, pubYear:2013, pubDate:"April 2013"},
  {title:"107 Days", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1753912443i/232466984.jpg", author:"Kamala Harris", genre:"Memoir/Biography", pages:304, dateFinished:"2026-07-13", rating:4, pubYear:2025, pubDate:"September 2025"},
  {title:"The Count of Monte Cristo", cover:"count-of-monte-cristo/monte-cristo-cover.jpg", author:"Alexandre Dumas", genre:"Classic Literature", pages:1566, dateFinished:"2026-08-01", rating:3.5, pubYear:1844, note:"I liked it. It's about this guy who has like literally everyone out to get him, so then he got back at them and spent years just trying to get revenge. It's pretty epic and I did enjoy it... but oh my goodness it was LOOOOONG. 3.5 stars I think lol"},
  {title:"Funny Story", cover:"https://covers.openlibrary.org/b/id/14625690-L.jpg", author:"Emily Henry", genre:"Romance", pages:384, dateFinished:"2026-08-02", rating:4.5, pubYear:2024, pubDate:"April 2024"},
  {title:"Light Bringer", cover:"https://covers.openlibrary.org/b/id/15157697-L.jpg", author:"Pierce Brown", genre:"Science Fiction", pages:682, dateFinished:"2026-08-08", rating:5, pubYear:2023, pubDate:"June 2023"},
  {title:"Atomic Habits", cover:"https://covers.openlibrary.org/b/id/12539702-L.jpg", author:"James Clear", genre:"Nonfiction", subgenre:"Self-Development", pages:319, dateFinished:"2026-08-09", rating:4, pubYear:2018, pubDate:"October 2018"},
  {title:"Dungeon Crawler Carl", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1715780755i/211721806.jpg", author:"Matt Dinniman", genre:"Science Fiction", pages:450, dateFinished:"2026-08-13", rating:4, pubYear:2020},
  {title:"Sharp Objects", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1475695315i/18045891._SX300_.jpg", author:"Gillian Flynn", genre:"Suspense", pages:254, dateFinished:"2026-08-15", rating:2, pubYear:2006, pubDate:"September 2006"},
  {title:"And Now, Back to You", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1748482477i/217513554.jpg", author:"B.K. Borison", genre:"Romance", pages:464, dateFinished:"2026-08-16", rating:2, pubYear:2026, pubDate:"February 2026", note:"Listened on audiobook. The one-bed, stuck-together trope felt more corny than swoony this time, and I skipped past the spicy scenes. Two meteorologists ending up working together was a fun premise, but this one just didn't click for me — probably won't continue the series."},
  {title:"Control Unleashed: Creating a Focused and Confident Dog", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1349894884i/2101812.jpg", author:"Leslie McDevitt", genre:"Nonfiction", subgenre:"Dogs", pages:226, dateFinished:"2026-08-17", rating:2, pubYear:2007, note:"It was fine, but got pretty boring toward the end. This is really written for someone running a class or working with dogs in groups, or training sport dogs for agility-type activities — not a lot of it ended up practical for my own dogs. That said, I did pick up a few fun games and exercises out of it that I thought were cool."},
  {title:"Carl's Doomsday Scenario", cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1719949673i/212393364._SY180_.jpg", author:"Matt Dinniman", genre:"Science Fiction", pages:528, dateFinished:"2026-08-21", rating:5, pubYear:2021, pubDate:"January 2021", note:"I really love the Carl & Donut dynamic — that's easily my favorite part. The video game/LitRPG stuff is growing on me too. Book 1 kind of threw me off with how weird and dark it got, but now that I know what to expect going in, I'm enjoying it a lot more."},
  {title:"Dungeon Crawler Carl, Vol. 1 (Graphic Novel)", cover:"https://covers.openlibrary.org/b/isbn/9781638493655-L.jpg", author:"Matt Dinniman", genre:"Graphic Novel", pages:320, dateFinished:"2026-08-23", rating:5, pubYear:2026},
  {title:"The Assassin's Blade", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1680869667i/126062562.jpg", author:"Sarah J. Maas", genre:["Fantasy","Young Adult"], pages:464, dateFinished:"2026-08-23", rating:5, pubYear:2014, pubDate:"March 2014", note:"Reread — I love it just as much the second time around."},
  {title:"Throne of Glass", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1673566495i/76703559.jpg", author:"Sarah J. Maas", genre:["Fantasy","Young Adult"], pages:404, dateFinished:"2026-08-28", rating:5, pubYear:2012, pubDate:"August 2012", note:"Reread — read the physical copy and listened on audiobook. Love this series, easy 5 stars."},
  {title:"Verity", cover:"https://covers.openlibrary.org/b/isbn/9781791392796-L.jpg", author:"Colleen Hoover", genre:"Suspense", pages:336, dateFinished:"2026-08-29", rating:5, pubYear:2018, pubDate:"December 2018", spicy:true, note:"Messy and unsettling in the best way — everyone in this book is a little bit awful, and I'm still not sure how I feel about any of it. Now that I know how it ends, I kind of want to reread it just to decide for myself whether Verity was really the monster the manuscript makes her out to be."},
  {title:"The Dungeon Anarchist's Cookbook", cover:"dungeon-crawler-carl/dungeon-anarchists-cookbook-cover.jpg", author:"Matt Dinniman", genre:"Science Fiction", pages:544, dateFinished:"2026-09-01", rating:3, pubYear:2021, pubDate:"March 2021", note:"My least favorite in the series so far. Between all the moving numbers and mechanics, I found myself getting confused, and honestly my attention started to drift a bit."},
  {title:"The Gate of the Feral Gods", cover:"https://covers.openlibrary.org/b/isbn/9780593955970-L.jpg", author:"Matt Dinniman", genre:"Science Fiction", pages:592, dateFinished:"2026-09-05", rating:3, pubYear:2022, note:"Middle-of-the-road for me — 3 stars. It ended on a rough cliffhanger though: Odette's clearly up to something, and now she's got Beatrice with her. 😬 I'm going to take a break from the series for a bit before picking up book five."},
  {title:"Crown of Midnight", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1673566594i/76705490.jpg", author:"Sarah J. Maas", genre:["Fantasy","Young Adult"], pages:440, dateFinished:"2026-09-09", rating:5, pubYear:2013, pubDate:"August 2013", note:"Reread — I feel like this book's ending is the beginning of where it really, really kicks off. 5 stars always. There's talk of sex and Celaena loses her virginity, but it isn't graphic."},
  {title:"Dear Monica Lewinsky: A Novel", cover:"https://covers.openlibrary.org/b/isbn/9780385551502-L.jpg", author:"Julia Langbein", genre:"Literary/Contemporary Fiction", pages:303, dateFinished:"2026-09-14", rating:2, pubYear:2026, note:"Didn't really like it and it kinda ended weird."},
  {title:"Heir of Fire", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1673566654i/76706470.jpg", author:"Sarah J. Maas", genre:["Fantasy","Young Adult"], pages:565, dateFinished:"2026-09-19", rating:5, pubYear:2014, pubDate:"September 2014", note:"Reread — my favorite in the series. Celaena's arc is brutal in the best way, and her bond with Rowan hit even harder knowing where it goes. But Manon and Abraxos stole the show for me — I think I love that storyline more than the main one, and watching Manon and the Thirteen wrecked me both times. This is where the series really becomes epic."},
];

/* Everything finished before 2026 that still shows up as "read" on a
   tracker page. Same idea as `books` above but without stats-page fields
   (pages/dateFinished), just enough to check a title off, show what genre
   shelf it belongs on, and show when/what cover to use.
   `genre` was backfilled from the master genre list used on the 2026 stats
   page. Double check any that look off and adjust freely. */
const pastReads = [
  {title:"The Awakening", genre:"Fantasy", readDate:"March 2025", rating:5, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1560277389i/46261182.jpg", pubYear:2019, pubDate:"July 2019"},
  {title:"Ruthless Fae", genre:"Fantasy", readDate:"March 2025", rating:5, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1565943045l/51966347.jpg", pubYear:2019, pubDate:"August 2019"},
  {title:"The Reckoning", genre:"Fantasy", readDate:"March 2025", rating:5, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1635198815i/59450488.jpg", pubYear:2019, pubDate:"October 2019"},
  {title:"Origins of an Academy Bully", genre:"Fantasy", readDate:"June 2025", rating:3, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1677104440i/49646047.jpg", pubYear:2019, pubDate:"July 2019"},
  {title:"Shadow Princess", genre:"Fantasy", readDate:"June 2025", rating:5, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1570223430l/53146871.jpg", pubYear:2020, pubDate:"January 2020"},
  {title:"Cursed Fates", genre:"Fantasy", readDate:"June 2025", rating:5, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1578710951i/50391615.jpg", pubYear:2020, pubDate:"May 2020"},
  {title:"The Big A.S.S. Party", genre:"Fantasy", readDate:"June 2025", rating:3, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1596452502i/54798561.jpg", pubYear:2020, pubDate:"August 2020"},
  {title:"Fated Throne", genre:"Fantasy", readDate:"June 2025", rating:5, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1605478159i/53535526.jpg", pubYear:2020, pubDate:"December 2020"},
  {title:"The Awakening as Told by the Boys", genre:"Fantasy", readDate:"June 2025", rating:3, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1629291604i/58800799.jpg", pubYear:2021, pubDate:"August 2021"},
  {title:"Heartless Sky", genre:"Fantasy", readDate:"June 2025", rating:5, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1628199263i/56474282.jpg", pubYear:2021, pubDate:"December 2021"},
  {title:"Sorrow and Starlight", genre:"Fantasy", readDate:"July 2025", rating:5, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1664442356i/59808792.jpg", pubYear:2022, pubDate:"December 2022"},
  {title:"Beyond the Veil", genre:"Fantasy", readDate:"July 2025", rating:5, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1686777106i/177899172.jpg", pubYear:2023, pubDate:"June 2023"},
  {title:"Live and Let Lionel", genre:"Fantasy", readDate:"July 2025", rating:3, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1707177040i/207603149.jpg", pubYear:2024, pubDate:"February 2024"},
  {title:"Restless Stars", genre:"Fantasy", readDate:"July 2025", rating:5, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1711995687i/198954263.jpg", pubYear:2024, pubDate:"April 2024"},
  {title:"Caged Wolf", genre:"Fantasy", readDate:"August 2025", rating:2, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1680885592i/126128250.jpg", pubYear:2021},
  {title:"Alpha Wolf", genre:"Fantasy", readDate:"October 2025", rating:2, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1622992365i/58272634.jpg", pubYear:2023},
  {title:"The Road of Bones", genre:"Fantasy", readDate:null, rating:5, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1704736755i/205044632.jpg", pubYear:2025},
  {title:"Kingdom of Claw", genre:"Fantasy", readDate:"April 2024", rating:5, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1706976049i/207041696.jpg", pubYear:2025},
  {title:"The Housemaid", genre:"Suspense", readDate:"April 2024", rating:3, cover:"https://covers.openlibrary.org/b/id/15105883-L.jpg", pubYear:2022, pubDate:"April 2022"},
  {title:"The Housemaid's Secret", genre:"Suspense", readDate:"September 2024", rating:2, cover:"https://covers.openlibrary.org/b/id/13439869-L.jpg", pubYear:2023},
  {title:"The Housemaid Is Watching", genre:"Suspense", readDate:"September 2024", rating:2, cover:"https://covers.openlibrary.org/b/id/14633291-L.jpg", pubYear:2024},
  {title:"Divine Rivals", genre:"Fantasy", readDate:"February 2025", rating:2, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1661929417i/62202008.jpg", pubYear:2023, pubDate:"December 2023"},
  {title:"The Shining", genre:"Suspense", readDate:"October 2024", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1353277730i/11588.jpg", rating:2, pubYear:1977, pubDate:"January 1977"},
  {title:"Firefly Lane", genre:"Literary/Contemporary Fiction", readDate:"April 2025", rating:4, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1485338283i/3524297.jpg", pubYear:2008},
  {title:"Dark Fae", genre:"Fantasy", readDate:"May 2025", rating:4.5, cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1619705977i/57892054._SY180_.jpg", pubYear:2020},
  {title:"Savage Fae", genre:"Fantasy", readDate:"May 2025", rating:5, cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1619382623i/57849105._SY180_.jpg", pubYear:2020},
  {title:"Vicious Fae", genre:"Fantasy", readDate:"May 2025", rating:5, cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1619382736i/57849111._SY180_.jpg", pubYear:2020},
  {title:"Broken Fae", genre:"Fantasy", readDate:"June 2025", rating:5, cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1619382818i/57849125._SY180_.jpg", pubYear:2022},
  {title:"Warrior Fae", genre:"Fantasy", readDate:"June 2025", rating:5, cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1619382385i/57849074._SY180_.jpg", pubYear:2022},
  {title:"Scythe", genre:["Young Adult","Science Fiction"], readDate:"September 2025", rating:5, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1456172676i/28954189.jpg", pubYear:2016, pubDate:"November 2016"},
  {title:"Powerless", genre:["Young Adult","Fantasy"], readDate:"June 2024", rating:5, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1672676191i/75513900.jpg", pubYear:2023},
  {title:"Powerful", genre:["Young Adult","Fantasy"], readDate:"June 2024", rating:2, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1731714728i/203840597.jpg", pubYear:2024},
  {title:"Reckless", genre:["Young Adult","Fantasy"], readDate:"July 2024", rating:4, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1731714752i/183086339.jpg", pubYear:2024},
  {title:"Fearless", genre:["Young Adult","Fantasy"], readDate:"August 2025", rating:2, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1730330746i/214151222.jpg", pubYear:2025},
  {title:"Wicked: Everyone Deserves the Chance to Fly", genre:["Fantasy","Literary/Contemporary Fiction"], readDate:"December 2024", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1733855486i/30241301.jpg", rating:3, pubYear:1995},
  {title:"Assistant to the Villain", genre:"Fantasy", readDate:"August 2024", rating:3, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1702057336i/123257687.jpg", pubYear:2023},
  {title:"First-Time Caller", genre:"Romance", readDate:"July 2025", rating:2, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1718283728i/213243908.jpg", pubYear:2025},
  {title:"Throne of Glass", genre:["Fantasy","Young Adult"], readDate:"October 2023", rating:5, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1673566495i/76703559.jpg", pubYear:2012, pubDate:"August 2012"},
  {title:"Crown of Midnight", genre:["Fantasy","Young Adult"], readDate:"October 2023", rating:5, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1673566594i/76705490.jpg", pubYear:2013, pubDate:"August 2013"},
  {title:"Heir of Fire", genre:["Fantasy","Young Adult"], readDate:"October 2023", rating:5, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1673566654i/76706470.jpg", pubYear:2014, pubDate:"September 2014"},
  {title:"Queen of Shadows", genre:["Fantasy","Young Adult"], readDate:"November 2023", rating:5, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1677267561i/123004944.jpg", pubYear:2015, pubDate:"September 2015"},
  {title:"Empire of Storms", genre:["Fantasy","Young Adult"], readDate:"December 2023", rating:5, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1676979605i/76713323.jpg", pubYear:2016, pubDate:"September 2016"},
  {title:"Tower of Dawn", genre:["Fantasy","Young Adult"], readDate:"January 2024", rating:5, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1673567264i/76714487.jpg", pubYear:2017, pubDate:"September 2017"},
  {title:"Kingdom of Ash", genre:["Fantasy","Young Adult"], readDate:"January 2024", rating:5, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1673567331i/76715522.jpg", pubYear:2018, pubDate:"October 2018"},
  {title:"A Court of Thorns and Roses", genre:"Fantasy", readDate:"July 2023", rating:5, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1620324329i/50659467.jpg", pubYear:2015, pubDate:"May 2015"},
  {title:"A Court of Mist and Fury", genre:"Fantasy", readDate:"July 2023", rating:5, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1620325671i/50659468.jpg", pubYear:2016, pubDate:"May 2016"},
  {title:"A Court of Wings and Ruin", genre:"Fantasy", readDate:"August 2023", rating:5, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1585623092i/50659472.jpg", pubYear:2017, pubDate:"May 2017"},
  {title:"A Court of Frost and Starlight", genre:"Fantasy", readDate:"August 2023", rating:5, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1585622963i/50659471.jpg", pubYear:2018, pubDate:"May 2018"},
  {title:"A Court of Silver Flames", genre:"Fantasy", readDate:"August 2023", rating:5, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1734440950i/53138095.jpg", pubYear:2021, pubDate:"February 2021"},
  {title:"House of Earth and Blood", genre:"Fantasy", readDate:"February 2024", rating:5, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1559142847i/44778083.jpg", pubYear:2020, pubDate:"March 2020"},
  {title:"House of Sky and Breath", genre:"Fantasy", readDate:"February 2024", rating:5, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1633097753i/40132775.jpg", pubYear:2022, pubDate:"February 2022"},
  {title:"House of Flame and Shadow", genre:"Fantasy", readDate:"February 2024", rating:5, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1689809645i/52857700.jpg", pubYear:2024, pubDate:"January 2024"},
  {title:"Fourth Wing", genre:"Fantasy", readDate:"November 2023", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1761312598i/61431922.jpg", rating:5, pubYear:2023, pubDate:"May 2023"},
  {title:"Iron Flame", genre:"Fantasy", readDate:"December 2023", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1706724269i/90202302.jpg", rating:5, pubYear:2023, pubDate:"November 2023"},
  {title:"Onyx Storm", genre:"Fantasy", readDate:"February 2025", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1720446381i/209668781.jpg", rating:5, pubYear:2025, pubDate:"January 2025"},
  {title:"'Salem's Lot", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1554318143i/18128._SX300_.jpg", genre:"Suspense", author:"Stephen King", readDate:null, rating:4, pubYear:1975, pubDate:"October 1975"},
  {title:"A Christmas Carol", cover:"https://covers.openlibrary.org/b/id/12875748-L.jpg", genre:"Classic Literature", author:"Charles Dickens", readDate:"December 2025", rating:4, pubYear:1843, pubDate:"December 1843"},
  {title:"A Christmas Carol Murder", genre:"Suspense", author:"Heather Redmond", readDate:"December 2025", rating:3, cover:"https://is1-ssl.mzstatic.com/image/thumb/Publication125/v4/98/37/c6/9837c627-f9b6-cf77-2c8c-153a8392c146/9781496717207.jpg/600x600bb.jpg", pubYear:2020, pubDate:"September 2020"},
  {title:"A Curse for True Love", cover:"https://covers.openlibrary.org/b/id/13124827-L.jpg", genre:["Fantasy","Young Adult"], author:"Stephanie Garber", readDate:"April 2024", rating:2, pubYear:2023, pubDate:"September 2023"},
  {title:"A Game of Fate", cover:"https://covers.openlibrary.org/b/id/10450006-L.jpg", genre:"Fantasy", author:"Scarlett St. Clair", readDate:"February 2024", rating:2, pubYear:2020, pubDate:"September 2020"},
  {title:"A Murder to Remember", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1768605692i/246687262._SX300_.jpg", genre:"Suspense", author:"Brynn Kelly", readDate:"October 2025", rating:2, pubYear:2024, pubDate:"February 2024"},
  {title:"A Swiftly Tilting Planet", cover:"https://covers.openlibrary.org/b/id/8223424-L.jpg", genre:["Middle Grade","Science Fiction"], author:"Madeleine L'Engle", readDate:null, rating:5, pubYear:1978, pubDate:"July 1978"},
  {title:"A Touch of Darkness", cover:"https://covers.openlibrary.org/b/id/10363130-L.jpg", genre:"Fantasy", author:"Scarlett St. Clair", readDate:"February 2024", rating:2, pubYear:2019, pubDate:"June 2019"},
  {title:"A Touch of Ruin", cover:"https://covers.openlibrary.org/b/id/11357445-L.jpg", genre:"Fantasy", author:"Scarlett St. Clair", readDate:"June 2024", rating:2, pubYear:2020, pubDate:"April 2020"},
  {title:"A Welcome Reunion", genre:"Suspense", author:"Lucinda Berry", readDate:"July 2024", rating:3, pubYear:2023, pubDate:"August 2023"},
  {title:"A Wind in the Door", cover:"https://covers.openlibrary.org/b/id/8276481-L.jpg", genre:["Middle Grade","Science Fiction"], author:"Madeleine L'Engle", readDate:null, rating:5, pubYear:1973},
  {title:"A Wrinkle in Time", cover:"https://covers.openlibrary.org/b/id/8709146-L.jpg", genre:["Middle Grade","Science Fiction"], author:"Madeleine L'Engle", readDate:null, rating:5, pubYear:1962},
  {title:"Alice's Adventures in Wonderland & Through the Looking Glass: Lavishly Illustrated with Interactive Elements", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1554894039i/43208990.jpg", genre:["Classic Literature","Fantasy"], author:"Lewis Carroll", readDate:"August 2025", rating:5, pubYear:2019, pubDate:"October 2019"},
  {title:"Allegiant", cover:"https://covers.openlibrary.org/b/id/7276393-L.jpg", genre:["Young Adult","Science Fiction"], author:"Veronica Roth", readDate:null, rating:5, pubYear:2013, pubDate:"October 2013"},
  {title:"An Acceptable Time", cover:"https://covers.openlibrary.org/b/id/8285726-L.jpg", genre:["Middle Grade","Science Fiction"], author:"Madeleine L'Engle", readDate:null, rating:5, pubYear:1989},
  {title:"Anne of Green Gables", cover:"https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T3/images/I/81Z5oWTNdIL._SY522_.jpg", genre:["Middle Grade","Classic Literature"], author:"L.M. Montgomery", readDate:null, pubYear:1908, pubDate:"June 1908"},
  {title:"Artificial Truth", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1752494069i/231470374.jpg", genre:"Science Fiction", author:"Jung-Myung Lee", readDate:"November 2025", rating:2, pubYear:2025, pubDate:"December 2025"},
  {title:"Astro Poets: Your Guides to the Zodiac", cover:"https://covers.openlibrary.org/b/id/9331284-L.jpg", genre:"Nonfiction", author:"Alex Dimitrov", readDate:"April 2024", rating:2, pubYear:2019, pubDate:"October 2019"},
  {title:"Beyond the Wand: The Magic & Mayhem of Growing Up a Wizard", genre:"Memoir/Biography", author:"Tom Felton", readDate:"March 2024", cover:"https://is1-ssl.mzstatic.com/image/thumb/Publication122/v4/bc/97/12/bc9712f7-0e68-a8ce-5e8b-b8e61e96c19c/9781538741382.jpg/600x600bb.jpg", rating:2.5, pubYear:2022, pubDate:"October 2022"},
  {title:"Black Beauty", cover:"https://covers.openlibrary.org/b/id/5007492-L.jpg", genre:["Classic Literature","Middle Grade"], author:"Anna Sewell", readDate:null, rating:5, pubYear:1877, pubDate:"November 1877"},
  {title:"Blood of Elves", cover:"https://covers.openlibrary.org/b/id/8457619-L.jpg", genre:"Fantasy", author:"Andrzej Sapkowski", readDate:"January 2024", rating:2, pubYear:2008},
  {title:"Bloody Jack: Being an Account of the Curious Adventures of Mary \"Jacky\" Faber, Ship's Boy", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1328336242i/8488973.jpg", genre:["Young Adult","Historical Fiction"], author:"L.A. Meyer", readDate:"August 2024", rating:3.5, pubYear:2002, pubDate:"September 2002"},
  {title:"BookMail: A Meta Horror Novel", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1746988324i/230237670._SX300_.jpg", genre:"Suspense", author:"Jason R. Davis", readDate:"November 2025", rating:3, pubYear:2025, pubDate:"May 2025"},
  {title:"Breaking Dawn", cover:"https://covers.openlibrary.org/b/id/12643419-L.jpg", genre:["Fantasy","Young Adult"], author:"Stephenie Meyer", readDate:null, rating:5, pubYear:2008, pubDate:"August 2008"},
  {title:"Bridge to Terabithia", cover:"https://covers.openlibrary.org/b/id/12627341-L.jpg", genre:"Middle Grade", author:"Katherine Paterson", readDate:null, rating:1, pubYear:1977, pubDate:"October 1977"},
  {title:"Brimstone", cover:"https://covers.openlibrary.org/b/id/15146289-L.jpg", genre:"Fantasy", author:"Callie Hart", readDate:"December 2025", rating:5, pubYear:2025, pubDate:"November 2025"},
  {title:"Broken Country", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1741267777i/214151202._SX300_.jpg", genre:"Literary/Contemporary Fiction", author:"Clare Leslie Hall", readDate:"November 2025", rating:2, pubYear:2025, pubDate:"March 2025"},
  {title:"Building a Second Brain: A Proven Method to Organize Your Digital Life and Unlock Your Creative Potential", cover:"https://covers.openlibrary.org/b/id/12372866-L.jpg", genre:"Nonfiction", subgenre:"Self-Development", author:"Tiago Forte", readDate:"February 2025", rating:5, pubYear:2022, pubDate:"June 2022"},
  {title:"Caraval", cover:"https://covers.openlibrary.org/b/id/7990753-L.jpg", genre:["Fantasy","Young Adult"], author:"Stephanie Garber", readDate:"March 2024", rating:2, pubYear:2017, pubDate:"January 2017"},
  {title:"Catching Fire", cover:"https://covers.openlibrary.org/b/id/12878880-L.jpg", genre:["Science Fiction","Young Adult"], author:"Suzanne Collins", readDate:"October 2023", rating:5, pubYear:2009, pubDate:"September 2009"},
  {title:"Circe", cover:"https://covers.openlibrary.org/b/id/8739376-L.jpg", genre:["Mythology","Literary/Contemporary Fiction"], author:"Madeline Miller", readDate:"November 2018", rating:5, pubYear:2018, pubDate:"April 2018"},
  {title:"City of Ashes", cover:"https://covers.openlibrary.org/b/id/1787130-L.jpg", genre:["Young Adult","Fantasy"], author:"Cassandra Clare", readDate:null, pubYear:2008, pubDate:"March 2008"},
  {title:"City of Bones", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1432730315i/256683.jpg", genre:["Young Adult","Fantasy"], author:"Cassandra Clare", readDate:null, pubYear:2007, pubDate:"March 2007"},
  {title:"City of Glass", cover:"https://covers.openlibrary.org/b/id/8200332-L.jpg", genre:["Young Adult","Fantasy"], author:"Cassandra Clare", readDate:null, pubYear:2009, pubDate:"March 2009"},
  {title:"Conflicted: How Productive Disagreements Lead to Better Outcomes", cover:"https://covers.openlibrary.org/b/id/10657607-L.jpg", genre:"Nonfiction", author:"Ian Leslie", readDate:"June 2024", rating:2, pubYear:2021, pubDate:"February 2021"},
  {title:"Curse of the Blue Tattoo: Being an Account of the Misadventures of Jacky Faber, Midshipman and Fine Lady", genre:["Young Adult","Historical Fiction"], author:"L.A. Meyer", readDate:null, cover:"https://is1-ssl.mzstatic.com/image/thumb/Publication116/v4/1d/8f/52/1d8f526d-2825-dfc7-93ae-5de20a7eb176/9780547415871.jpg/600x600bb.jpg", pubYear:2004, pubDate:"June 2004"},
  {title:"Death Row", cover:"https://covers.openlibrary.org/b/id/15103391-L.jpg", genre:"Suspense", author:"Freida McFadden", readDate:"August 2025", rating:4, pubYear:2025, pubDate:"June 2025"},
  {title:"Divergent", cover:"https://covers.openlibrary.org/b/id/13274634-L.jpg", genre:["Young Adult","Science Fiction"], author:"Veronica Roth", readDate:null, rating:5, pubYear:2011, pubDate:"April 2011"},
  {title:"Dr. Jekyll and Mr. Hyde", cover:"https://covers.openlibrary.org/b/id/295773-L.jpg", genre:["Classic Literature","Suspense"], author:"Robert Louis Stevenson", readDate:null, rating:3, pubYear:1886, pubDate:"January 1886"},
  {title:"Dune", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg", genre:"Science Fiction", author:"Frank Herbert", readDate:"May 2024", rating:2, pubYear:1965, pubDate:"October 1965"},
  {title:"Eclipse", cover:"https://covers.openlibrary.org/b/id/12643410-L.jpg", genre:["Fantasy","Young Adult"], author:"Stephenie Meyer", readDate:null, rating:5, pubYear:2007, pubDate:"August 2007"},
  {title:"Ella Enchanted", cover:"https://covers.openlibrary.org/b/id/50323-L.jpg", genre:["Middle Grade","Fantasy"], author:"Gail Carson Levine", readDate:null, rating:5, pubYear:1997},
  {title:"Enchantra", cover:"https://covers.openlibrary.org/b/id/15115281-L.jpg", genre:"Fantasy", author:"Kaylie Smith", readDate:"April 2025", rating:2, pubYear:2025, pubDate:"April 2025"},
  {title:"Eragon", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1366212852i/113436.jpg", genre:["Fantasy","Young Adult"], author:"Christopher Paolini", readDate:null, rating:5, pubYear:2002},
  {title:"Erasing History: How Fascists Rewrite the Past to Control the Future", genre:"Nonfiction", author:"Jason F. Stanley", readDate:"July 2025", rating:4, pubYear:2024, pubDate:"September 2024"},
  {title:"Everything Is Tuberculosis: The History and Persistence of Our Deadliest Infection", cover:"https://covers.openlibrary.org/b/id/14853332-L.jpg", genre:"Nonfiction", author:"John Green", readDate:"November 2025", rating:4, pubYear:2025, pubDate:"March 2025"},
  {title:"Extras", cover:"https://covers.openlibrary.org/b/id/1787209-L.jpg", genre:["Young Adult","Science Fiction"], author:"Scott Westerfeld", readDate:null, rating:3, pubYear:2007, pubDate:"October 2007"},
  {title:"Extreme Ownership: How U.S. Navy SEALs Lead and Win", cover:"https://covers.openlibrary.org/b/id/12835042-L.jpg", genre:"Nonfiction", subgenre:"Self-Development", author:"Jocko Willink", readDate:"December 2022", rating:4, pubYear:2015, pubDate:"October 2015"},
  {title:"Fairy Tale", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1647789287i/60177373.jpg", genre:["Fantasy","Suspense"], author:"Stephen King", readDate:"December 2022", rating:4, pubYear:2022, pubDate:"September 2022"},
  {title:"False Note", genre:"Suspense", author:"David Lagercrantz", readDate:"September 2025", rating:3, pubYear:2025},
  {title:"Fifty Shades Darker", cover:"https://covers.openlibrary.org/b/id/14566702-L.jpg", genre:"Romance", author:"E.L. James", readDate:null, pubYear:2011},
  {title:"Fifty Shades Freed", cover:"https://covers.openlibrary.org/b/id/14566669-L.jpg", genre:"Romance", author:"E.L. James", readDate:null, pubYear:2012},
  {title:"Fifty Shades of Grey", cover:"https://covers.openlibrary.org/b/id/12648183-L.jpg", genre:"Romance", author:"E.L. James", readDate:null, pubYear:2011},
  {title:"Finale", cover:"https://covers.openlibrary.org/b/id/8802288-L.jpg", genre:["Fantasy","Young Adult"], author:"Stephanie Garber", readDate:"March 2024", rating:2, pubYear:2019, pubDate:"May 2019"},
  {title:"Flowers for Algernon", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1689071681i/18373.jpg", genre:["Science Fiction","Literary/Contemporary Fiction"], author:"Daniel Keyes", readDate:null, pubYear:1966, pubDate:"March 1966"},
  {title:"Friends, Lovers, and the Big Terrible Thing", cover:"https://covers.openlibrary.org/b/id/13133707-L.jpg", genre:"Memoir/Biography", author:"Matthew Perry", readDate:"January 2024", rating:4, pubYear:2022, pubDate:"November 2022"},
  {title:"Galatea: A Short Story", cover:"https://covers.openlibrary.org/b/id/12871689-L.jpg", genre:["Mythology","Literary/Contemporary Fiction"], author:"Madeline Miller", readDate:"November 2025", rating:3, pubYear:2013, pubDate:"August 2013"},
  {title:"Gone Girl", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1554086139i/19288043.jpg", genre:"Suspense", author:"Gillian Flynn", readDate:"March 2024", rating:3, pubYear:2012, pubDate:"June 2012"},
  {title:"Good Neighbors", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1743804321i/230847753.jpg", genre:"Suspense", author:"Chad Zunker", readDate:"September 2025", rating:3, pubYear:2025, pubDate:"June 2025"},
  {title:"Greenlights", cover:"https://covers.openlibrary.org/b/id/10512439-L.jpg", genre:"Memoir/Biography", author:"Matthew McConaughey", readDate:"September 2025", rating:3, pubYear:2020, pubDate:"October 2020"},
  {title:"Hamlet", cover:"https://covers.openlibrary.org/b/id/8281954-L.jpg", genre:"Classic Literature", author:"William Shakespeare", readDate:null, rating:5, pubYear:1603},
  {title:"Harry Potter and the Chamber of Secrets", cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474169725i/15881._SY180_.jpg", genre:["Fantasy","Young Adult"], author:"J.K. Rowling", readDate:null, rating:5, pubYear:1998, pubDate:"July 1998"},
  {title:"Harry Potter and the Cursed Child: Parts One and Two", cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1470082995i/29056083._SY180_.jpg", genre:["Fantasy","Young Adult"], author:"J.K. Rowling", readDate:null, rating:5, pubYear:2016, pubDate:"July 2016"},
  {title:"Harry Potter and the Deathly Hallows", cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1627042661i/58613224._SY180_.jpg", genre:["Fantasy","Young Adult"], author:"J.K. Rowling", readDate:null, rating:5, pubYear:2007, pubDate:"July 2007"},
  {title:"Harry Potter and the Goblet of Fire", cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1627044952i/58613424._SY180_.jpg", genre:["Fantasy","Young Adult"], author:"J.K. Rowling", readDate:null, rating:5, pubYear:2000, pubDate:"July 2000"},
  {title:"Harry Potter and the Half-Blood Prince", cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1627043894i/58613345._SY180_.jpg", genre:["Fantasy","Young Adult"], author:"J.K. Rowling", readDate:null, rating:5, pubYear:2005, pubDate:"July 2005"},
  {title:"Harry Potter and the Order of the Phoenix", cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1627045351i/58613451._SY180_.jpg", genre:["Fantasy","Young Adult"], author:"J.K. Rowling", readDate:null, rating:5, pubYear:2003, pubDate:"June 2003"},
  {title:"Harry Potter and the Prisoner of Azkaban", cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1630547330i/5._SY180_.jpg", genre:["Fantasy","Young Adult"], author:"J.K. Rowling", readDate:null, rating:5, pubYear:1999, pubDate:"July 1999"},
  {title:"Harry Potter and the Sorcerer's Stone", cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1598823299i/42844155._SX120_.jpg", genre:["Fantasy","Young Adult"], author:"J.K. Rowling", readDate:null, rating:5, pubYear:1998, pubDate:"September 1998"},
  {title:"Haunted World: 101 Ghostly Places and Encounters", genre:"Nonfiction", author:"Theresa Cheung", readDate:"August 2025", rating:3, cover:"https://is1-ssl.mzstatic.com/image/thumb/Publication211/v4/40/52/1f/40521fcf-8823-305b-2b3e-101a83723931/9781789295818.jpg/600x600bb.jpg", pubYear:2024, pubDate:"September 2024"},
  {title:"Haunting Adeline", cover:"https://covers.openlibrary.org/b/id/12992962-L.jpg", genre:"Suspense", author:"H.D. Carlton", readDate:"April 2024", rating:3, pubYear:2021, pubDate:"August 2021"},
  {title:"He's Just Not That Into You: The No-Excuses Truth to Understanding Guys", cover:"https://covers.openlibrary.org/b/id/7109886-L.jpg", genre:"Nonfiction", subgenre:"Self-Development", author:"Greg Behrendt", readDate:null, rating:5, pubYear:2004, pubDate:"September 2004"},
  {title:"Hell Bent", cover:"https://covers.openlibrary.org/b/id/14357966-L.jpg", genre:"Fantasy", author:"Leigh Bardugo", readDate:"September 2024", rating:5, pubYear:2023, pubDate:"January 2023"},
  {title:"Holes", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1618269830i/38709._SX300_.jpg", genre:["Middle Grade","Suspense"], author:"Louis Sachar", readDate:null, rating:3, pubYear:1998, pubDate:"August 1998"},
  {title:"Homegoing", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1697879604i/163610118._SX300_.jpg", genre:["Historical Fiction","Literary/Contemporary Fiction"], author:"Yaa Gyasi", readDate:null, rating:4, pubYear:2016, pubDate:"June 2016"},
  {title:"How Stella Learned to Talk: The Groundbreaking Story of the World's First Talking Dog", cover:"https://covers.openlibrary.org/b/id/11007314-L.jpg", genre:"Nonfiction", subgenre:"Dogs", author:"Christina Hunger", readDate:"March 2023", rating:4, pubYear:2021, pubDate:"May 2021"},
  {title:"Hunting Adeline", cover:"https://covers.openlibrary.org/b/id/14614757-L.jpg", genre:"Suspense", author:"H.D. Carlton", readDate:"April 2024", rating:3, pubYear:2022, pubDate:"January 2022"},
  {title:"I'm Glad My Mom Died", cover:"https://covers.openlibrary.org/b/id/12855985-L.jpg", genre:"Memoir/Biography", author:"Jennette McCurdy", readDate:null, rating:3, pubYear:2022, pubDate:"August 2022"},
  {title:"Inside of a Dog: What Dogs See, Smell, and Know", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1347980799i/6332526.jpg", genre:"Nonfiction", subgenre:"Dogs", author:"Alexandra Horowitz", readDate:"June 2024", rating:4, pubYear:2009, pubDate:"September 2009"},
  {title:"Insurgent", cover:"https://covers.openlibrary.org/b/id/7083755-L.jpg", genre:["Young Adult","Science Fiction"], author:"Veronica Roth", readDate:null, rating:5, pubYear:2012, pubDate:"May 2012"},
  {title:"It Ends with Us", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1670795825i/62627512._SX300_.jpg", genre:"Romance", author:"Colleen Hoover", readDate:"May 2024", rating:4, pubYear:2016, pubDate:"August 2016"},
  {title:"It Starts with Us", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1644605295i/60393672.jpg", genre:"Romance", author:"Colleen Hoover", readDate:"July 2024", rating:2.5, pubYear:2022, pubDate:"October 2022"},
  {title:"It's Not Summer Without You", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1651389070i/60911707._SX300_.jpg", genre:["Young Adult","Romance"], author:"Jenny Han", readDate:"March 2024", rating:4, pubYear:2010, pubDate:"May 2010"},
  {title:"James and the Giant Peach", cover:"https://covers.openlibrary.org/b/id/8252454-L.jpg", genre:["Middle Grade","Fantasy"], author:"Roald Dahl", readDate:null, pubYear:1961},
  {title:"Jane Eyre", cover:"https://covers.openlibrary.org/b/id/8235363-L.jpg", genre:"Classic Literature", author:"Charlotte Brontë", readDate:null, rating:5, pubYear:1847, pubDate:"October 1847"},
  {title:"Legendary", cover:"https://covers.openlibrary.org/b/id/9242465-L.jpg", genre:["Fantasy","Young Adult"], author:"Stephanie Garber", readDate:"March 2024", rating:2, pubYear:2018, pubDate:"September 2018"},
  {title:"Lessons in Chemistry", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1634748496i/58065033._SX300_.jpg", genre:["Historical Fiction","Literary/Contemporary Fiction"], author:"Bonnie Garmus", readDate:null, rating:2, pubYear:2022, pubDate:"April 2022"},
  {title:"Little Women", cover:"https://covers.openlibrary.org/b/id/8775559-L.jpg", genre:"Classic Literature", author:"Louisa May Alcott", readDate:null, pubYear:1868, pubDate:"September 1868"},
  {title:"Lord of the Flies", cover:"https://covers.openlibrary.org/b/id/8684447-L.jpg", genre:"Classic Literature", author:"William Golding", readDate:null, rating:1, pubYear:1954, pubDate:"September 1954"},
  {title:"Loud: Accept Nothing Less Than the Life You Deserve", cover:"https://covers.openlibrary.org/b/id/15112929-L.jpg", genre:"Nonfiction", author:"Drew Afualo", readDate:"September 2024", rating:4, pubYear:2024, pubDate:"July 2024"},
  {title:"Macbeth", cover:"https://covers.openlibrary.org/b/id/872432-L.jpg", genre:"Classic Literature", author:"William Shakespeare", readDate:null, rating:5, pubYear:1623},
  {title:"Manacled", cover:"https://covers.openlibrary.org/b/id/13839050-L.jpg", genre:"Fantasy", author:"SenLinYu", readDate:"March 2024", rating:5, pubYear:2018, pubDate:"April 2018"},
  {title:"Many Waters", cover:"https://covers.openlibrary.org/b/id/6536498-L.jpg", genre:["Middle Grade","Science Fiction"], author:"Madeleine L'Engle", readDate:null, rating:5, pubYear:1986},
  {title:"Midnight Sun", cover:"https://covers.openlibrary.org/b/id/9946539-L.jpg", genre:["Fantasy","Young Adult"], author:"Stephenie Meyer", readDate:null, rating:5, pubYear:2020, pubDate:"August 2020"},
  {title:"Mockingjay", cover:"https://covers.openlibrary.org/b/id/12646459-L.jpg", genre:["Science Fiction","Young Adult"], author:"Suzanne Collins", readDate:"October 2023", rating:5, pubYear:2010, pubDate:"August 2010"},
  {title:"New Moon", cover:"https://covers.openlibrary.org/b/id/12643406-L.jpg", genre:["Fantasy","Young Adult"], author:"Stephenie Meyer", readDate:null, rating:5, pubYear:2006, pubDate:"September 2006"},
  {title:"Next Level Basic: The Definitive Basic Bitch Handbook", cover:"https://covers.openlibrary.org/b/id/9008353-L.jpg", genre:"Nonfiction", author:"Stassi Schroeder", readDate:"April 2024", rating:2, pubYear:2019, pubDate:"April 2019"},
  {title:"Nice Girls Don't Get the Corner Office: 101 Unconscious Mistakes Women Make That Sabotage Their Careers", cover:"https://covers.openlibrary.org/b/id/286348-L.jpg", genre:"Nonfiction", subgenre:"Self-Development", author:"Lois P. Frankel", readDate:"July 2023", rating:3, pubYear:2004, pubDate:"February 2004"},
  {title:"Nikola Tesla: Imagination and the Man That Invented the 20th Century", genre:"Memoir/Biography", author:"Sean Patrick", readDate:"December 2025", cover:"https://is1-ssl.mzstatic.com/image/thumb/Publication2/v4/fa/25/4a/fa254a07-cc2b-d210-0c98-4366b527c02d/Tesla_HR.jpg/600x600bb.jpg", rating:2, pubYear:2013},
  {title:"Ninth House", cover:"https://covers.openlibrary.org/b/id/12667414-L.jpg", genre:"Fantasy", author:"Leigh Bardugo", readDate:"September 2024", rating:5, pubYear:2019, pubDate:"October 2019"},
  {title:"Nobody's Girl: A Memoir of Surviving Abuse and Fighting for Justice", cover:"https://covers.openlibrary.org/b/id/15134796-L.jpg", genre:"Memoir/Biography", author:"Virginia Roberts Giuffre", readDate:"December 2025", rating:4, pubYear:2025, pubDate:"October 2025"},
  {title:"On Writing: A Memoir of the Craft", cover:"https://covers.openlibrary.org/b/id/9255939-L.jpg", genre:"Nonfiction", author:"Stephen King", readDate:"February 2024", rating:4, pubYear:2000, pubDate:"October 2000"},
  {title:"Once Upon a Broken Heart", cover:"https://covers.openlibrary.org/b/id/11427092-L.jpg", genre:["Fantasy","Young Adult"], author:"Stephanie Garber", readDate:"March 2024", rating:4, pubYear:2021, pubDate:"September 2021"},
  {title:"Phantasma", cover:"https://covers.openlibrary.org/b/id/14842920-L.jpg", genre:"Fantasy", author:"Kaylie Smith", readDate:"April 2025", rating:2, pubYear:2024, pubDate:"September 2024"},
  {title:"Pretties", cover:"https://covers.openlibrary.org/b/id/1474615-L.jpg", genre:["Young Adult","Science Fiction"], author:"Scott Westerfeld", readDate:null, rating:5, pubYear:2005},
  {title:"Prince Caspian", cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1308814880i/121749._SY180_.jpg", genre:["Middle Grade","Fantasy"], author:"C.S. Lewis", readDate:null, rating:5, pubYear:1951, pubDate:"October 1951"},
  {title:"Quicksilver", cover:"https://covers.openlibrary.org/b/id/15227615-L.jpg", genre:"Fantasy", author:"Callie Hart", readDate:"February 2025", rating:5, pubYear:2024, pubDate:"June 2024"},
  {title:"Rebel Rising", genre:"Memoir/Biography", author:"Rebel Wilson", readDate:"July 2024", cover:"https://is1-ssl.mzstatic.com/image/thumb/Publication211/v4/ae/39/1f/ae391f79-b9a0-a80d-6dec-49bba616c4f9/9781668007242.jpg/600x600bb.jpg", rating:3, pubYear:2024, pubDate:"April 2024"},
  {title:"Revenge of The Reaper", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1784178776i/255499535.jpg", genre:"Suspense", author:"Molly R. Anderson", readDate:null, rating:5},
  {title:"Romeo and Juliet", cover:"https://covers.openlibrary.org/b/id/8257991-L.jpg", genre:"Classic Literature", author:"William Shakespeare", readDate:null, rating:5, pubYear:1597},
  {title:"Run, Rose, Run", cover:"https://covers.openlibrary.org/b/id/11581994-L.jpg", genre:"Suspense", author:"Dolly Parton", readDate:"December 2023", rating:2, pubYear:2022, pubDate:"March 2022"},
  {title:"Saving Noah", cover:"https://covers.openlibrary.org/b/id/11993833-L.jpg", genre:"Suspense", author:"Lucinda Berry", readDate:"May 2024", rating:4, pubYear:2017, pubDate:"September 2017"},
  {title:"Shape Up: Stop Running in Circles and Ship Work that Matters", cover:"https://covers.openlibrary.org/b/id/12600273-L.jpg", genre:"Nonfiction", subgenre:"Self-Development", author:"Ryan Singer", readDate:"October 2024", rating:5, pubYear:2019},
  {title:"Six Scorched Roses", cover:"https://covers.openlibrary.org/b/id/13764916-L.jpg", genre:"Fantasy", author:"Carissa Broadbent", readDate:"May 2025", rating:3, pubYear:2023, pubDate:"March 2023"},
  {title:"Slaying the Vampire Conqueror", cover:"https://covers.openlibrary.org/b/id/15163940-L.jpg", genre:"Fantasy", author:"Carissa Broadbent", readDate:"October 2025", rating:5, pubYear:2023, pubDate:"April 2023"},
  {title:"Small Things", cover:"https://covers.openlibrary.org/b/id/8404327-L.jpg", genre:"Suspense", author:"Wanda M. Morris", readDate:"September 2025", rating:3, pubYear:1991},
  {title:"Specials", cover:"https://covers.openlibrary.org/b/id/761913-L.jpg", genre:["Young Adult","Science Fiction"], author:"Scott Westerfeld", readDate:null, rating:5, pubYear:2006, pubDate:"May 2006"},
  {title:"Spinning Silver", cover:"https://covers.openlibrary.org/b/id/8423441-L.jpg", genre:"Fantasy", author:"Naomi Novik", readDate:"March 2025", rating:3, pubYear:2018, pubDate:"July 2018"},
  {title:"Sword of Destiny", cover:"https://covers.openlibrary.org/b/id/11102583-L.jpg", genre:"Fantasy", author:"Andrzej Sapkowski", readDate:"January 2024", rating:2, pubYear:2015},
  {title:"Talking As Fast As I Can: From Gilmore Girls to Gilmore Girls, and Everything in Between", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1528327669i/40411206.jpg", genre:"Memoir/Biography", author:"Lauren Graham", readDate:"July 2024", rating:2, pubYear:2016, pubDate:"November 2016"},
  {title:"The 90-Day Novel", cover:"https://covers.openlibrary.org/b/id/8857110-L.jpg", genre:"Nonfiction", subgenre:"Self-Development", author:"Alan Watt", readDate:"January 2025", rating:4, pubYear:2017},
  {title:"The Alchemist", cover:"https://covers.openlibrary.org/b/id/11556106-L.jpg", genre:"Literary/Contemporary Fiction", author:"Paulo Coelho", readDate:null, pubYear:1988},
  {title:"The Ashes & the Star-Cursed King", cover:"https://covers.openlibrary.org/b/id/13976045-L.jpg", genre:"Fantasy", author:"Carissa Broadbent", readDate:"May 2025", rating:5, pubYear:2023},
  {title:"The Babysitter: My Summers with a Serial Killer", cover:"https://covers.openlibrary.org/b/id/10827568-L.jpg", genre:"Memoir/Biography", author:"Liza Rodman", readDate:"January 2024", rating:3, pubYear:2021, pubDate:"June 2021"},
  {title:"The Ballad of Never After", cover:"https://covers.openlibrary.org/b/id/12945180-L.jpg", genre:["Fantasy","Young Adult"], author:"Stephanie Garber", readDate:"April 2024", rating:5, pubYear:2022, pubDate:"September 2022"},
  {title:"The Ballad of Songbirds and Snakes", cover:"https://covers.openlibrary.org/b/id/14421833-L.jpg", genre:["Science Fiction","Young Adult"], author:"Suzanne Collins", readDate:"September 2023", rating:3, pubYear:2020, pubDate:"May 2020"},
  {title:"The Bewitching", cover:"https://covers.openlibrary.org/b/id/15101938-L.jpg", genre:"Suspense", author:"Silvia Moreno-Garcia", readDate:"November 2025", rating:4, pubYear:2025},
  {title:"The Bullet Journal Method: Track Your Past, Order Your Present, Plan Your Future", cover:"https://covers.openlibrary.org/b/id/10413432-L.jpg", genre:"Nonfiction", subgenre:"Self-Development", author:"Ryder Carroll", readDate:"July 2023", rating:5, pubYear:2018, pubDate:"October 2018"},
  {title:"The Call of the Wild", cover:"https://covers.openlibrary.org/b/id/12393037-L.jpg", genre:["Classic Literature","Middle Grade"], author:"Jack London", readDate:null, pubYear:1903, pubDate:"July 1903"},
  {title:"The Crypt of Lost Souls", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1756517403i/240940458.jpg", genre:"Suspense", author:"Molly R. Anderson", readDate:null, rating:5},
  {title:"The Decision: Overcoming Today's BS for Tomorrow's Success", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1590271157i/53456548.jpg", genre:"Memoir/Biography", author:"Kevin Hart", readDate:"July 2024", rating:2, pubYear:2021},
  {title:"The Diary of a Young Girl", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1696989545i/127441416.jpg", genre:"Memoir/Biography", author:"Anne Frank", readDate:null, rating:4, pubYear:1947, pubDate:"June 1947"},
  {title:"The Duke and I", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1761383929i/56468652._SX300_.jpg", genre:"Historical Fiction", author:"Julia Quinn", readDate:"June 2024", rating:2, pubYear:2000, pubDate:"January 2000"},
  {title:"The Ex-Wives Club", genre:"Suspense", author:"Sally Hepworth", readDate:"August 2025", rating:3, pubYear:2025, pubDate:"June 2025"},
  {title:"The Extra", cover:"https://covers.openlibrary.org/b/id/15235147-L.jpg", genre:"Suspense", author:"Annie Neugebauer", readDate:"December 2025", rating:3, pubYear:2026},
  {title:"The Fallen & the Kiss of Dusk", genre:"Fantasy", author:"Carissa Broadbent", readDate:"October 2025", rating:3, cover:"https://is1-ssl.mzstatic.com/image/thumb/Publication211/v4/61/ce/bb/61cebbd6-2633-e9f1-48d6-5fe42d373d53/1064406042.jpg/600x600bb.jpg", pubYear:2025},
  {title:"The Fault in Our Stars", cover:"https://covers.openlibrary.org/b/id/7418786-L.jpg", genre:["Young Adult","Literary/Contemporary Fiction"], author:"John Green", readDate:null, rating:4, pubYear:2012, pubDate:"January 2012"},
  {title:"The Giver", cover:"https://covers.openlibrary.org/b/id/8352502-L.jpg", genre:["Middle Grade","Science Fiction"], author:"Lois Lowry", readDate:null, pubYear:1993, pubDate:"April 1993"},
  {title:"The Giving Tree", cover:"https://covers.openlibrary.org/b/id/8981758-L.jpg", genre:["Classic Literature","Middle Grade"], author:"Shel Silverstein", readDate:null, rating:5, pubYear:1964},
  {title:"The Golden Compass", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1505766203i/119322.jpg", genre:["Fantasy","Young Adult"], author:"Philip Pullman", readDate:null, rating:5, pubYear:1995},
  {title:"The Handmaid's Tale", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1488552336i/34454589.jpg", genre:["Literary/Contemporary Fiction","Science Fiction"], author:"Margaret Atwood", readDate:null, rating:5, pubYear:1985},
  {title:"The Handmaid's Tale: The Graphic Novel", cover:"https://covers.openlibrary.org/b/id/14339099-L.jpg", genre:["Graphic Novel","Literary/Contemporary Fiction","Science Fiction"], author:"Renee Nault", readDate:"November 2024", rating:4, pubYear:2019, pubDate:"March 2019"},
  {title:"The Help", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1622355533i/4667024.jpg", genre:["Historical Fiction","Literary/Contemporary Fiction"], author:"Kathryn Stockett", readDate:null, rating:4, pubYear:2009, pubDate:"February 2009"},
  {title:"The Horse and His Boy", cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1703358949i/84119._SX120_.jpg", genre:["Middle Grade","Fantasy"], author:"C.S. Lewis", readDate:null, rating:5, pubYear:1954, pubDate:"September 1954"},
  {title:"The Host", cover:"https://covers.openlibrary.org/b/id/3366731-L.jpg", genre:"Fantasy", author:"Stephenie Meyer", readDate:null, rating:5, pubYear:2008, pubDate:"May 2008"},
  {title:"The Hunger Games", cover:"https://covers.openlibrary.org/b/id/12646537-L.jpg", genre:["Science Fiction","Young Adult"], author:"Suzanne Collins", readDate:"September 2023", rating:5, pubYear:2008, pubDate:"September 2008"},
  {title:"The Iliad", cover:"https://covers.openlibrary.org/b/id/12621988-L.jpg", genre:["Classic Literature","Mythology"], author:"Homer", readDate:null, rating:5, pubYear:1946},
  {title:"The Invisible Life of Addie LaRue", cover:"https://covers.openlibrary.org/b/id/10092261-L.jpg", genre:["Fantasy","Literary/Contemporary Fiction"], author:"V.E. Schwab", readDate:"September 2024", rating:5, pubYear:2020, pubDate:"October 2020"},
  {title:"The Kiss of the Concubine: A story of Anne Boleyn and Henry VIII", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1455468670i/18820989.jpg", genre:"Historical Fiction", author:"Judith Arnopp", readDate:"August 2025", rating:3, pubYear:2013, pubDate:"November 2013"},
  {title:"The Kite Runner", cover:"https://covers.openlibrary.org/b/id/14846827-L.jpg", genre:"Literary/Contemporary Fiction", author:"Khaled Hosseini", readDate:null, rating:3, pubYear:2003, pubDate:"May 2003"},
  {title:"The Last Battle", cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1308814830i/84369._SY180_.jpg", genre:["Middle Grade","Fantasy"], author:"C.S. Lewis", readDate:null, rating:5, pubYear:1956, pubDate:"September 1956"},
  {title:"The Last Wish", cover:"https://covers.openlibrary.org/b/id/7360819-L.jpg", genre:"Fantasy", author:"Andrzej Sapkowski", readDate:"January 2024", rating:2, pubYear:2007},
  {title:"The Lion, the Witch and the Wardrobe", cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1697079942i/132080146._SY180_.jpg", genre:["Middle Grade","Fantasy"], author:"C.S. Lewis", readDate:null, rating:5, pubYear:1950, pubDate:"October 1950"},
  {title:"The Lovely Bones", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1457810586i/12232938._SX300_.jpg", genre:"Literary/Contemporary Fiction", author:"Alice Sebold", readDate:null, pubYear:2002, pubDate:"July 2002"},
  {title:"The Magician's Nephew", cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1308814770i/65605._SY180_.jpg", genre:["Middle Grade","Fantasy"], author:"C.S. Lewis", readDate:null, rating:5, pubYear:1955, pubDate:"May 1955"},
  {title:"The Death Cure", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1303997647i/7864437.jpg", genre:["Science Fiction","Young Adult"], author:"James Dashner", readDate:null, pubYear:2011, pubDate:"October 2011"},
  {title:"The Fever Code", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1449687382i/23267628.jpg", genre:["Science Fiction","Young Adult"], author:"James Dashner", readDate:null, pubYear:2016, pubDate:"September 2016"},
  {title:"The Kill Order", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1330636153i/13089710.jpg", genre:["Science Fiction","Young Adult"], author:"James Dashner", readDate:null, pubYear:2012, pubDate:"August 2012"},
  {title:"The Maze Runner", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1375596592i/6186357.jpg", genre:["Science Fiction","Young Adult"], author:"James Dashner", readDate:null, pubYear:2009, pubDate:"October 2009"},
  {title:"The Scorch Trials", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1388240248i/7631105.jpg", genre:["Science Fiction","Young Adult"], author:"James Dashner", readDate:null, pubYear:2010, pubDate:"October 2010"},
  {title:"The Odyssey", cover:"https://covers.openlibrary.org/b/id/12474938-L.jpg", genre:["Classic Literature","Mythology"], author:"Homer", readDate:null, rating:5, pubYear:1946},
  {title:"The Perfect Child", cover:"https://covers.openlibrary.org/b/id/8807977-L.jpg", genre:"Suspense", author:"Lucinda Berry", readDate:"June 2024", rating:3, pubYear:2019, pubDate:"March 2019"},
  {title:"The Poisonwood Bible", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1644073807i/7244.jpg", genre:"Literary/Contemporary Fiction", author:"Barbara Kingsolver", readDate:null, pubYear:1998, pubDate:"October 1998"},
  {title:"The Polar Express", cover:"https://covers.openlibrary.org/b/id/394670-L.jpg", genre:["Classic Literature","Middle Grade"], author:"Chris Van Allsburg", readDate:null, pubYear:1985},
  {title:"The Princess Diaries", cover:"https://covers.openlibrary.org/b/id/6874781-L.jpg", genre:"Young Adult", author:"Meg Cabot", readDate:null, pubYear:2000, pubDate:"August 2000"},
  {title:"The Rise of Magicks", cover:"https://covers.openlibrary.org/b/id/9154264-L.jpg", genre:"Fantasy", author:"Nora Roberts", readDate:"March 2023", rating:2, pubYear:2019, pubDate:"November 2019"},
  {title:"Year One", cover:"https://covers.openlibrary.org/b/id/8841058-L.jpg", genre:"Fantasy", author:"Nora Roberts", readDate:null, rating:3, pubYear:2017, pubDate:"December 2017"},
  {title:"Of Blood and Bone", cover:"https://covers.openlibrary.org/b/id/8758039-L.jpg", genre:"Fantasy", author:"Nora Roberts", readDate:null, rating:5, pubYear:2018, pubDate:"December 2018"},
  {title:"The Serpent and the Wings of Night", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1711665394i/60714999.jpg", genre:"Fantasy", author:"Carissa Broadbent", readDate:"April 2025", rating:5, pubYear:2022, pubDate:"August 2022"},
  {title:"The Silent Patient", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1668782119i/40097951._SX300_.jpg", genre:"Suspense", author:"Alex Michaelides", readDate:"February 2024", rating:4, pubYear:2019, pubDate:"February 2019"},
  {title:"The Silver Chair", cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1661032839i/65641._SY180_.jpg", genre:["Middle Grade","Fantasy"], author:"C.S. Lewis", readDate:null, rating:5, pubYear:1953, pubDate:"September 1953"},
  {title:"The Skydivers", cover:"https://m.media-amazon.com/images/I/71b6bPBE1+L._AC_AIweblab1378949,T2_FMavif_SF688,436_PQ60_.jpg", genre:"Suspense", author:"Chris Bohjalian", readDate:"September 2025", rating:3, pubYear:2025, pubDate:"June 2025"},
  {title:"The Song of Achilles", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1357177533i/13623848._SX300_.jpg", genre:["Mythology","Literary/Contemporary Fiction"], author:"Madeline Miller", readDate:"November 2025", rating:5, pubYear:2011, pubDate:"September 2011"},
  {title:"The Songbird & the Heart of Stone", cover:"https://covers.openlibrary.org/b/id/15148779-L.jpg", genre:"Fantasy", author:"Carissa Broadbent", readDate:"May 2025", rating:3, pubYear:2024, pubDate:"November 2024"},
  {title:"The Strength of the Few", cover:"https://covers.openlibrary.org/b/id/15150800-L.jpg", genre:"Fantasy", author:"James Islington", readDate:"November 2025", rating:5, pubYear:2025, pubDate:"November 2025"},
  {title:"The Summer I Turned Pretty", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1496784224i/35380161.jpg", genre:["Young Adult","Romance"], author:"Jenny Han", readDate:"March 2024", rating:4, pubYear:2009, pubDate:"May 2009"},
  {title:"The Teacher", cover:"https://covers.openlibrary.org/b/id/14570911-L.jpg", genre:"Suspense", author:"Freida McFadden", readDate:"May 2024", rating:4, pubYear:2024, pubDate:"February 2024"},
  {title:"The Testaments", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1549292344i/42975172._SX300_.jpg", genre:"Literary/Contemporary Fiction", author:"Margaret Atwood", readDate:"November 2024", rating:4, pubYear:2019, pubDate:"September 2019"},
  {title:"The Very Secret Society of Irregular Witches", cover:"https://covers.openlibrary.org/b/id/14656782-L.jpg", genre:"Fantasy", author:"Sangu Mandanna", readDate:"November 2023", rating:2, pubYear:2022},
  {title:"The Voyage of the Dawn Treader", cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1661032500i/140225._SX120_.jpg", genre:["Middle Grade","Fantasy"], author:"C.S. Lewis", readDate:null, rating:5, pubYear:1952, pubDate:"March 1952"},
  {title:"The War of Art", cover:"https://covers.openlibrary.org/b/id/288439-L.jpg", genre:"Nonfiction", subgenre:"Self-Development", author:"Steven Pressfield", readDate:"October 2025", rating:3, pubYear:2002},
  {title:"The Will of the Many", cover:"https://covers.openlibrary.org/b/id/15149934-L.jpg", genre:"Fantasy", author:"James Islington", readDate:"September 2025", rating:5, pubYear:2023, pubDate:"May 2023"},
  {title:"The Witch's Book of Self-Care: Magical Ways to Pamper, Soothe, and Care for Your Body and Spirit", cover:"https://covers.openlibrary.org/b/id/10232435-L.jpg", genre:"Nonfiction", author:"Arin Murphy-Hiscock", readDate:"April 2025", rating:3, pubYear:2018, pubDate:"December 2018"},
  {title:"The Woman in Me", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1689090540i/63133205.jpg", genre:"Memoir/Biography", author:"Britney Spears", readDate:"November 2023", rating:3, pubYear:2023, pubDate:"October 2023"},
  {title:"They Never Learn", cover:"https://covers.openlibrary.org/b/id/10492370-L.jpg", genre:"Suspense", author:"Layne Fargo", readDate:"October 2023", rating:3, pubYear:2020, pubDate:"October 2020"},
  {title:"To Kill a Mockingbird", cover:"https://covers.openlibrary.org/b/id/14351077-L.jpg", genre:"Classic Literature", author:"Harper Lee", readDate:null, pubYear:1960, pubDate:"July 1960"},
  {title:"Tress of the Emerald Sea", cover:"https://covers.openlibrary.org/b/id/13143232-L.jpg", genre:"Fantasy", author:"Brandon Sanderson", readDate:"May 2024", rating:3, pubYear:2023, pubDate:"January 2023"},
  {title:"Twilight", cover:"https://covers.openlibrary.org/b/id/12641977-L.jpg", genre:["Fantasy","Young Adult"], author:"Stephenie Meyer", readDate:null, rating:5, pubYear:2005, pubDate:"October 2005"},
  {title:"Uglies", cover:"https://covers.openlibrary.org/b/id/438244-L.jpg", genre:["Young Adult","Science Fiction"], author:"Scott Westerfeld", readDate:null, rating:5, pubYear:2005, pubDate:"February 2005"},
  {title:"Under the Jolly Roger: Being an Account of the Further Nautical Adventures of Jacky Faber", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1427211277i/295651.jpg", genre:["Young Adult","Historical Fiction"], author:"L.A. Meyer", readDate:null, rating:3, pubYear:2005, pubDate:"August 2005"},
  {title:"Ushers", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1725223613i/218362004.jpg", genre:"Suspense", author:"Joe Hill", readDate:"August 2025", rating:4.5, pubYear:2024, pubDate:"November 2024"},
  {title:"Water for Elephants", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1667708346i/43641._SX300_.jpg", genre:["Historical Fiction","Literary/Contemporary Fiction"], author:"Sara Gruen", readDate:null, rating:4, pubYear:2006, pubDate:"May 2006"},
  {title:"We'll Always Have Summer", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1646142377i/60530511._SX300_.jpg", genre:["Young Adult","Romance"], author:"Jenny Han", readDate:"March 2024", rating:4, pubYear:2011, pubDate:"April 2011"},
  {title:"What Is Real?: The Unfinished Quest for the Meaning of Quantum Physics", cover:"https://covers.openlibrary.org/b/id/9222261-L.jpg", genre:"Nonfiction", author:"Adam Becker", readDate:"February 2025", rating:3, pubYear:2018, pubDate:"March 2018"},
  {title:"Where the Crawdads Sing", cover:"https://covers.openlibrary.org/b/id/8362947-L.jpg", genre:"Literary/Contemporary Fiction", author:"Delia Owens", readDate:null, rating:3, pubYear:2018, pubDate:"August 2018"},
  {title:"Where the Sidewalk Ends", cover:"https://covers.openlibrary.org/b/id/31070-L.jpg", genre:"Nonfiction", subgenre:"Poetry", author:"Shel Silverstein", readDate:null, rating:5, pubYear:1974},
  {title:"White Fang", cover:"https://covers.openlibrary.org/b/id/8236920-L.jpg", genre:["Classic Literature","Middle Grade"], author:"Jack London", readDate:null, pubYear:1906, pubDate:"October 1906"},
  {title:"Who Could Ever Love You: A Family Memoir", genre:"Memoir/Biography", author:"Mary L. Trump", readDate:"July 2025", cover:"https://is1-ssl.mzstatic.com/image/thumb/Publication221/v4/b4/3f/d3/b43fd377-ec94-7cf1-a3f6-668a5a84186d/9781250278487.jpg/600x600bb.jpg", rating:3, pubYear:2024, pubDate:"September 2024"},
  {title:"Will My Cat Eat My Eyeballs? Big Questions from Tiny Mortals About Death", cover:"https://covers.openlibrary.org/b/id/8780386-L.jpg", genre:"Nonfiction", author:"Caitlin Doughty", readDate:"August 2025", rating:2, pubYear:2019, pubDate:"September 2019"},
  {title:"Wuthering Heights", cover:"https://covers.openlibrary.org/b/id/12818862-L.jpg", genre:"Classic Literature", author:"Emily Brontë", readDate:null, pubYear:1847, pubDate:"December 1847"},
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

/* Renders a `rating` (1-5, halves allowed) as a full 5-star glyph string,
   e.g. 4.5 -> "★★★★½☆", 3 -> "★★★☆☆" — the empty stars make it obvious at
   a glance whether something is a 4 or a 5, instead of just counting a
   run of filled stars. Returns "" for a missing rating so callers can
   skip the line entirely. */
function formatRating(rating) {
  if (rating == null) return "";
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return "★".repeat(full) + (half ? "½" : "") + "☆".repeat(Math.max(empty, 0));
}

/* A chubby, rounded-point cartoon star (not the sharp unicode ★), used by
   starRatingHTML below. Coordinates are on a 0-100 viewBox. */
const STAR_PATH_D = "M 45.22 13.06 Q 50 4 54.78 13.06 L 59.28 21.59 Q 64.06 30.65 74.15 32.39 L 83.65 34.04 Q 93.75 35.79 86.61 43.13 L 79.89 50.05 Q 72.75 57.39 74.21 67.53 L 75.58 77.07 Q 77.04 87.21 67.85 82.69 L 59.19 78.44 Q 50 73.92 40.81 78.44 L 32.15 82.69 Q 22.96 87.21 24.42 77.07 L 25.79 67.53 Q 27.25 57.39 20.11 50.05 L 13.39 43.13 Q 6.25 35.79 16.35 34.04 L 25.85 32.39 Q 35.94 30.65 40.72 21.59 Z";
function starIconSVG(cls) {
  return `<svg class="star-icon ${cls}" viewBox="0 0 100 100" aria-hidden="true"><path d="${STAR_PATH_D}"/></svg>`;
}

/* Renders a `rating` as a true 5-star widget: a dim, rounded-cartoon-star
   outline track behind a solid-color filled star layer clipped to
   (rating/5)*100% width, so a 3.5 shows as an actually-half-filled 4th
   star rather than a "½" glyph. Both layers use currentColor, so the
   widget always matches whatever color/font-size the caller's wrapping
   element sets (see .star-rating in the page CSS) — nothing to configure
   here. Returns "" for a missing rating so callers can skip the line
   entirely. */
function starRatingHTML(rating) {
  if (rating == null) return "";
  const pct = Math.max(0, Math.min(100, (rating / 5) * 100));
  const bg = starIconSVG("star-icon-outline").repeat(5);
  const fg = starIconSVG("star-icon-filled").repeat(5);
  return `<span class="star-rating" role="img" aria-label="${rating} out of 5 stars"><span class="star-rating-bg">${bg}</span><span class="star-rating-fg" style="width:${pct}%">${fg}</span></span>`;
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
    name: "Dungeon Crawler Carl (Graphic Novel)",
    author: "Matt Dinniman",
    status: "ongoing",
    books: [
      {title:"Dungeon Crawler Carl, Vol. 1 (Graphic Novel)"},
      {title:"Dungeon Crawler Carl, Vol. 2 (Graphic Novel)", comingSoon:"October 2026"},
      {title:"Dungeon Crawler Carl, Vol. 3 (Graphic Novel)", comingSoon:"March 2027"}
    ]
  },
  {
    name: "The Empyrean (Fourth Wing)",
    author: "Rebecca Yarros",
    status: "ongoing",
    books: [
      {title:"Fourth Wing"},
      {title:"Iron Flame"},
      {title:"Onyx Storm"},
      {title:"Threshing Day", number:"Bonus", comingSoon:"September 2026"},
      {title:"Empyrean Book 4", comingSoon:true},
      {title:"Empyrean Book 5", comingSoon:true}
    ]
  },
  {
    name: "Throne of Glass",
    author: "Sarah J. Maas",
    status: "complete",
    books: [
      {title:"The Assassin's Blade", number:"0.5"},
      {title:"Throne of Glass", number:"1"},
      {title:"Crown of Midnight", number:"2"},
      {title:"Heir of Fire", number:"3"},
      {title:"Queen of Shadows", number:"4"},
      {title:"Empire of Storms", number:"5"},
      {title:"Tower of Dawn", number:"6"},
      {title:"Kingdom of Ash", number:"7"}
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
      {title:"Elphie: A Wicked Childhood", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1722577882i/199743711.jpg", pubDate:"2025"},
      {title:"Galinda: A Charmed Childhood", comingSoon:"September 2026"},
      {title:"Wicked: Everyone Deserves the Chance to Fly"},
      {title:"Son of a Witch", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1370992595i/13521.jpg", pubDate:"2005"},
      {title:"A Lion Among Men", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1370992593i/3124249.jpg", pubDate:"October 2008"},
      {title:"Out of Oz", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1370992585i/10594929.jpg", pubDate:"November 2011"}
    ]
  },
  {
    name: "Assistant to the Villain",
    author: "Hannah Nicole Maehrer",
    status: "ongoing",
    books: [
      {title:"Assistant to the Villain"},
      {title:"Apprentice to the Villain", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1730881672i/203147386.jpg", pubDate:"August 2024"},
      {title:"Accomplice to the Villain", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1765013612i/219209774.jpg", pubDate:"August 2025"},
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
      {title:"Fearful", number:"3.5", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1749656949i/220161171.jpg", pubDate:"2025"}
    ]
  },
  {
    name: "Arc of a Scythe",
    author: "Neal Shusterman",
    status: "complete",
    books: [
      {title:"Scythe"},
      {title:"Thunderhead", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1505658534i/33555224.jpg", pubDate:"2018"},
      {title:"The Toll", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1558117336i/43822024.jpg", pubDate:"November 2019"},
      {title:"Gleanings", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1649100303i/60320602.jpg", pubDate:"November 2022"}
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
      {title:"On the Cursed Day of Christmas", number:"10", comingSoon:"October 2026"}
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
      {title:"Dawn of the North"},
      {title:"The Ashen Book 5", comingSoon:true}
    ]
  },
  {
    name: "Dungeon Crawler Carl",
    author: "Matt Dinniman",
    status: "complete",
    books: [
      {title:"Dungeon Crawler Carl", number:"1"},
      {title:"Carl's Doomsday Scenario", number:"2"},
      {title:"The Dungeon Anarchist's Cookbook", number:"3"},
      {title:"The Gate of the Feral Gods", number:"4"},
      {title:"The Butcher's Masquerade", number:"5", pubDate:"2022"},
      {title:"The Eye of the Bedlam Bride", number:"6", pubDate:"2023"},
      {title:"This Inevitable Ruin", number:"7", pubDate:"2024"},
      {title:"A Parade of Horribles", number:"8", pubDate:"2026"},
      {title:"The Beautiful Place", number:"9", comingSoon:true},
      {title:"Dungeon Crawler Carl, Book 10", number:"10", comingSoon:true}
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
      {title:"Red God", comingSoon:"Late 2026 (estimate)"}
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
      {title:"Wild Reverence", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1737937394i/222376906.jpg", pubDate:"2025"},
      {title:"Divine Rivals"},
      {title:"Ruthless Vows"}
    ]
  },
  {
    name: "The Shining",
    author: "Stephen King",
    status: "complete",
    books: [
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
      {title:"Bogs, Brews, and Banshees", number:"1", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1699539434i/201899519.jpg", pubDate:"March 2024"},
      {title:"Whispers, Whiskey, and Wishes", number:"2", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1708359064i/208878163.jpg", pubDate:"October 2024"},
      {title:"Pranks, Poitin, and Pucas", number:"3", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1724848086i/217912014.jpg", pubDate:"2025"},
      {title:"Roots, Rum, and Revenants", number:"4", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1758805415i/242063842.jpg", pubDate:"2025"},
      {title:"Spectacles, Sangria, and Selkies", number:"5", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1782483297i/254609775.jpg", pubDate:"June 2026"},
      {title:"Greed, Guinness, and Grogochs", number:"6", comingSoon:"April 2027"},
      {title:"Murder, Mead, and Mayhem", number:"7", comingSoon:true}
    ]
  },
  {
    name: "Fae & Alchemy",
    author: "Callie Hart",
    status: "ongoing",
    books: [
      {title:"Quicksilver"},
      {title:"Brimstone"},
      {title:"Fae & Alchemy Book 3", number:"3", comingSoon:"September 2027"}
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
      {title:"The Lion & the Deathless Dark", number:"5", pubDate:"2026"},
      {title:"Crowns of Nyaxia Book 6", number:"6", comingSoon:"2027"}
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
      {title:"Time of Contempt", number:"4", pubDate:"2013"},
      {title:"Baptism of Fire", number:"5", pubDate:"2014"},
      {title:"The Tower of the Swallow", number:"6", pubDate:"2016"},
      {title:"The Lady of the Lake", number:"7", pubDate:"2017"},
      {title:"Season of Storms", number:"8", pubDate:"2018"},
      {title:"Crossroads of Ravens", number:"9", pubDate:"2025"}
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
      {title:"City of Fallen Angels", pubDate:"2011"},
      {title:"City of Lost Souls", pubDate:"2012"},
      {title:"City of Heavenly Fire", pubDate:"2014"}
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
      {title:"The Strength of the Few"},
      {title:"The Justice of One", comingSoon:true}
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
      {title:"Enchantra"},
      {title:"Daemonica", comingSoon:"September 2027"}
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
      {title:"In the Belly of the Bloodhound: Being an Account of a Particularly Peculiar Adventure in the Life of Jacky Faber", pubDate:"2006"},
      {title:"Mississippi Jack: Being an Account of the Further Waterborne Adventures of Jacky Faber", pubDate:"2007"},
      {title:"My Bonny Light Horseman: Being an Account of the Further Adventures of Jacky Faber, in Love and War", pubDate:"2008"},
      {title:"Rapture of the Deep: Being an Account of the Further Adventures of Jacky Faber, Soldier, Sailor, Mermaid, Spy", pubDate:"2009"},
      {title:"The Wake of the Lorelei Lee: Being an Account of the Further Adventures of Jacky Faber, on Her Way to Botany Bay", pubDate:"2010"},
      {title:"The Mark of the Golden Dragon: Being an Account of the Further Adventures of Jacky Faber, Jewel of the East, Vexation of the West, and Pearl of the South China Sea", pubDate:"2011"},
      {title:"Viva Jacquelina!: Being an Account of the Further Adventures of Jacky Faber, Over the Hills and Far Away", pubDate:"2012"},
      {title:"Boston Jacky: Being an Account of the Further Adventures of Jacky Faber, Taking Care of Business", pubDate:"2013"},
      {title:"Wild Rover No More: Being the Last Recorded Account of the Life and Times of Jacky Faber", pubDate:"2014"}
    ]
  },
  {
    name: "Ninth House",
    author: "Leigh Bardugo",
    status: "ongoing",
    books: [
      {title:"Ninth House"},
      {title:"Hell Bent"},
      {title:"Dead Beat", comingSoon:"September 2026"}
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
      {title:"The Duke and I: The 2nd Epilogue", pubDate:"2013"},
      {title:"The Viscount Who Loved Me", pubDate:"December 2000"},
      {title:"The Viscount Who Loved Me: The 2nd Epilogue", pubDate:"2013"},
      {title:"An Offer From a Gentleman", pubDate:"July 2001"},
      {title:"An Offer From a Gentleman: The 2nd Epilogue", pubDate:"2013"},
      {title:"Romancing Mister Bridgerton", pubDate:"July 2002"},
      {title:"Romancing Mister Bridgerton: The 2nd Epilogue", pubDate:"2013"},
      {title:"To Sir Phillip, With Love", pubDate:"2003"},
      {title:"To Sir Phillip, With Love: The 2nd Epilogue", pubDate:"2013"},
      {title:"When He Was Wicked", pubDate:"2004"},
      {title:"When He Was Wicked: The 2nd Epilogue", pubDate:"2013"},
      {title:"It's In His Kiss", pubDate:"2005"},
      {title:"It's In His Kiss: The 2nd Epilogue", pubDate:"2013"},
      {title:"On the Way to the Wedding", pubDate:"June 2006"},
      {title:"On the Way to the Wedding: The 2nd Epilogue", pubDate:"2013"}
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
      {title:"A Touch of Ruin"},
      {title:"A Touch of Malice", pubDate:"2021"},
      {title:"A Touch of Chaos", pubDate:"2024"},
      {title:"A Christmas of Chaos", number:"Bonus", pubDate:"2025"}
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
      {title:"Finale"},
      {title:"Spectacular", number:"Bonus", pubDate:"October 2024"}
    ]
  },
  {
    name: "Once Upon a Broken Heart",
    author: "Stephanie Garber",
    status: "ongoing",
    books: [
      {title:"Once Upon a Broken Heart"},
      {title:"The Ballad of Never After"},
      {title:"A Curse for True Love"},
      {title:"The Mirror of Infinite Endings", comingSoon:"September 2026"}
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
      {title:"Dune Messiah", pubDate:"1969"},
      {title:"Children of Dune", pubDate:"1976"},
      {title:"God Emperor of Dune", pubDate:"1981"},
      {title:"Heretics of Dune", pubDate:"1984"},
      {title:"Chapterhouse: Dune", pubDate:"1985"}
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
      {title:"Eldest", pubDate:"August 2005"},
      {title:"Brisingr", pubDate:"September 2008"},
      {title:"Inheritance", pubDate:"November 2011"},
      {title:"Murtagh", pubDate:"November 2023"},
      {title:"The Book of Remembrance", number:"Bonus", comingSoon:"September 2026"},
      {title:"The Inheritance Cycle Book 6", comingSoon:true}
    ]
  },
  {
    name: "His Dark Materials",
    author: "Philip Pullman",
    status: "complete",
    books: [
      {title:"Once Upon a Time in the North", number:"0.5", pubDate:"April 2008"},
      {title:"The Collectors", number:"0.6", pubDate:"September 2022"},
      {title:"The Golden Compass", number:"1"},
      {title:"The Subtle Knife", number:"2", pubDate:"July 1997"},
      {title:"The Amber Spyglass", number:"3", pubDate:"October 2000"},
      {title:"Lyra's Oxford", number:"3.5", pubDate:"October 2003"},
      {title:"Serpentine", number:"3.6", pubDate:"October 2020"},
      {title:"The Imagination Chamber", number:"3.7", pubDate:"April 2022"}
    ]
  },
  {
    name: "The Giver Quartet",
    author: "Lois Lowry",
    status: "complete",
    books: [
      {title:"The Giver"},
      {title:"Gathering Blue", pubDate:"September 2000"},
      {title:"Messenger", pubDate:"April 2004"},
      {title:"Son", pubDate:"October 2012"}
    ]
  },
  {
    name: "Anne of Green Gables",
    author: "L.M. Montgomery",
    status: "complete",
    books: [
      {title:"Anne of Green Gables"},
      {title:"Anne of Avonlea", pubDate:"1909"},
      {title:"Anne of the Island", pubDate:"1915"},
      {title:"Anne of Windy Poplars", pubDate:"1946"},
      {title:"Anne's House of Dreams", pubDate:"1917"},
      {title:"Anne of Ingleside", pubDate:"1938"},
      {title:"Rainbow Valley", pubDate:"1919"},
      {title:"Rilla of Ingleside", pubDate:"1921"}
    ]
  },
  {
    name: "The Princess Diaries",
    author: "Meg Cabot",
    status: "complete",
    books: [
      {title:"The Princess Diaries"},
      {title:"Princess in the Spotlight", pubDate:"2001"},
      {title:"Princess in Love", pubDate:"2002"},
      {title:"Princess in Waiting", pubDate:"2003"},
      {title:"Princess in Pink", pubDate:"2004"},
      {title:"Princess in Training", pubDate:"2005"},
      {title:"Party Princess", pubDate:"2006"},
      {title:"Princess on the Brink", pubDate:"2006"},
      {title:"Princess Mia", pubDate:"2007"},
      {title:"Forever Princess", pubDate:"2009"},
      {title:"Royal Wedding", pubDate:"2015"},
      {title:"The Quarantine Princess Diaries", pubDate:"March 2023"}
    ]
  },
  {
    name: "A Dickens of a Crime",
    author: "Heather Redmond",
    status: "ongoing",
    books: [
      {title:"A Tale of Two Murders", pubDate:"August 2018"},
      {title:"Grave Expectations", pubDate:"2019"},
      {title:"A Christmas Carol Murder"},
      {title:"The Pickwick Murders", pubDate:"October 2021"},
      {title:"A Twist of Murder", pubDate:"November 2022"}
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
