/* =========================================================================
   Choice Awards Watchlist data, used by watchlist.html.

   MONTHLY REFRESH: ask Claude "refresh the watchlist". It should
     1. bump `lastRefreshed` below,
     2. add newly announced / newly buzzy books to `watchlist`,
     3. fix any release dates that shifted,
     4. add a `buzz` note to anything that's blowing up (Goodreads adds,
        big reviews, BookTok, etc.).
   The page splits "Out now" vs "Coming up" by TODAY's date automatically,
   so books move columns on their own as release dates pass. 
   Each entry:
     title, author           : required
     date                    : "YYYY-MM-DD" (exact) or "YYYY-MM" (month only)
                               or "2027" (year only / TBA)
     cat                     : one of CATS below
     series                  : optional, e.g. "ACOTAR #7"
     note                    : one line on why it's worth watching
     buzz                    : optional, evidence of hype (shown as a flame tag)
     hot                     : true = lead pick (shown first, gets a ★)
     read                    : true once Megan has read it. Shows a green check
                               and dims the cover. Set by hand (ask Claude), so it
                               looks the same in every browser.
     goodreads               : optional direct Goodreads book URL. If left off, the
                               "View on Goodreads" button opens a Goodreads search
                               for the title + author.
     isbn                    : optional ISBN-13 (digits only). Most reliable way to
                               get a cover; the page tries it before any lookup.
     cover                   : optional image URL. If left off, the page looks
                               the book up on Open Library by title + author in
                               the browser and falls back to a designed
                               placeholder (unannounced covers won't be found).
                               Add a URL here once a real cover is revealed.

   This page is standalone: it only reads this file, not reading-data.js.

   DATES ARE FROM PREVIEW LISTS and often shift. Re-check before relying
   on any of them. Entries with only a month are marked "date TBC".
   ========================================================================= */
const WATCHLIST_META = {
  lastRefreshed: "2026-11-12",
  // Goodreads Choice eligibility window for the 2027 awards. The 2026 rules
  // were Nov 12 2025 to Nov 10 2026, so 2027 is assumed to be the same shape
  // (confirm when Goodreads publishes the 2027 rules).
  windowStart: "2026-11-11",
  windowEnd: "2027-11-10",
};

const CATS = [
  "Romance", "Romantasy", "Fantasy", "Science Fiction",
  "Mystery & Thriller", "Horror", "Historical Fiction", "Fiction", "Young Adult",
  "Memoir & Biography", "Nonfiction", "Graphic Novel",
];

