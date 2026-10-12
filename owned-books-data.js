/* =========================================================================
   Books Megan actually OWNS, grouped by format. This is separate from
   reading-data.js (which tracks books she's read) — a book can be owned
   without being read yet, or read without being owned (library loans,
   borrowed copies, etc).

   Used by the format filter (Kindle / Audible / Physical / Kindle Unlimited)
   on all-books.html, which also cross-references reading-data.js by title —
   if a book here has also been logged as read there, its rating and note
   show up automatically when you tap it. Nothing to do on this end for that
   to work, just make sure the title matches exactly.

   kindleUnlimited is separate from kindle: kindle means she owns/bought the
   Kindle edition outright, kindleUnlimited means it's currently readable via
   a Kindle Unlimited subscription (can disappear from KU later — just move
   or remove the entry if that happens).

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
    {title:"Crown of Midnight", author:"Sarah J. Maas", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1673566594i/76705490.jpg"},
    {title:"Dear Monica Lewinsky: A Novel", author:"Julia Langbein", cover:"https://covers.openlibrary.org/b/isbn/9780385551502-L.jpg"},
    {title:"Butcher & Blackbird", author:"Brynne Weaver", cover:"https://covers.openlibrary.org/b/isbn/9780349441566-L.jpg"},
    {title:"Actually, Nevermind", author:"Taylor Tomlinson", cover:"actually-nevermind/actually-nevermind-cover.jpg"},
    {title:"Threshing Day", author:"Rebecca Yarros", cover:"threshing-day/threshing-day-cover.jpg"},
  ],
  audible: [
    {title:"And Now, Back to You", author:"B.K. Borison", narrator:"", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1748482477i/217513554.jpg"},
    {title:"The Dungeon Anarchist's Cookbook", author:"Matt Dinniman", narrator:"", cover:"dungeon-crawler-carl/dungeon-anarchists-cookbook-cover.jpg"},
    {title:"The Count of Monte Cristo", author:"Alexandre Dumas", narrator:"", cover:"count-of-monte-cristo/monte-cristo-cover.jpg"},
    {title:"The Assassin's Blade", author:"Sarah J. Maas", narrator:"", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1680869667i/126062562.jpg"},
    {title:"Throne of Glass", author:"Sarah J. Maas", narrator:"", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1673566495i/76703559.jpg"},
    {title:"Crown of Midnight", author:"Sarah J. Maas", narrator:"", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1673566594i/76705490.jpg"},
    {title:"The Butcher's Masquerade", author:"Matt Dinniman", narrator:"", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1734098643i/220772913.jpg"},
    {title:"The Eye of the Bedlam Bride", author:"Matt Dinniman", narrator:"", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1734098749i/220772912.jpg"},
    {title:"This Inevitable Ruin", author:"Matt Dinniman", narrator:"", cover:"https://covers.openlibrary.org/b/isbn/9798217190041-L.jpg"},
    {title:"Butcher & Blackbird", author:"Brynne Weaver", narrator:"", cover:"https://covers.openlibrary.org/b/isbn/9780349441566-L.jpg"},
    {title:"Actually, Nevermind", author:"Taylor Tomlinson", narrator:"Taylor Tomlinson", cover:"actually-nevermind/actually-nevermind-cover.jpg"},
  ],
  physical: [
    {title:"Control Unleashed: Creating a Focused and Confident Dog", spineTitle:"Control Unleashed", author:"Leslie McDevitt", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1349894884i/2101812.jpg"},
    {title:"Onyx Storm", author:"Rebecca Yarros", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1720446381i/209668781.jpg"},
    {title:"Actually, Nevermind", author:"Taylor Tomlinson", cover:"actually-nevermind/actually-nevermind-cover.jpg"},
    {title:"Threshing Day", author:"Rebecca Yarros", cover:"threshing-day/threshing-day-cover.jpg"},
    {title:"Throne of Glass", author:"Sarah J. Maas", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1673566495i/76703559.jpg"},
    {title:"Crown of Midnight", author:"Sarah J. Maas", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1673566594i/76705490.jpg"},
    {title:"Heir of Fire", author:"Sarah J. Maas", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1673566654i/76706470.jpg"},
    {title:"Queen of Shadows", author:"Sarah J. Maas", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1677267561i/123004944.jpg"},
    {title:"Empire of Storms", author:"Sarah J. Maas", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1676979605i/76713323.jpg"},
    {title:"Tower of Dawn", author:"Sarah J. Maas", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1673567264i/76714487.jpg"},
    {title:"Kingdom of Ash", author:"Sarah J. Maas", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1673567331i/76715522.jpg"},
    {title:"A Court of Thorns and Roses", author:"Sarah J. Maas", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1620324329i/50659467.jpg"},
    {title:"A Court of Mist and Fury", author:"Sarah J. Maas", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1620325671i/50659468.jpg"},
    {title:"A Court of Wings and Ruin", author:"Sarah J. Maas", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1585623092i/50659472.jpg"},
    {title:"A Court of Frost and Starlight", author:"Sarah J. Maas", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1585622963i/50659471.jpg"},
    {title:"A Court of Silver Flames", author:"Sarah J. Maas", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1734440950i/53138095.jpg"},
    {title:"House of Earth and Blood", author:"Sarah J. Maas", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1559142847i/44778083.jpg"},
    {title:"House of Sky and Breath", author:"Sarah J. Maas", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1633097753i/40132775.jpg"},
    {title:"House of Flame and Shadow", author:"Sarah J. Maas", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1689809645i/52857700.jpg"},
    {title:"Alice's Adventures in Wonderland & Through the Looking Glass: Lavishly Illustrated with Interactive Elements", spineTitle:"Alice in Wonderland", author:"Lewis Carroll", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1554894039i/43208990.jpg"},
    {title:"The Iliad", author:"Homer", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1328054035i/6301084.jpg"},
    {title:"The Odyssey", author:"Homer", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1711957706i/1381.jpg"},
    {title:"The Song of Achilles", author:"Madeline Miller", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1357177533i/13623848._SX300_.jpg"},
    {title:"Circe", author:"Madeline Miller", cover:"https://covers.openlibrary.org/b/id/8739376-L.jpg"},
    {title:"Bloody Jack: Being an Account of the Curious Adventures of Mary \"Jacky\" Faber, Ship's Boy", spineTitle:"Bloody Jack", author:"L.A. Meyer", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1392868382i/295649.jpg"},
    {title:"BookMail: A Meta Horror Novel", spineTitle:"BookMail", author:"Jason R. Davis", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1746988324i/230237670._SX300_.jpg"},
    {title:"It Ends with Us", author:"Colleen Hoover", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1670795825i/62627512._SX300_.jpg"},
    {title:"It Starts with Us", author:"Colleen Hoover", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1644605295i/60393672.jpg"},
    {title:"Verity", author:"Colleen Hoover", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1778862009i/59218704.jpg"},
    {title:"Funny Story", author:"Emily Henry", cover:"https://covers.openlibrary.org/b/id/14625690-L.jpg"},
    {title:"The Handmaid's Tale", author:"Margaret Atwood", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1488552336i/34454589.jpg"},
    {title:"The Handmaid's Tale: The Graphic Novel", spineTitle:"The Handmaid's Tale (Graphic Novel)", author:"Renee Nault", cover:"https://covers.openlibrary.org/b/id/14339099-L.jpg"},
    {title:"The Testaments", author:"Margaret Atwood", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1549292344i/42975172._SX300_.jpg"},
    {title:"Dungeon Crawler Carl, Vol. 1 (Graphic Novel)", author:"Matt Dinniman", cover:"https://covers.openlibrary.org/b/isbn/9781638493655-L.jpg"},
    {title:"The Assassin's Blade", author:"Sarah J. Maas", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1680869667i/126062562.jpg"},
    {title:"Dungeon Crawler Carl", author:"Matt Dinniman", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1715780755i/211721806.jpg"},
    {title:"Carl's Doomsday Scenario", author:"Matt Dinniman", cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1719949673i/212393364._SY180_.jpg"},
    {title:"Lore Olympus: Volume One", author:"Rachel Smythe", cover:"https://covers.openlibrary.org/b/isbn/9780593160299-L.jpg"},
    {title:"Red Rising", author:"Pierce Brown", cover:"https://covers.openlibrary.org/b/isbn/9780345539786-L.jpg"},
    {title:"Golden Son", author:"Pierce Brown", cover:"https://covers.openlibrary.org/b/id/8454351-L.jpg"},
    {title:"Morning Star", author:"Pierce Brown", cover:"https://covers.openlibrary.org/b/id/8566174-L.jpg"},
    {title:"Iron Gold", author:"Pierce Brown", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1716325988i/33257757.jpg"},
    {title:"Dark Age", author:"Pierce Brown", cover:"https://covers.openlibrary.org/b/id/8748017-L.jpg"},
    {title:"Light Bringer", author:"Pierce Brown", cover:"https://covers.openlibrary.org/b/id/15157697-L.jpg"},
    {title:"A Wrinkle in Time: The Graphic Novel", author:"Madeleine L'Engle", cover:"https://covers.openlibrary.org/b/id/7364130-L.jpg"},
    {title:"Sunrise on the Reaping", author:"Suzanne Collins", cover:"https://covers.openlibrary.org/b/isbn/1546171460-L.jpg"},
    {title:"The Hunger Games", author:"Suzanne Collins", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1586722975i/2767052.jpg"},
    {title:"Scythe", author:"Neal Shusterman", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1456172676i/28954189.jpg"},
    {title:"Ninth House", author:"Leigh Bardugo", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1553102141i/43263680.jpg"},
    {title:"Hellbent", author:"Leigh Bardugo", cover:"https://covers.openlibrary.org/b/id/14357966-L.jpg"},
    {title:"Building a Second Brain: A Proven Method to Organize Your Digital Life and Unlock Your Creative Potential", spineTitle:"Building a Second Brain", author:"Tiago Forte", cover:"covers/building-a-second-brain.jpg"},
    {title:"On Writing: A Memoir of the Craft", spineTitle:"On Writing", author:"Stephen King", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1615596508i/57391296.jpg"},
    {title:"Loud: Accept Nothing Less Than the Life You Deserve", spineTitle:"Loud", author:"Drew Afualo", cover:"covers/loud.jpg"},
    {title:"The Princess Bride", author:"William Goldman", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1327903636i/21787.jpg"},
    {title:"Where the Sidewalk Ends", author:"Shel Silverstein", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1769901144i/30119.jpg"},
    {title:"Project Hail Mary", author:"Andy Weir", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1764703833i/54493401.jpg"},
    {title:"The Magicians", author:"Lev Grossman", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1715695565i/7125342.jpg"},
    {title:"The Magician King", author:"Lev Grossman", cover:"https://m.media-amazon.com/images/I/51uxgRMrw6L.jpg"},
    {title:"The Magician's Land", author:"Lev Grossman", cover:"https://m.media-amazon.com/images/I/51TZvbTMO8L.jpg"},
    {title:"The Last Letter", author:"Rebecca Yarros", cover:"https://covers.openlibrary.org/b/id/10165652-L.jpg"},
    {title:"Katabasis", author:"R.F. Kuang", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1743527525i/210191773.jpg"},
    {title:"Remarkably Bright Creatures", author:"Shelby Van Pelt", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1651600548i/58733693.jpg"},
    {title:"Firefly Lane", author:"Kristin Hannah", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1485338283i/3524297.jpg"},
    {title:"Fly Away", author:"Kristin Hannah", cover:"https://covers.openlibrary.org/b/id/9418741-L.jpg"},
    {title:"Galatea: A Short Story", spineTitle:"Galatea", author:"Madeline Miller", cover:"covers/galatea.jpg"},
    {title:"Fairy Tale", author:"Stephen King", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1647789287i/60177373.jpg"},
    {title:"Tress of the Emerald Sea", author:"Brandon Sanderson", cover:"https://covers.openlibrary.org/b/id/13143232-L.jpg"},
    {title:"Wicked", author:"Gregory Maguire", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1437733293i/37442.jpg"},
    {title:"Fourth Wing", author:"Rebecca Yarros", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1761312598i/61431922.jpg"},
    {title:"Iron Flame", author:"Rebecca Yarros", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1706724269i/90202302.jpg"},
    {title:"Quicksilver", author:"Callie Hart", cover:"https://covers.openlibrary.org/b/id/15227615-L.jpg"},
    {title:"Brimstone", author:"Callie Hart", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1742991443i/222139748.jpg"},
    {title:"The Serpent and the Wings of Night", author:"Carissa Broadbent", cover:"covers/serpent-wings-of-night.jpg"},
    {title:"The Ashes & the Star-Cursed King", author:"Carissa Broadbent", cover:"https://covers.openlibrary.org/b/id/13976045-L.jpg"},
    {title:"Six Scorched Roses", author:"Carissa Broadbent", cover:"https://covers.openlibrary.org/b/id/13764916-L.jpg"},
    {title:"The Songbird & the Heart of Stone", author:"Carissa Broadbent", cover:"covers/songbird-heart-of-stone.jpg"},
    {title:"The Fallen & The Kiss of Dusk", author:"Carissa Broadbent", cover:"https://is1-ssl.mzstatic.com/image/thumb/Publication211/v4/61/ce/bb/61cebbd6-2633-e9f1-48d6-5fe42d373d53/1064406042.jpg/600x600bb.jpg"},
    {title:"The Ballad of Never After", author:"Stephanie Garber", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1684336120i/156916732.jpg"},
    {title:"Once Upon a Broken Heart", author:"Stephanie Garber", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1648626458i/60718856.jpg"},
    {title:"A Curse for True Love", author:"Stephanie Garber", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1684610888i/64785417.jpg"},
    {title:"Caraval", author:"Stephanie Garber", cover:"https://covers.openlibrary.org/b/id/7990753-L.jpg"},
    {title:"Legendary", author:"Stephanie Garber", cover:"covers/legendary.jpg"},
    {title:"Finale", author:"Stephanie Garber", cover:"https://covers.openlibrary.org/b/id/8802288-L.jpg"},
    {title:"The Lion, the Witch and the Wardrobe", author:"C.S. Lewis", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1659993302i/7806720.jpg"},
    {title:"Prince Caspian", author:"C.S. Lewis", cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1308814880i/121749._SY180_.jpg"},
    {title:"The Voyage of the Dawn Treader", author:"C.S. Lewis", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1362934512i/7806771.jpg"},
    {title:"The Silver Chair", author:"C.S. Lewis", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1394151440i/10167395.jpg"},
    {title:"The Horse and His Boy", author:"C.S. Lewis", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1362934706i/7806746.jpg"},
    {title:"The Magician's Nephew", author:"C.S. Lewis", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1426454853i/7806728.jpg"},
    {title:"The Last Battle", author:"C.S. Lewis", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1362934385i/7806788.jpg"},
    {title:"Assistant to the Villain", author:"Hannah Nicole Maehrer", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1702057336i/123257687.jpg"},
    {title:"Powerful", author:"Lauren Roberts", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1731714728i/203840597.jpg"},
    {title:"Fearless", author:"Lauren Roberts", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1730330746i/214151222.jpg"},
    {title:"Reckless", author:"Lauren Roberts", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1731714752i/183086339.jpg"},
    {title:"Powerless", author:"Lauren Roberts", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1672676191i/75513900.jpg"},
    {title:"The Will of the Many", author:"James Islington", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1670363463i/58416952.jpg"},
    {title:"The Strength of the Few", author:"James Islington", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1764516601i/244610613.jpg"},
    {title:"The Crypt of Lost Souls", author:"Molly R. Anderson", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1756517403i/240940458.jpg"},
    {title:"Revenge of The Reaper", author:"Molly R. Anderson", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1784178776i/255499535.jpg"},
    {title:"Erasing History: How Fascists Rewrite the Past to Control the Future", spineTitle:"Erasing History", author:"Jason F. Stanley", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1718819178i/207294076.jpg"},
    {title:"A Christmas Carol Murder", author:"Heather Redmond", cover:"https://is1-ssl.mzstatic.com/image/thumb/Publication125/v4/98/37/c6/9837c627-f9b6-cf77-2c8c-153a8392c146/9781496717207.jpg/600x600bb.jpg"},
    {title:"Haunted World: 101 Ghostly Places and Encounters", spineTitle:"Haunted World", author:"Theresa Cheung", cover:"https://is1-ssl.mzstatic.com/image/thumb/Publication211/v4/40/52/1f/40521fcf-8823-305b-2b3e-101a83723931/9781789295818.jpg/600x600bb.jpg"},
    {title:"Crown Me Yours", author:"Liv Zander", cover:"https://covers.openlibrary.org/b/id/15228557-L.jpg"},
    {title:"Crown Me Dead", author:"Liv Zander", cover:"https://covers.openlibrary.org/b/id/15226806-L.jpg"},
    {title:"The Book Witch", author:"Meg Shaffer", cover:"https://covers.openlibrary.org/b/id/15208007-L.jpg"},
    {title:"Kingdom of Claw", author:"Demi Winters", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1706976049i/207041696.jpg"},
    {title:"The Road of Bones", author:"Demi Winters", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1704736755i/205044632.jpg"},
    {title:"Roots of Darkness", author:"Demi Winters", cover:"https://covers.openlibrary.org/b/id/15151850-L.jpg"},
    {title:"Slaying the Vampire Conqueror", author:"Carissa Broadbent", cover:"https://covers.openlibrary.org/b/id/15163940-L.jpg"},
    {title:"Dark Fae", author:"Caroline Peckham & Susanne Valenti", cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1619705977i/57892054._SY180_.jpg"},
    {title:"Savage Fae", author:"Caroline Peckham & Susanne Valenti", cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1619382623i/57849105._SY180_.jpg"},
    {title:"Vicious Fae", author:"Caroline Peckham & Susanne Valenti", cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1619382736i/57849111._SY180_.jpg"},
    {title:"Broken Fae", author:"Caroline Peckham & Susanne Valenti", cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1619382818i/57849125._SY180_.jpg"},
    {title:"Warrior Fae", author:"Caroline Peckham & Susanne Valenti", cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1619382385i/57849074._SY180_.jpg"},
    {title:"Origins of an Academy Bully", author:"Caroline Peckham & Susanne Valenti", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1677104440i/49646047.jpg"},
    {title:"The Awakening", author:"Caroline Peckham & Susanne Valenti", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1560277389i/46261182.jpg"},
    {title:"Ruthless Fae", author:"Caroline Peckham & Susanne Valenti", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1565943045l/51966347.jpg"},
    {title:"The Reckoning", author:"Caroline Peckham & Susanne Valenti", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1635198815i/59450488.jpg"},
    {title:"Shadow Princess", author:"Caroline Peckham & Susanne Valenti", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1570223430l/53146871.jpg"},
    {title:"Cursed Fates", author:"Caroline Peckham & Susanne Valenti", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1578710951i/50391615.jpg"},
    {title:"The Big A.S.S. Party", author:"Caroline Peckham & Susanne Valenti", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1596452502i/54798561.jpg"},
    {title:"Fated Throne", author:"Caroline Peckham & Susanne Valenti", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1605478159i/53535526.jpg"},
    {title:"The Awakening as Told by the Boys", author:"Caroline Peckham & Susanne Valenti", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1629291604i/58800799.jpg"},
    {title:"Heartless Sky", author:"Caroline Peckham & Susanne Valenti", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1628199263i/56474282.jpg"},
    {title:"Sorrow and Starlight", author:"Caroline Peckham & Susanne Valenti", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1664442356i/59808792.jpg"},
    {title:"Beyond the Veil", author:"Caroline Peckham & Susanne Valenti", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1686777106i/177899172.jpg"},
    {title:"Live and Let Lionel", author:"Caroline Peckham & Susanne Valenti", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1707177040i/207603149.jpg"},
    {title:"Restless Stars", author:"Caroline Peckham & Susanne Valenti", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1711995687i/198954263.jpg"},
  ],
  kindleUnlimited: [
    {title:"Dungeon Crawler Carl", author:"Matt Dinniman", cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1715780755i/211721806.jpg"},
    {title:"Carl's Doomsday Scenario", author:"Matt Dinniman", cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1719949673i/212393364._SY180_.jpg"},
    {title:"The Dungeon Anarchist's Cookbook", author:"Matt Dinniman", cover:"dungeon-crawler-carl/dungeon-anarchists-cookbook-cover.jpg"},
    {title:"The Gate of the Feral Gods", author:"Matt Dinniman"},
    {title:"The Butcher's Masquerade", author:"Matt Dinniman"},
    {title:"The Eye of the Bedlam Bride", author:"Matt Dinniman", cover:"https://covers.openlibrary.org/b/id/15231488-L.jpg"},
    {title:"This Inevitable Ruin", author:"Matt Dinniman"},
    {title:"A Parade of Horribles", author:"Matt Dinniman"},
  ],
};

/* Looks a title up across all owned-format lists. Returns an array of
   format keys ("kindle","audible","physical","kindleUnlimited") the title
   appears in, in that order, or [] if it isn't owned/available in any
   format. Powers the Kindle / Audible / Physical / Kindle Unlimited filter
   pills on all-books.html. */
function findOwnedFormats(title) {
  return ["kindle", "audible", "physical", "kindleUnlimited"].filter(
    fmt => OWNED_BOOKS[fmt].some(b => b.title === title)
  );
}
