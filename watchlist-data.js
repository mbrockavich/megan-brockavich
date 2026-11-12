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
  "Mystery & Thriller", "Historical Fiction", "Fiction", "Young Adult", "Nonfiction",
];

const watchlist = [
  /* ---- closing out the 2026 window (still on this year's ballot) ---- */
  {title:"The Last King of Faerie", author:"Cassandra Clare", date:"2026-11-03", cat:"Young Adult", series:"The Shadowhunter Chronicles", note:"Kit and Ty finally get their quest.", buzz:"Top of Bookish Elf's November reader list"},
  {title:"A Conspiracy of Charming Monsters", author:"Holly Black", date:"2026-11-03", cat:"Young Adult", note:"Back to Elfhame, Cruel Prince adjacent."},
  {title:"Captive Traitor King", author:"Brigid Kemmerer", date:"2026-11-03", cat:"Romantasy"},
  {title:"Dangerous Impulses", author:"Jennifer Lynn Barnes", date:"2026-11-03", cat:"Young Adult", series:"The Naturals", note:"New Naturals thriller."},
  {title:"Sunflower Season", author:"Danica Nava", date:"2026-11-03", cat:"Romance", note:"Screenwriter teams up with a nerdy assistant to write a script."},
  {title:"Hate and Other Acts of Fiction", author:"Megan Oliver", date:"2026-11-10", cat:"Romance", note:"Rival tour guides team up for a murder-mystery event."},

  /* ---- 2027 awards window opens ---- */
  {title:"Peculiar Stars", author:"Rebecca Yarros", date:"2026-11-17", cat:"Romantasy", hot:true, note:"Yarros has won the Romantasy category before (Onyx Storm, 2025).", buzz:"Named a most-anticipated November release"},
  {title:"The Wrath Gods Reap", author:"Abigail Owen", date:"2026-11-17", cat:"Romantasy", note:"Finale of a Greek gods romantasy series."},

  /* ---- January 2027 ---- */
  {title:"Love Interest", author:"Chloe Liese", date:"2027-01-05", cat:"Romance"},
  {title:"A Court of Forgotten Melody", author:"Sarah J. Maas", date:"2027-01-12", cat:"Romantasy", hot:true, series:"Valkyrie Cycle, Movements II & III", note:"Maas is a perennial Choice Awards contender.", buzz:"#1 on Bookishelf's 2027 most-wanted ranking"},
  {title:"The Things You'll Never Know", author:"Ashley Audrain", date:"2027-01", cat:"Fiction", buzz:"#2 on Bookishelf's 2027 most-wanted ranking"},
  {title:"The Stars Look Like Home", author:"TJ Klune", date:"2027-01-12", cat:"Science Fiction", hot:true, buzz:"#3 on Bookishelf's 2027 most-wanted ranking"},
  {title:"In One Brief Moment All Eternity", author:"Elif Shafak", date:"2027-01-12", cat:"Fiction"},
  {title:"The Gentleman Bastard Sequence #4", author:"Scott Lynch", date:"2027-01-13", cat:"Fantasy", note:"Title not yet confirmed in my sources. Long-awaited fourth book."},
  {title:"The Voice of the Wretched", author:"Kester Grant", date:"2027-01-14", cat:"Fantasy"},
  {title:"The Jewel of Sugar Hill", author:"Fiona Davis", date:"2027-01-26", cat:"Historical Fiction", note:"Book club pick list."},
  {title:"Merciful is the Dark", author:"Sophie Clark", date:"2027-01-26", cat:"Young Adult"},

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
];