const watchlist = [
  /* ---- closing out the 2026 window (still on this year's ballot) ---- */
  {title:"The Last King of Faerie", author:"Cassandra Clare", date:"2026-11-03", cat:"Young Adult", series:"The Shadowhunter Chronicles", note:"Kit and Ty finally get their quest.", buzz:"Top of Bookish Elf's November reader list"},
  {title:"A Conspiracy of Charming Monsters", author:"Holly Black", date:"2026-11-03", cat:"Young Adult", note:"Back to Elfhame, Cruel Prince adjacent."},
  {title:"Captive Traitor King", author:"Brigid Kemmerer", date:"2026-11-03", cat:"Romantasy"},
  {title:"Dangerous Impulses", author:"Jennifer Lynn Barnes", date:"2026-11-03", cat:"Young Adult", series:"The Naturals", note:"New Naturals thriller."},
  {title:"Sunflower Season", author:"Danica Nava", date:"2026-11-03", cat:"Romance", note:"Screenwriter teams up with a nerdy assistant to write a script."},
  {title:"Hate and Other Acts of Fiction", author:"Megan Oliver", date:"2026-11-10", cat:"Romance", note:"Rival tour guides team up for a murder-mystery event."},

  {title:"Crying on the Kitchen Floor", author:"Trisha Paytas", date:"2026-11-10", cat:"Memoir & Biography", isbn:"9781538781173", note:"Long-awaited tell-all memoir from Grand Central (368 pages). The audiobook is read by Paytas herself. One outlet reported Nov 11, but the publisher lists Nov 10.", buzz:"Big preorder buzz"},

  /* ---- Nov 2026, other genres (still on the 2026 ballot) ---- */
  {title:"Monsters of Ohio", author:"John Scalzi", date:"2026-11-03", cat:"Science Fiction", buzz:"On Time Out's most-anticipated November list"},
  {title:"West of Loveland", author:"Tom Drury", date:"2026-11-03", cat:"Fiction", note:"Literary fiction, praised as funny and beautiful."},
  {title:"Stations", author:"Louise Kennedy", date:"2026-11-03", cat:"Historical Fiction", buzz:"AV Club's November historical fiction pick"},
  {title:"Desire Feeds the Feast", author:"Tarajia Morrell", date:"2026-11-03", cat:"Memoir & Biography", buzz:"Marie Claire's must-read November list"},
  {title:"Jolt", author:"Ted Scheinman", date:"2026-11-10", cat:"Memoir & Biography", note:"Memoir about a controversial therapy; Kirkus calls it witty and candid."},
  {title:"Don't Stop Snowing", author:"Gabriel Bump", date:"2026-11-10", cat:"Fiction", buzz:"Lit Hub November pick"},
  {title:"The Squatters", author:"Salva Brelvi", date:"2026-11-10", cat:"Fiction", buzz:"AV Club's November fiction pick"},
  {title:"The Cold Read", author:"Tara Laskowski", date:"2026-11-10", cat:"Mystery & Thriller", note:"Locked-room story about a jury in a Hollywood murder trial.", buzz:"Fangirlish's best November thrillers"},
  {title:"When They Find Me", author:"Carter Wilson", date:"2026-11-10", cat:"Mystery & Thriller", buzz:"Fangirlish's best November thrillers"},

  /* ---- 2027 awards window opens ---- */
  {title:"Peculiar Stars", author:"Rebecca Yarros", date:"2026-11-17", cat:"Romantasy", hot:true, note:"Yarros has won the Romantasy category before (Onyx Storm, 2025).", buzz:"Named a most-anticipated November release"},
  {title:"The Wrath Gods Reap", author:"Abigail Owen", date:"2026-11-17", cat:"Romantasy", note:"Finale of a Greek gods romantasy series."},

  {title:"All the Little Secrets", author:"May Cobb", date:"2026-11-17", cat:"Mystery & Thriller", buzz:"AV Club's November thriller pick"},
  {title:"Dead New World", author:"Lin Darrow", date:"2026-11-17", cat:"Mystery & Thriller", buzz:"Book Riot's November mysteries and thrillers"},
  {title:"Between the River and the Railroad Tracks", author:"Nicole R. Fleetwood", date:"2026-11-17", cat:"Memoir & Biography", note:"Kirkus: a counter-story to Hillbilly Elegy's portrait of southwestern Ohio."},
  {title:"The First House", author:"Avni Doshi", date:"2026-11", cat:"Fiction", note:"Listings disagree: Nov 10 or Nov 17."},
  {title:"Primeval and Other Times", author:"Olga Tokarczuk", date:"2026-12-01", cat:"Fiction", note:"Listed for Dec 1. May be a new edition of an earlier book, so verify."},

  /* ---- January 2027 ---- */
  {title:"Love Interest", author:"Chloe Liese", date:"2027-01-05", cat:"Romance"},
  {title:"A Court of Forgotten Melody", author:"Sarah J. Maas", date:"2027-01-12", cat:"Romantasy", hot:true, series:"ACOTAR #7 (Valkyrie Cycle II & III)", note:"Maas is a perennial Choice Awards contender.", buzz:"#1 on Bookishelf's 2027 most-wanted ranking"},
  {title:"The Things You'll Never Know", author:"Ashley Audrain", date:"2027-01", cat:"Fiction", buzz:"#2 on Bookishelf's 2027 most-wanted ranking"},
  {title:"The Stars Look Like Home", author:"TJ Klune", date:"2027-01-12", cat:"Science Fiction", hot:true, buzz:"#3 on Bookishelf's 2027 most-wanted ranking"},
  {title:"In One Brief Moment All Eternity", author:"Elif Shafak", date:"2027-01-12", cat:"Fiction"},
  {title:"The Gentleman Bastard Sequence #4", author:"Scott Lynch", date:"2027-01-13", cat:"Fantasy", note:"Title not yet confirmed in my sources. Long-awaited fourth book."},
  {title:"The Voice of the Wretched", author:"Kester Grant", date:"2027-01-14", cat:"Fantasy", note:"Another list gives Dec 2, 2027, so the date is uncertain."},
  {title:"The Jewel of Sugar Hill", author:"Fiona Davis", date:"2027-01-26", cat:"Historical Fiction", note:"Book club pick list."},
  {title:"Merciful is the Dark", author:"Sophie Clark", date:"2027-01-26", cat:"Young Adult", note:"Another list gives March 23, 2027, so the date is uncertain."},

  /* ---- February 2027 ---- */
  {title:"The Golden Silhouette", author:"Sara Hashem", date:"2027-02-02", cat:"Fantasy"},
  {title:"The Two-Body Problem", author:"Ali Hazelwood", date:"2027-02-02", cat:"Romance", hot:true, note:"Listed as the sequel to The Love Hypothesis."},
  {title:"Mastermind", author:"Sarah MacLean", date:"2027-02-16", cat:"Romance", note:"Historical romance."},

  /* ---- March 2027 ---- */
  {title:"One Last Time", author:"Robert Iger", date:"2027-03-02", cat:"Nonfiction"},
  {title:"Cardinal Rule", author:"Liz Tomforde", date:"2027-03-02", cat:"Romance"},
  {title:"Every Ordinary Thing", author:"Jessica Joyce", date:"2027-03-02", cat:"Romance"},
  {title:"Joyfully Ever After", author:"Sara Raasch", date:"2027-03-02", cat:"Romantasy"},
  {title:"Just One More Chapter", author:"Lucy Score", date:"2027-03-09", cat:"Romance", note:"Small-town romance."},
  {title:"Seven and the Swift", author:"Devney Perry", date:"2027-03-09", cat:"Romantasy"},

  /* ---- later 2027 ---- */
  {title:"The Life Savers", author:"Candice Millard", date:"2027-04-20", cat:"Nonfiction"},
  {title:"Unrivaled", author:"Rachel Reid", date:"2027-06-01", cat:"Romance"},
  {title:"Fae & Alchemy, Book 3", author:"Callie Hart", date:"2027-09-07", cat:"Romantasy", note:"Title TBA."},
  {title:"Mirror Mirror", author:"Jim Butcher", date:"2027", cat:"Fantasy", series:"Dresden Files #19", note:"Date TBA, estimated 2027."},
  {title:"Outlander #10", author:"Diana Gabaldon", date:"2027", cat:"Historical Fiction", series:"Outlander #10", note:"Title and date TBA."},

  /* ---- 2027, other genres (added from a genre-by-genre sweep) ---- */
  {title:"Better Every Day", author:"Arnold Schwarzenegger", date:"2027-01-12", cat:"Nonfiction", note:"An action plan for a full life."},
  {title:"Malice", author:"Jonathan Kellerman", date:"2027-02-02", cat:"Mystery & Thriller", series:"Alex Delaware #42"},
  {title:"King of Masks", author:"Petra Lord", date:"2027-02-09", cat:"Young Adult", series:"Queen of Faces #2"},
  {title:"Dark Union", author:"Mark Greaney", date:"2027-02-16", cat:"Mystery & Thriller", series:"Gray Man #16"},
  {title:"The Moth Reborn", author:"Samantha Shannon", date:"2027-02-25", cat:"Fantasy", series:"The Bone Season #6", note:"Fantasy and sci-fi crossover.", buzz:"Bookishelf's most-wanted early 2027 list"},
  {title:"And by the Way", author:"Barbra Streisand", date:"2027-03-30", cat:"Memoir & Biography", note:"Date from Bookishelf's list, so double-check."},
  {title:"Modern Classic", author:"Emily Henry", date:"2027-04-06", cat:"Romance", hot:true, note:"A straightforward romance, reportedly inspired by The Holiday. Henry won Romance in 2025.", buzz:"Date confirmed by multiple sources"},
  {title:"Where Are the Wise", author:"C. S. Harris", date:"2027-04-06", cat:"Historical Fiction", series:"Sebastian St. Cyr #22", note:"Historical mystery."},
  {title:"What Do I Know: A Guide to Living", author:"Rob Lowe", date:"2027-04-06", cat:"Memoir & Biography"},
  {title:"Omega Authority", author:"Brad Taylor", date:"2027-04-20", cat:"Mystery & Thriller", series:"Pike Logan"},
  {title:"The Return Trip Is Shorter", author:"Anne Tyler", date:"2027-04-27", cat:"Fiction", note:"New Anne Tyler novel."},
  {title:"Long Lost Love", author:"Beatriz Williams", date:"2027-06-01", cat:"Historical Fiction"},
  {title:"Gabriel Allon #27", author:"Daniel Silva", date:"2027-07-15", cat:"Mystery & Thriller", series:"Gabriel Allon #27", note:"Title not announced in my sources."},
  {title:"Well, That Could Have Gone Better", author:"Jodi Taylor", date:"2027-08-12", cat:"Science Fiction", series:"Chronicles of St. Mary's #15"},
  {title:"Untitled Colleen Hoover novel", author:"Colleen Hoover", date:"2027-10-05", cat:"Mystery & Thriller", note:"Publisher lists it as a new psychological suspense. Date is provisional."},
  {title:"Sweet Chaos", author:"Tracy Wolff", date:"2027-11-02", cat:"Young Adult", series:"The Calder Academy #2"},
  {title:"Red God", author:"Pierce Brown", date:"2027", cat:"Science Fiction", hot:true, series:"Red Rising #7", note:"No release date yet. Pierce Brown has said the book is not finished, and Penguin Random House confirms no date. 2027 looks more likely than 2026, and it may be split into two volumes."},
  {title:"Kingsbridge Book 6", author:"Ken Follett", date:"2027", cat:"Historical Fiction", note:"Listed as an estimate for 2027. Title not announced."},
  {title:"Untitled memoir", author:"Tara Westover", date:"2027", cat:"Memoir & Biography", note:"Book Riot reports a new Westover memoir is coming in 2027. No date or title yet."},

  /* ---- from Megan's series tracker and most-read authors (monthly check) ---- */
  {title:"The Golden Child", author:"Lucinda Berry", date:"2027-01-12", cat:"Mystery & Thriller", note:"Psychological thriller about choosing between saving one child or the other. A few listings say Jan 14.", buzz:"A Lucinda Berry book (you've read 3)"},
  {title:"Longtime Listener", author:"B.K. Borison", date:"2027-02-23", cat:"Romance", hot:true, series:"Heartstrings #3", note:"Book 3 in the series you're reading. The audiobook is listed for Feb 25. It appears to wrap up the trilogy.", buzz:"Penguin Random House and Bookishelf agree on the date"},
  {title:"Dungeon Crawler Carl, Vol. 3 (Graphic Novel)", author:"Matt Dinniman", date:"2027-03", cat:"Graphic Novel", series:"Dungeon Crawler Carl (graphic novel)", note:"Date comes from your series tracker. I couldn't re-confirm it."},
  {title:"The Sleepwalker", author:"Freida McFadden", date:"2027-03-23", cat:"Mystery & Thriller", hot:true, note:"Standalone psychological thriller about a nurse whose sleepwalking gets tangled up with murder. McFadden's deal with Sourcebooks also points to a second 2027 title that hasn't been announced.", buzz:"A Freida McFadden book (you've read 5)"},
  {title:"Embers of Chaos", author:"Demi Winters", date:"2027-05-18", cat:"Romantasy", hot:true, series:"The Ashen #4", note:"Book 4 of a series you rated 5 stars. Penguin Random House's page shows May 4, so the day may shift. A fifth Ashen book is also planned.", buzz:"You've read all 4 so far"},
  {title:"Daemonica", author:"Kaylie Smith", date:"2027-09", cat:"Romance", series:"Wicked Games", note:"Date comes from your series tracker. I couldn't re-confirm it."},
  {title:"The End Times: Volume One", author:"Stephen King & Benjamin Percy", date:"2027", cat:"Horror", note:"Their serial novella expanded into a full-length hardcover from Bad Hand Books. Preorders are open and it's expected early 2027, with no exact date yet."},
  {title:"The Beautiful Place", author:"Matt Dinniman", date:"2027", cat:"Science Fiction", hot:true, series:"Dungeon Crawler Carl #9", note:"No date yet. Dinniman said at Comic-Con that it doesn't have one, and 2027 is only an estimate. It may be released as two books."},
  {title:"Crowns of Nyaxia, Book 6", author:"Carissa Broadbent", date:"2027", cat:"Romantasy", series:"Crowns of Nyaxia #6", note:"The final main-series novel. Title and date aren't announced, and 2027 is only a placeholder."},

  /* ---- 2026 award year (Nov 12 2025 to Nov 10 2026): Choice nominees and big releases, with release days ---- */
  {title:"Brimstone", author:"Callie Hart", date:"2025-11-18", cat:"Romantasy", read:true, buzz:"2026 Choice Awards nominee: Romantasy"},
  {title:"We Who Will Die", author:"Stacia Stark", date:"2025-12-30", cat:"Romantasy", buzz:"2026 Choice Awards nominee: Romantasy"},
  {title:"A Vow in Vengeance", author:"Jaclyn Rodriguez", date:"2026-01-13", cat:"Romantasy", buzz:"2026 Choice Awards nominee: Romantasy"},
  {title:"Dear Debbie", author:"Freida McFadden", date:"2026-01-27", cat:"Mystery & Thriller", read:true},
  {title:"One & Only", author:"Maurene Goo", date:"2026-02-03", cat:"Romance", buzz:"2026 Choice Awards nominee: Romance"},
  {title:"This Book Made Me Think of You", author:"Libby Page", date:"2026-02-03", cat:"Romance", buzz:"2026 Choice Awards nominee: Romance"},
  {title:"Half City", author:"Kate Golden", date:"2026-02-17", cat:"Romantasy", buzz:"2026 Choice Awards nominee: Romantasy", note:"US paperback date. UK editions differ."},
  {title:"And Now, Back to You", author:"B.K. Borison", date:"2026-02-24", cat:"Romance", read:true, buzz:"2026 Choice Awards nominee: Romance"},
  {title:"Kin", author:"Tayari Jones", date:"2026-02-24", cat:"Fiction", buzz:"Amazon editors' top pick of 2026 so far"},
  {title:"The Red Winter", author:"Cameron Sullivan", date:"2026-02-24", cat:"Fantasy", buzz:"On Book Riot's best SF/F of 2026 so far"},
  {title:"In Her Own League", author:"Liz Tomforde", date:"2026-03-03", cat:"Romance", buzz:"2026 Choice Awards nominee: Romance"},
  {title:"Star Shipped", author:"Cat Sebastian", date:"2026-03-03", cat:"Romance", buzz:"2026 Choice Awards nominee: Romance", note:"Date is from a single retailer listing."},
  {title:"Love Song", author:"Elle Kennedy", date:"2026-03-17", cat:"Romance", buzz:"2026 Choice Awards nominee: Romance"},
  {title:"The Night We Met", author:"Abby Jimenez", date:"2026-03-24", cat:"Romance", buzz:"2026 Choice Awards nominee: Romance"},
  {title:"Starside", author:"Alex Aster", date:"2026-03-24", cat:"Romantasy", buzz:"2026 Choice Awards nominee: Romantasy"},
  {title:"Game On", author:"Navessa Allen", date:"2026-03-31", cat:"Romance", buzz:"2026 Choice Awards nominee: Romance"},
  {title:"The Keeper", author:"Tana French", date:"2026-03-31", cat:"Mystery & Thriller", buzz:"On best-of-2026-so-far lists"},
  {title:"Into the Blue", author:"Emma Brodie", date:"2026-04-07", cat:"Romance", buzz:"2026 Choice Awards nominee: Romance"},
  {title:"Crown Me Dead", author:"Liv Zander", date:"2026-04-07", cat:"Romantasy", read:true, buzz:"2026 Choice Awards nominee: Romantasy", note:"Sources disagree on the edition date (April 7 is the earliest listing)."},
  {title:"Rites of the Starling", author:"Devney Perry", date:"2026-04-07", cat:"Romantasy", buzz:"2026 Choice Awards nominee: Romantasy"},
  {title:"Yesteryear", author:"Caro Claire Burke", date:"2026-04-07", cat:"Fiction", buzz:"Standout fiction of 2026 so far"},
  {title:"The Book Witch", author:"Meg Shaffer", date:"2026-04-07", cat:"Fantasy", read:true},
  {title:"King of Gluttony", author:"Ana Huang", date:"2026-04-28", cat:"Romance", buzz:"2026 Choice Awards nominee: Romance"},
  {title:"Our Perfect Storm", author:"Carley Fortune", date:"2026-05-05", cat:"Romance", buzz:"2026 Choice Awards nominee: Romance"},
  {title:"Fury Bound", author:"Sable Sorensen", date:"2026-05-05", cat:"Romantasy", buzz:"2026 Choice Awards nominee: Romantasy"},
  {title:"Broken Dove", author:"Dani Francis", date:"2026-05-12", cat:"Romantasy", buzz:"2026 Choice Awards nominee: Romantasy"},
  {title:"Seek the Traitor's Son", author:"Veronica Roth", date:"2026-05-12", cat:"Fantasy", buzz:"Roth's new fantasy series"},
  {title:"Because I Killed Him", author:"Edith Birde", date:"2026-05-13", cat:"Romantasy", buzz:"2026 Choice Awards nominee: Romantasy", note:"Date is from a fan database."},
  {title:"Fever Dream", author:"Elsie Silver", date:"2026-05-19", cat:"Romance", buzz:"2026 Choice Awards nominee: Romance"},
  {title:"Score", author:"Kennedy Ryan", date:"2026-05-19", cat:"Romance", buzz:"2026 Choice Awards nominee: Romance"},
  {title:"The Ballad of Falling Dragons", author:"Sarah A. Parker", date:"2026-05-19", cat:"Romantasy", buzz:"2026 Choice Awards nominee: Romantasy"},
  {title:"Dolly All the Time", author:"Annabel Monaghan", date:"2026-05-26", cat:"Romance", buzz:"2026 Choice Awards nominee: Romance"},
  {title:"Phoebe Berman's Gonna Lose It", author:"Brooke Averick", date:"2026-05-26", cat:"Romance", buzz:"2026 Choice Awards nominee: Romance"},
  {title:"Every Version of You", author:"Natalie Messier", date:"2026-07-07", cat:"Romance", buzz:"2026 Choice Awards nominee: Romance"},
  {title:"Daggermouth", author:"H.M. Wolfe", date:"2026-07-28", cat:"Romantasy", buzz:"2026 Choice Awards nominee: Romantasy", note:"Release date varies by edition (July 28 is the most common listing)."},
  {title:"Embrace", author:"Bal Khabra", date:"2026-08-04", cat:"Romance", buzz:"2026 Choice Awards nominee: Romance"},
  {title:"Lost and Found", author:"Tarah DeWitt", date:"2026-08-04", cat:"Romance", buzz:"2026 Choice Awards nominee: Romance"},
  {title:"Pink Ink", author:"Avina St. Graves", date:"2026-08-04", cat:"Romance", buzz:"2026 Choice Awards nominee: Romance"},
  {title:"The Lion & the Deathless Dark", author:"Carissa Broadbent", date:"2026-08-04", cat:"Romantasy", buzz:"2026 Choice Awards nominee: Romantasy"},
  {title:"The Knave and the Moon", author:"Rachel Gillig", date:"2026-09-01", cat:"Romantasy", buzz:"2026 Choice Awards nominee: Romantasy"},
  {title:"The Washwoman at the River's End", author:"Megan Shade", date:"2026-09-03", cat:"Romantasy", buzz:"2026 Choice Awards nominee: Romantasy"},
  {title:"Burn of the Everflame", author:"Penn Cole", date:"2026-09-08", cat:"Romantasy", buzz:"2026 Choice Awards nominee: Romantasy"},
  {title:"Grim Tidings", author:"B.K. Borison", date:"2026-09-15", cat:"Romantasy", buzz:"2026 Choice Awards nominee: Romantasy"},
  {title:"Dead Beat", author:"Leigh Bardugo", date:"2026-09-15", cat:"Fantasy", buzz:"Final Ninth House book"},
  {title:"Threshing Day", author:"Rebecca Yarros", date:"2026-09-29", cat:"Romantasy", read:true, buzz:"2026 Choice Awards nominee: Romantasy"},
  {title:"Mestra", author:"Madeline Miller", date:"2026-09-29", cat:"Fiction", buzz:"Short story, her first new fiction since Circe"},
  {title:"Bad Words", author:"Rioghnach Robinson", date:"2026-10-06", cat:"Romance", buzz:"2026 Choice Awards nominee: Romance"},
  {title:"Reap & Sow", author:"Charlotte B. Plumb", date:"2026-10-06", cat:"Romantasy", buzz:"2026 Choice Awards nominee: Romantasy"},
  {title:"The Witch", author:"Freida McFadden", date:"2026-10-06", cat:"Mystery & Thriller", buzz:"#1 most-wanted October release on Bookishelf"},
  {title:"Partita", author:"Barbara Kingsolver", date:"2026-10-06", cat:"Fiction", buzz:"Top-3 most-wanted October release on Bookishelf"},
  {title:"Victorious", author:"V.E. Schwab", date:"2026-10-06", cat:"Fantasy", buzz:"Top-10 most-wanted October release on Bookishelf"},
  {title:"The Sixth Faction", author:"Veronica Roth", date:"2026-10-06", cat:"Science Fiction", buzz:"Top-10 most-wanted October release on Bookishelf"},
  {title:"Dive Bar at the End of the Road", author:"Kelley Armstrong", date:"2026-10-06", cat:"Horror", buzz:"Top-10 most-wanted October release on Bookishelf"},
  {title:"Other Worlds Than These", author:"Stephen King & Peter Straub", date:"2026-10-06", cat:"Fantasy", buzz:"The Talisman trilogy finale"},
  {title:"Peck & Peck", author:"Bonnie Garmus", date:"2026-10-13", cat:"Fiction", buzz:"Top-5 most-wanted October release on Bookishelf"},
  {title:"The Thrice-Bound Fool", author:"Christopher Buehlman", date:"2026-10-13", cat:"Fantasy", buzz:"Blacktongue #2"},
  {title:"A Married Little Christmas", author:"Abby Jimenez", date:"2026-10-20", cat:"Romance", buzz:"Top-10 most-wanted October release on Bookishelf"},
  {title:"Christmas Staycation", author:"Meghan Quinn", date:"2026-10-20", cat:"Romance", buzz:"Kringletown Christmas #3"},
  {title:"A Court of Splintered Harmony", author:"Sarah J. Maas", date:"2026-10-27", cat:"Romantasy", read:true, buzz:"2026 Choice Awards nominee: Romantasy"},
  {title:"Warm Bodies", author:"John Marrs", date:"2026-11-01", cat:"Mystery & Thriller", buzz:"Top-5 most-wanted November release on Bookishelf"},
  {title:"Mooncursed", author:"Holly Renee", date:"2026-11-03", cat:"Romantasy", buzz:"The Drowned King #1"},
  {title:"Defy the Dusk", author:"Danielle L. Jensen", date:"2026-11-03", cat:"Fantasy", buzz:"Top-10 most-wanted November release on Bookishelf"},
  {title:"This Wretched Alchemy", author:"Tina Mars", date:"2026-11-10", cat:"Fantasy", buzz:"Ruinous Fate Saga #1. Top-10 most-wanted November release on Bookishelf"},
  {title:"Beneath a Midnight Moon", author:"Catherine Cowles", date:"2026-11-17", cat:"Romance", buzz:"Top-5 most-wanted November release on Bookishelf"},
  {title:"Birth of the Witch", author:"Nora Roberts", date:"2026-11-17", cat:"Fantasy", buzz:"Top-10 most-wanted November release on Bookishelf"},
  {title:"Cursekeeper", author:"Alexandra Christo", date:"2026-11-17", cat:"Fantasy", buzz:"Library of Fallen Souls #1"},
  {title:"Alma Vampires", author:"Elena Armas", date:"2026-11-17", cat:"Romance", buzz:"The Icarus University #1"},
  {title:"Murmuration", author:"T.J. Klune", date:"2026-11-17", cat:"Science Fiction", buzz:"Bookishelf big-name November release"},
  {title:"The Fall of the Crowned King", author:"Amber V. Nicole", date:"2026-11-24", cat:"Romantasy", buzz:"Bookishelf big-name November release"},
];
