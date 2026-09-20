// AUTHOR_WORKS: per-author bibliography data for the Author Tracker page.
// Structure: { "Author Name": { groups: [ { seriesName, status, books: [...] }, ... ], note } }
// Each book: { title, pubYear, number, read, comingSoon, cover }
//
// IMPORTANT: `read` here is only a build-time snapshot used for sanity-checking during
// data generation. It is NOT authoritative and is not used by author-tracker.html at
// runtime -- the page always recomputes read status live via findRead(title) against
// reading-data.js (the `books` and `pastReads` arrays), exactly like the series tracker
// on all-books.html. This keeps everything in sync automatically as new books are read.
//
// `cover` is a best-effort cover image URL: curated covers already used elsewhere on the
// site (reading-data.js) are preferred, falling back to an Open Library cover lookup.
// It can be null when no cover was found (e.g. unreleased or obscure titles) -- the page
// falls back to a text-only chip in that case, same pattern as all-books.html.

const AUTHOR_WORKS = {
  "Andrzej Sapkowski": {
    groups: [
    { seriesName: "The Witcher", status: "ongoing", books: [
      {title:"The Last Wish", pubYear:2007, number:"1", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/7360819-L.jpg"},
      {title:"Sword of Destiny", pubYear:2015, number:"2", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/11102583-L.jpg"},
      {title:"Blood of Elves", pubYear:2008, number:"3", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8457619-L.jpg"},
      {title:"Time of Contempt", pubYear:2013, number:"4", read:false, comingSoon:false, cover:null},
      {title:"Baptism of Fire", pubYear:2014, number:"5", read:false, comingSoon:false, cover:null},
      {title:"The Tower of the Swallow", pubYear:2016, number:"6", read:false, comingSoon:false, cover:null},
      {title:"The Lady of the Lake", pubYear:2017, number:"7", read:false, comingSoon:false, cover:null},
      {title:"Season of Storms", pubYear:2018, number:"8", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8457629-L.jpg"},
      {title:"Crossroads of Ravens", pubYear:2025, number:"9", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15201230-L.jpg"}
    ] },
    { seriesName: "Hussite Trilogy", status: "complete", books: [
      {title:"The Tower of Fools", pubYear:2002, number:"1", read:false, comingSoon:false, cover:null},
      {title:"Warriors of God", pubYear:2004, number:"2", read:false, comingSoon:false, cover:null},
      {title:"Light Perpetual", pubYear:2006, number:"3", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/13028986-L.jpg"}
    ] }
    ],
    note: null
  },
  "B.K. Borison": {
    groups: [
    { seriesName: "Heartstrings", status: "ongoing", books: [
      {title:"First-Time Caller", pubYear:2025, number:"1", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1718283728i/213243908.jpg"},
      {title:"And Now, Back to You", pubYear:2026, number:"2", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1748482477i/217513554.jpg"},
      {title:"Longtime Listener", pubYear:2027, number:"3", read:false, comingSoon:true, cover:null}
    ] },
    { seriesName: "Lovelight", status: "complete", books: [
      {title:"Lovelight Farms", pubYear:2021, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15139523-L.jpg"},
      {title:"In the Weeds", pubYear:2022, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15108145-L.jpg"},
      {title:"Mixed Signals", pubYear:2022, number:"3", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/13916477-L.jpg"},
      {title:"Business Casual", pubYear:2024, number:"4", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15108146-L.jpg"}
    ] },
    { seriesName: "Ghosted", status: "ongoing", books: [
      {title:"Good Spirits", pubYear:2025, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15228165-L.jpg"},
      {title:"Grim Tidings", pubYear:2026, number:"2", read:false, comingSoon:false, cover:null}
    ] }
    ],
    note: null
  },
  "C.S. Lewis": {
    groups: [
    { seriesName: "Chronicles of Narnia", status: "complete", books: [
      {title:"The Magician's Nephew", pubYear:1955, number:"1", read:true, comingSoon:false, cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1308814770i/65605._SY180_.jpg"},
      {title:"The Lion, the Witch and the Wardrobe", pubYear:1950, number:"2", read:true, comingSoon:false, cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1697079942i/132080146._SY180_.jpg"},
      {title:"The Horse and His Boy", pubYear:1954, number:"3", read:true, comingSoon:false, cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1703358949i/84119._SX120_.jpg"},
      {title:"Prince Caspian", pubYear:1951, number:"4", read:true, comingSoon:false, cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1308814880i/121749._SY180_.jpg"},
      {title:"The Voyage of the Dawn Treader", pubYear:1952, number:"5", read:true, comingSoon:false, cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1661032500i/140225._SX120_.jpg"},
      {title:"The Silver Chair", pubYear:1953, number:"6", read:true, comingSoon:false, cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1661032839i/65641._SY180_.jpg"},
      {title:"The Last Battle", pubYear:1956, number:"7", read:true, comingSoon:false, cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1308814830i/84369._SY180_.jpg"}
    ] },
    { seriesName: "The Space Trilogy", status: "complete", books: [
      {title:"Out of the Silent Planet", pubYear:1938, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/9321665-L.jpg"},
      {title:"Perelandra", pubYear:1943, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/9186044-L.jpg"},
      {title:"That Hideous Strength", pubYear:1945, number:"3", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/9184879-L.jpg"}
    ] },
    { seriesName: null, status: null, books: [
      {title:"The Pilgrim's Regress", pubYear:1933, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/6934110-L.jpg"},
      {title:"The Problem of Pain", pubYear:1940, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/6554012-L.jpg"},
      {title:"The Screwtape Letters", pubYear:1942, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/9779-L.jpg"},
      {title:"The Abolition of Man", pubYear:1943, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/6379595-L.jpg"},
      {title:"The Great Divorce", pubYear:1945, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/6984074-L.jpg"},
      {title:"Miracles", pubYear:1947, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/9184514-L.jpg"},
      {title:"Mere Christianity", pubYear:1952, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/6538891-L.jpg"},
      {title:"Surprised by Joy", pubYear:1955, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/9184545-L.jpg"},
      {title:"Till We Have Faces", pubYear:1956, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/9184539-L.jpg"},
      {title:"The Four Loves", pubYear:1960, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/9321672-L.jpg"},
      {title:"A Grief Observed", pubYear:1961, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/9321678-L.jpg"}
    ] }
    ],
    note: "Only Lewis's most notable fiction and Christian/philosophical works are shown; his extensive body of academic literary criticism is omitted."
  },
  "Callie Hart": {
    groups: [
    { seriesName: "Fae & Alchemy", status: "ongoing", books: [
      {title:"Quicksilver", pubYear:2024, number:"1", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15227615-L.jpg"},
      {title:"Brimstone", pubYear:2025, number:"2", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15146289-L.jpg"},
      {title:"Untitled (Fae & Alchemy Book 3)", pubYear:null, number:"3", read:false, comingSoon:true, cover:null}
    ] },
    { seriesName: "Blood & Roses", status: "complete", books: [
      {title:"Deviant", pubYear:2014, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/11520339-L.jpg"},
      {title:"Fracture", pubYear:2014, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/11971774-L.jpg"},
      {title:"Burn", pubYear:2014, number:"3", read:false, comingSoon:false, cover:null},
      {title:"Fallen", pubYear:2014, number:"4", read:false, comingSoon:false, cover:null},
      {title:"Twisted", pubYear:2014, number:"5", read:false, comingSoon:false, cover:null},
      {title:"Collateral", pubYear:2014, number:"6", read:false, comingSoon:false, cover:null}
    ] },
    { seriesName: "Crooked Sinners", status: "complete", books: [
      {title:"Riot House", pubYear:2019, number:"1", read:false, comingSoon:false, cover:null},
      {title:"Riot Rules", pubYear:2020, number:"2", read:false, comingSoon:false, cover:null},
      {title:"Riot Act", pubYear:2021, number:"3", read:false, comingSoon:false, cover:null},
      {title:"Riot Reunion", pubYear:2023, number:"4", read:false, comingSoon:false, cover:null}
    ] },
    { seriesName: null, status: null, books: [
      {title:"Between Here and the Horizon", pubYear:2016, number:null, read:false, comingSoon:false, cover:null},
      {title:"Rook", pubYear:2017, number:null, read:false, comingSoon:false, cover:null},
      {title:"Requiem", pubYear:2022, number:null, read:false, comingSoon:false, cover:null}
    ] }
    ],
    note: "Callie Hart has published 40+ books since 2012; only her ~13 most notable additional works/series beyond Fae & Alchemy are shown here."
  },
  "Carissa Broadbent": {
    groups: [
    { seriesName: "Crowns of Nyaxia", status: "ongoing", books: [
      {title:"The Serpent and the Wings of Night", pubYear:2022, number:"1", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1711665394i/60714999.jpg"},
      {title:"Six Scorched Roses", pubYear:2023, number:"1.5", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/13764916-L.jpg"},
      {title:"The Ashes & the Star-Cursed King", pubYear:2023, number:"2", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/13976045-L.jpg"},
      {title:"Slaying the Vampire Conqueror", pubYear:2023, number:"2.5", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15163940-L.jpg"},
      {title:"The Songbird & the Heart of Stone", pubYear:2024, number:"3", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15148779-L.jpg"},
      {title:"The Fallen & the Kiss of Dusk", pubYear:2025, number:"4", read:true, comingSoon:false, cover:"https://is1-ssl.mzstatic.com/image/thumb/Publication211/v4/61/ce/bb/61cebbd6-2633-e9f1-48d6-5fe42d373d53/1064406042.jpg/600x600bb.jpg"},
      {title:"The Lion & the Deathless Dark", pubYear:2026, number:"5", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15236151-L.jpg"},
      {title:"Crowns of Nyaxia Book 6", pubYear:null, number:"6", read:false, comingSoon:true, cover:null}
    ] },
    { seriesName: "The War of Lost Hearts", status: "complete", books: [
      {title:"Daughter of No Worlds", pubYear:2020, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/10530863-L.jpg"},
      {title:"Children of Fallen Gods", pubYear:2021, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/13239987-L.jpg"},
      {title:"Mother of Death and Dawn", pubYear:2022, number:"3", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/13162694-L.jpg"},
      {title:"Ashen Son", pubYear:2022, number:"0.5", read:false, comingSoon:false, cover:null}
    ] }
    ],
    note: null
  },
  "Caroline Peckham & Susanne Valenti": {
    groups: [
    { seriesName: "Zodiac Academy", status: "ongoing", books: [
      {title:"Origins of an Academy Bully", pubYear:2020, number:"0.5", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1677104440i/49646047.jpg"},
      {title:"The Awakening", pubYear:2019, number:"1", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1560277389i/46261182.jpg"},
      {title:"Ruthless Fae", pubYear:2019, number:"2", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1565943045l/51966347.jpg"},
      {title:"The Reckoning", pubYear:2020, number:"3", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1635198815i/59450488.jpg"},
      {title:"Shadow Princess", pubYear:2020, number:"4", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1570223430l/53146871.jpg"},
      {title:"Cursed Fates", pubYear:2020, number:"5", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1578710951i/50391615.jpg"},
      {title:"The Big A.S.S. Party", pubYear:2020, number:"5.5", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1596452502i/54798561.jpg"},
      {title:"Fated Throne", pubYear:2020, number:"6", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1605478159i/53535526.jpg"},
      {title:"The Awakening as Told by the Boys", pubYear:2021, number:"1.5", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1629291604i/58800799.jpg"},
      {title:"Heartless Sky", pubYear:2021, number:"7", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1628199263i/56474282.jpg"},
      {title:"Sorrow and Starlight", pubYear:2022, number:"8", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1664442356i/59808792.jpg"},
      {title:"Beyond the Veil", pubYear:2023, number:"8.5", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1686777106i/177899172.jpg"},
      {title:"Live and Let Lionel", pubYear:2024, number:null, read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1707177040i/207603149.jpg"},
      {title:"Restless Stars", pubYear:2024, number:"9", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1711995687i/198954263.jpg"},
      {title:"On the Cursed Day of Christmas", pubYear:2026, number:"10", read:false, comingSoon:true, cover:null}
    ] },
    { seriesName: "Ruthless Boys of the Zodiac", status: "complete", books: [
      {title:"Dark Fae", pubYear:2019, number:"1", read:true, comingSoon:false, cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1619705977i/57892054._SY180_.jpg"},
      {title:"Savage Fae", pubYear:2019, number:"2", read:true, comingSoon:false, cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1619382623i/57849105._SY180_.jpg"},
      {title:"Vicious Fae", pubYear:2020, number:"3", read:true, comingSoon:false, cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1619382736i/57849111._SY180_.jpg"},
      {title:"Broken Fae", pubYear:2020, number:"4", read:true, comingSoon:false, cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1619382818i/57849125._SY180_.jpg"},
      {title:"Warrior Fae", pubYear:2021, number:"5", read:true, comingSoon:false, cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1619382385i/57849074._SY180_.jpg"}
    ] },
    { seriesName: "Darkmore Penitentiary", status: "complete", books: [
      {title:"Caged Wolf", pubYear:2020, number:"1", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1680885592i/126128250.jpg"},
      {title:"Alpha Wolf", pubYear:2020, number:"2", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1622992365i/58272634.jpg"},
      {title:"Feral Wolf", pubYear:2021, number:"3", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15130580-L.jpg"},
      {title:"Wild Wolf", pubYear:2024, number:"4", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/I/41kTxqoYBwL.jpg"}
    ] },
    { seriesName: "Age of Vampires", status: "complete", books: [
      {title:"Eternal Reign", pubYear:2019, number:"1", read:false, comingSoon:false, cover:null},
      {title:"Immortal Prince", pubYear:2019, number:"2", read:false, comingSoon:false, cover:null},
      {title:"Infernal Creatures", pubYear:2019, number:"3", read:false, comingSoon:false, cover:null},
      {title:"Wrathful Mortals", pubYear:2019, number:"4", read:false, comingSoon:false, cover:null},
      {title:"Forsaken Relic", pubYear:2019, number:"5", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15130396-L.jpg"},
      {title:"Ravaged Souls", pubYear:2019, number:"6", read:false, comingSoon:false, cover:null},
      {title:"Devious Gods", pubYear:2019, number:"7", read:false, comingSoon:false, cover:null}
    ] },
    { seriesName: "Forbidden Fairytales", status: "complete", books: [
      {title:"Kingdom of Thieves", pubYear:2019, number:"1", read:false, comingSoon:false, cover:null},
      {title:"Kingdom of Wishes", pubYear:2019, number:"2", read:false, comingSoon:false, cover:null},
      {title:"Kingdom of Shadows", pubYear:2019, number:"3", read:false, comingSoon:false, cover:null}
    ] },
    { seriesName: "The Harlequin Crew", status: "complete", books: [
      {title:"Devil's Pass", pubYear:2020, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15133075-L.jpg"},
      {title:"Sinners' Playground", pubYear:2020, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15133079-L.jpg"},
      {title:"Dead Man's Isle", pubYear:2021, number:"3", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15133080-L.jpg"},
      {title:"Carnival Hill", pubYear:2021, number:"4", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/13342045-L.jpg"},
      {title:"Paradise Lagoon", pubYear:2021, number:"5", read:false, comingSoon:false, cover:null},
      {title:"Gallows Bridge", pubYear:2022, number:"6", read:false, comingSoon:false, cover:null}
    ] },
    { seriesName: "A Game of Malice and Greed", status: "complete", books: [
      {title:"A Game of Malice and Greed", pubYear:2023, number:"1", read:false, comingSoon:false, cover:null},
      {title:"A Kingdom of Gods and Ruin", pubYear:2023, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15103714-L.jpg"}
    ] },
    { seriesName: "Sins of the Zodiac", status: "ongoing", books: [
      {title:"Never Keep", pubYear:2024, number:"1", read:false, comingSoon:false, cover:null},
      {title:"Echo Fort", pubYear:2025, number:"2", read:false, comingSoon:false, cover:null},
      {title:"Cinder Vale", pubYear:null, number:"3", read:false, comingSoon:true, cover:"https://covers.openlibrary.org/b/id/15206958-L.jpg"}
    ] }
    ],
    note: "Peckham & Valenti have a very large shared backlist (50+ titles across many series); only their most notable additional series beyond what's already tracked are shown here."
  },
  "Cassandra Clare": {
    groups: [
    { seriesName: "The Mortal Instruments", status: "complete", books: [
      {title:"City of Bones", pubYear:2007, number:"1", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1432730315i/256683.jpg"},
      {title:"City of Ashes", pubYear:2008, number:"2", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/1787130-L.jpg"},
      {title:"City of Glass", pubYear:2009, number:"3", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8200332-L.jpg"},
      {title:"City of Fallen Angels", pubYear:2011, number:"4", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8200331-L.jpg"},
      {title:"City of Lost Souls", pubYear:2012, number:"5", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8200328-L.jpg"},
      {title:"City of Heavenly Fire", pubYear:2014, number:"6", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/7933241-L.jpg"}
    ] },
    { seriesName: "The Infernal Devices", status: "complete", books: [
      {title:"Clockwork Angel", pubYear:2010, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/6582736-L.jpg"},
      {title:"Clockwork Prince", pubYear:2011, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/6934916-L.jpg"},
      {title:"Clockwork Princess", pubYear:2013, number:"3", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/9042989-L.jpg"}
    ] },
    { seriesName: "The Dark Artifices", status: "complete", books: [
      {title:"Lady Midnight", pubYear:2016, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/10503897-L.jpg"},
      {title:"Lord of Shadows", pubYear:2017, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8470222-L.jpg"},
      {title:"Queen of Air and Darkness", pubYear:2018, number:"3", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/10829136-L.jpg"}
    ] },
    { seriesName: "The Last Hours", status: "complete", books: [
      {title:"Chain of Gold", pubYear:2020, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/9290977-L.jpg"},
      {title:"Chain of Iron", pubYear:2021, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/10527972-L.jpg"},
      {title:"Chain of Thorns", pubYear:2023, number:"3", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/13179997-L.jpg"}
    ] },
    { seriesName: "The Eldest Curses", status: "ongoing", books: [
      {title:"The Red Scrolls of Magic", pubYear:2019, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/12354726-L.jpg"},
      {title:"The Lost Book of the White", pubYear:2020, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/10312505-L.jpg"},
      {title:"The Black Volume of the Dead", pubYear:null, number:"3", read:false, comingSoon:true, cover:null}
    ] },
    { seriesName: "Magisterium", status: "complete", books: [
      {title:"The Iron Trial", pubYear:2014, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8476280-L.jpg"},
      {title:"The Copper Gauntlet", pubYear:2015, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/14630809-L.jpg"},
      {title:"The Bronze Key", pubYear:2016, number:"3", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/13162156-L.jpg"},
      {title:"The Silver Mask", pubYear:2017, number:"4", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8572895-L.jpg"},
      {title:"The Golden Tower", pubYear:2018, number:"5", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8811514-L.jpg"}
    ] },
    { seriesName: "The Wicked Powers", status: "ongoing", books: [
      {title:"The Last King of Faerie", pubYear:2026, number:"1", read:false, comingSoon:true, cover:null},
      {title:"The Last Prince of Hell", pubYear:null, number:"2", read:false, comingSoon:true, cover:null},
      {title:"The Last Shadowhunter", pubYear:null, number:"3", read:false, comingSoon:true, cover:null}
    ] }
    ],
    note: "Only Clare's most notable additional Shadowhunter Chronicles series are shown; shorter novella collections and companion codices are omitted."
  },
  "Colleen Hoover": {
    groups: [
    { seriesName: "It Ends with Us", status: "complete", books: [
      {title:"It Ends with Us", pubYear:2016, number:"1", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1670795825i/62627512._SX300_.jpg"},
      {title:"It Starts with Us", pubYear:2022, number:"2", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1644605295i/60393672.jpg"}
    ] },
    { seriesName: null, status: null, books: [
      {title:"Verity", pubYear:2018, number:null, read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/isbn/9781791392796-L.jpg"}
    ] },
    { seriesName: "Slammed", status: "complete", books: [
      {title:"Slammed", pubYear:2012, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/12852065-L.jpg"},
      {title:"Point of Retreat", pubYear:2012, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/7590980-L.jpg"}
    ] },
    { seriesName: "Hopeless", status: "complete", books: [
      {title:"Hopeless", pubYear:2012, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/10549926-L.jpg"},
      {title:"Losing Hope", pubYear:2013, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/9326787-L.jpg"},
      {title:"Finding Cinderella", pubYear:2013, number:"2.5", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8892868-L.jpg"}
    ] },
    { seriesName: "Maybe Someday", status: "complete", books: [
      {title:"Maybe Someday", pubYear:2014, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/9306435-L.jpg"},
      {title:"Maybe Now", pubYear:2018, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/10676343-L.jpg"}
    ] },
    { seriesName: "Never Never", status: "complete", books: [
      {title:"Never Never", pubYear:2015, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/10551706-L.jpg"},
      {title:"Never Never: Part Two", pubYear:2015, number:"2", read:false, comingSoon:false, cover:null},
      {title:"Never Never: Part Three", pubYear:2016, number:"3", read:false, comingSoon:false, cover:null}
    ] },
    { seriesName: null, status: null, books: [
      {title:"Ugly Love", pubYear:2014, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/12856728-L.jpg"},
      {title:"Confess", pubYear:2015, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/14418402-L.jpg"},
      {title:"November 9", pubYear:2015, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/9219001-L.jpg"},
      {title:"Without Merit", pubYear:2017, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/10213439-L.jpg"},
      {title:"All Your Perfects", pubYear:2018, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/10317914-L.jpg"},
      {title:"Regretting You", pubYear:2019, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8581190-L.jpg"},
      {title:"Heart Bones", pubYear:2020, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/13170122-L.jpg"},
      {title:"Reminders of Him", pubYear:2022, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/12504366-L.jpg"}
    ] }
    ],
    note: "Hoover has a large backlist (29+ books); only her ~13 most notable additional standalones and series are shown here."
  },
  "Demi Winters": {
    groups: [
    { seriesName: "The Ashen", status: "ongoing", books: [
      {title:"The Road of Bones", pubYear:2024, number:"1", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1704736755i/205044632.jpg"},
      {title:"Kingdom of Claw", pubYear:2025, number:"2", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1706976049i/207041696.jpg"},
      {title:"Roots of Darkness", pubYear:2025, number:"2.5", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15151850-L.jpg"},
      {title:"Dawn of the North", pubYear:2026, number:"3", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15215659-L.jpg"},
      {title:"Embers of Chaos", pubYear:2027, number:"4", read:false, comingSoon:true, cover:null}
    ] }
    ],
    note: null
  },
  "E.L. James": {
    groups: [
    { seriesName: "Fifty Shades", status: "complete", books: [
      {title:"Fifty Shades of Grey", pubYear:2011, number:"1", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/12648183-L.jpg"},
      {title:"Fifty Shades Darker", pubYear:2011, number:"2", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/14566702-L.jpg"},
      {title:"Fifty Shades Freed", pubYear:2012, number:"3", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/14566669-L.jpg"}
    ] },
    { seriesName: "Fifty Shades as Told by Christian", status: "complete", books: [
      {title:"Grey", pubYear:2015, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/12648183-L.jpg"},
      {title:"Darker", pubYear:2017, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/14566702-L.jpg"},
      {title:"Freed", pubYear:2021, number:"3", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/14566669-L.jpg"}
    ] },
    { seriesName: "Mister & Missus", status: "complete", books: [
      {title:"The Mister", pubYear:2019, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/10192514-L.jpg"},
      {title:"The Missus", pubYear:2023, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/13719068-L.jpg"}
    ] },
    { seriesName: "Land of Ghosts", status: "ongoing", books: [
      {title:"Land of Ghosts", pubYear:2026, number:"1", read:false, comingSoon:true, cover:null},
      {title:"Land of Dreams", pubYear:null, number:"2", read:false, comingSoon:true, cover:null}
    ] }
    ],
    note: null
  },
  "Freida McFadden": {
    groups: [
    { seriesName: "The Housemaid", status: "complete", books: [
      {title:"The Housemaid", pubYear:2022, number:"1", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15105883-L.jpg"},
      {title:"The Housemaid's Secret", pubYear:2023, number:"2", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/13439869-L.jpg"},
      {title:"The Housemaid's Wedding", pubYear:2024, number:"2.5", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/14840898-L.jpg"},
      {title:"The Housemaid Is Watching", pubYear:2024, number:"3", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/14633291-L.jpg"}
    ] },
    { seriesName: null, status: null, books: [
      {title:"One By One", pubYear:2020, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/14603852-L.jpg"},
      {title:"The Locked Door", pubYear:2021, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/13156268-L.jpg"},
      {title:"The Inmate", pubYear:2022, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15125020-L.jpg"},
      {title:"Never Lie", pubYear:2022, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/13198561-L.jpg"},
      {title:"The Coworker", pubYear:2023, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15121479-L.jpg"},
      {title:"The Teacher", pubYear:2024, number:null, read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/14570911-L.jpg"},
      {title:"Death Row", pubYear:2025, number:null, read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15103391-L.jpg"},
      {title:"The Crash", pubYear:2025, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15125037-L.jpg"},
      {title:"Dear Debbie", pubYear:2026, number:null, read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15171146-L.jpg"},
      {title:"The Dinner Party", pubYear:2026, number:null, read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15235011-L.jpg"}
    ] }
    ],
    note: "Freida McFadden has published dozens of standalone psychological thrillers; only her most notable additional titles beyond the Housemaid trilogy are shown here."
  },
  "Gillian Flynn": {
    groups: [
    { seriesName: null, status: null, books: [
      {title:"Sharp Objects", pubYear:2006, number:null, read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1475695315i/18045891._SX300_.jpg"},
      {title:"Dark Places", pubYear:2009, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/5728115-L.jpg"},
      {title:"Gone Girl", pubYear:2012, number:null, read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1554086139i/19288043.jpg"},
      {title:"The Grownup", pubYear:2014, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8961350-L.jpg"}
    ] }
    ],
    note: null
  },
  "H.D. Carlton": {
    groups: [
    { seriesName: "Cat and Mouse", status: "complete", books: [
      {title:"Haunting Adeline", pubYear:2022, number:"1", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/12992962-L.jpg"},
      {title:"Hunting Adeline", pubYear:2021, number:"2", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/14614757-L.jpg"}
    ] },
    { seriesName: "The Zero Saga", status: "complete", books: [
      {title:"Hollow", pubYear:2018, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/13533851-L.jpg"},
      {title:"Untainted", pubYear:2019, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/13269610-L.jpg"}
    ] },
    { seriesName: null, status: null, books: [
      {title:"Shallow River", pubYear:2020, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/13525942-L.jpg"},
      {title:"Satan's Affair", pubYear:2021, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/13208844-L.jpg"},
      {title:"Does It Hurt?", pubYear:2022, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/12860070-L.jpg"},
      {title:"Where's Molly", pubYear:2024, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/14632988-L.jpg"},
      {title:"Phantom", pubYear:2025, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15170466-L.jpg"},
      {title:"My Dreadful Darling", pubYear:2026, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15222815-L.jpg"}
    ] }
    ],
    note: null
  },
  "Homer": {
    groups: [
    { seriesName: null, status: "complete", books: [
      {title:"The Iliad", pubYear:-750, number:null, read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/12621988-L.jpg"},
      {title:"The Odyssey", pubYear:-725, number:null, read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/12474938-L.jpg"}
    ] }
    ],
    note: null
  },
  "J.K. Rowling": {
    groups: [
    { seriesName: "Harry Potter", status: "complete", books: [
      {title:"Harry Potter and the Sorcerer's Stone", pubYear:1997, number:"1", read:true, comingSoon:false, cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1598823299i/42844155._SX120_.jpg"},
      {title:"Harry Potter and the Chamber of Secrets", pubYear:1998, number:"2", read:true, comingSoon:false, cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474169725i/15881._SY180_.jpg"},
      {title:"Harry Potter and the Prisoner of Azkaban", pubYear:1999, number:"3", read:true, comingSoon:false, cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1630547330i/5._SY180_.jpg"},
      {title:"Harry Potter and the Goblet of Fire", pubYear:2000, number:"4", read:true, comingSoon:false, cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1627044952i/58613424._SY180_.jpg"},
      {title:"Harry Potter and the Order of the Phoenix", pubYear:2003, number:"5", read:true, comingSoon:false, cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1627045351i/58613451._SY180_.jpg"},
      {title:"Harry Potter and the Half-Blood Prince", pubYear:2005, number:"6", read:true, comingSoon:false, cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1627043894i/58613345._SY180_.jpg"},
      {title:"Harry Potter and the Deathly Hallows", pubYear:2007, number:"7", read:true, comingSoon:false, cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1627042661i/58613224._SY180_.jpg"},
      {title:"Harry Potter and the Cursed Child: Parts One and Two", pubYear:2016, number:"8", read:true, comingSoon:false, cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1470082995i/29056083._SY180_.jpg"}
    ] },
    { seriesName: "Cormoran Strike (as Robert Galbraith)", status: "ongoing", books: [
      {title:"The Cuckoo's Calling", pubYear:2013, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/7261207-L.jpg"},
      {title:"The Silkworm", pubYear:2014, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/7403180-L.jpg"},
      {title:"Career of Evil", pubYear:2015, number:"3", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/9243446-L.jpg"},
      {title:"Lethal White", pubYear:2018, number:"4", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/9243445-L.jpg"},
      {title:"Troubled Blood", pubYear:2020, number:"5", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/10147317-L.jpg"},
      {title:"The Ink Black Heart", pubYear:2022, number:"6", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/12900629-L.jpg"},
      {title:"The Running Grave", pubYear:2023, number:"7", read:false, comingSoon:false, cover:null},
      {title:"The Hallmarked Man", pubYear:2025, number:"8", read:false, comingSoon:false, cover:null}
    ] },
    { seriesName: null, status: null, books: [
      {title:"The Casual Vacancy", pubYear:2012, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/9326674-L.jpg"},
      {title:"Fantastic Beasts and Where to Find Them: The Original Screenplay", pubYear:2016, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/7884242-L.jpg"},
      {title:"Fantastic Beasts: The Crimes of Grindelwald - The Original Screenplay", pubYear:2018, number:null, read:false, comingSoon:false, cover:null},
      {title:"The Ickabog", pubYear:2020, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/10328306-L.jpg"},
      {title:"The Christmas Pig", pubYear:2021, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/12458195-L.jpg"},
      {title:"Fantastic Beasts: The Secrets of Dumbledore - The Complete Screenplay", pubYear:2022, number:null, read:false, comingSoon:false, cover:null}
    ] }
    ],
    note: "J.K. Rowling has written many more books under her own name and as Robert Galbraith; only her most notable additional works, including the full Cormoran Strike series, are shown here."
  },
  "Jack London": {
    groups: [
    { seriesName: null, status: null, books: [
      {title:"The Call of the Wild", pubYear:1903, number:null, read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/12393037-L.jpg"},
      {title:"The Sea-Wolf", pubYear:1904, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8236975-L.jpg"},
      {title:"White Fang", pubYear:1906, number:null, read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8236920-L.jpg"},
      {title:"The Iron Heel", pubYear:1908, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8243314-L.jpg"},
      {title:"Martin Eden", pubYear:1909, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/9223765-L.jpg"},
      {title:"The Star Rover", pubYear:1915, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/9383214-L.jpg"}
    ] }
    ],
    note: null
  },
  "James Dashner": {
    groups: [
    { seriesName: "The Maze Runner", status: "complete", books: [
      {title:"The Maze Runner", pubYear:2009, number:"1", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1375596592i/6186357.jpg"},
      {title:"The Scorch Trials", pubYear:2010, number:"2", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1388240248i/7631105.jpg"},
      {title:"The Death Cure", pubYear:2011, number:"3", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1303997647i/7864437.jpg"},
      {title:"The Kill Order", pubYear:2012, number:"4", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1330636153i/13089710.jpg"},
      {title:"The Fever Code", pubYear:2016, number:"5", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1449687382i/23267628.jpg"}
    ] },
    { seriesName: "The Maze Cutter", status: "complete", books: [
      {title:"The Maze Cutter", pubYear:2022, number:"1", read:false, comingSoon:false, cover:null},
      {title:"The Godhead Complex", pubYear:2023, number:"2", read:false, comingSoon:false, cover:null},
      {title:"The Infinite Glade", pubYear:2025, number:"3", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15124160-L.jpg"}
    ] },
    { seriesName: "The 13th Reality", status: "complete", books: [
      {title:"The Journal of Curious Letters", pubYear:2008, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/2951121-L.jpg"},
      {title:"The Hunt for Dark Infinity", pubYear:2009, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8109360-L.jpg"},
      {title:"The Blade of Shattered Hope", pubYear:2010, number:"3", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8348955-L.jpg"},
      {title:"The Void of Mist and Thunder", pubYear:2011, number:"4", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8348956-L.jpg"}
    ] },
    { seriesName: "The Mortality Doctrine", status: "complete", books: [
      {title:"The Eye of Minds", pubYear:2013, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8111904-L.jpg"},
      {title:"The Rule of Thoughts", pubYear:2014, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/10291508-L.jpg"},
      {title:"The Game of Lives", pubYear:2015, number:"3", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/14409140-L.jpg"}
    ] },
    { seriesName: "Jimmy Fincher Saga", status: "complete", books: [
      {title:"A Door in the Woods", pubYear:2003, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/774161-L.jpg"},
      {title:"A Gift of Ice", pubYear:2004, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/774178-L.jpg"},
      {title:"The Tower of Air", pubYear:2004, number:"3", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/774186-L.jpg"}
    ] }
    ],
    note: null
  },
  "James Islington": {
    groups: [
    { seriesName: "Hierarchy", status: "ongoing", books: [
      {title:"The Will of the Many", pubYear:2023, number:"1", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15149934-L.jpg"},
      {title:"The Strength of the Few", pubYear:2025, number:"2", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15150800-L.jpg"},
      {title:"The Justice of One", pubYear:null, number:"3", read:false, comingSoon:true, cover:null}
    ] },
    { seriesName: "The Licanius Trilogy", status: "complete", books: [
      {title:"The Shadow of What Was Lost", pubYear:2014, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8471205-L.jpg"},
      {title:"An Echo of Things to Come", pubYear:2017, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/9256414-L.jpg"},
      {title:"The Light of All That Falls", pubYear:2019, number:"3", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/9248546-L.jpg"}
    ] }
    ],
    note: null
  },
  "Jenny Han": {
    groups: [
    { seriesName: "Summer", status: "complete", books: [
      {title:"The Summer I Turned Pretty", pubYear:2009, number:"1", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1496784224i/35380161.jpg"},
      {title:"It's Not Summer Without You", pubYear:2010, number:"2", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1651389070i/60911707._SX300_.jpg"},
      {title:"We'll Always Have Summer", pubYear:2011, number:"3", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1646142377i/60530511._SX300_.jpg"}
    ] },
    { seriesName: "To All the Boys I've Loved Before", status: "complete", books: [
      {title:"To All the Boys I've Loved Before", pubYear:2014, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/7370711-L.jpg"},
      {title:"P.S. I Still Love You", pubYear:2015, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/7434792-L.jpg"},
      {title:"Always and Forever, Lara Jean", pubYear:2017, number:"3", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8863058-L.jpg"}
    ] },
    { seriesName: "Burn for Burn", status: "complete", books: [
      {title:"Burn for Burn", pubYear:2012, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8783503-L.jpg"},
      {title:"Fire with Fire", pubYear:2013, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/12658272-L.jpg"},
      {title:"Ashes to Ashes", pubYear:2014, number:"3", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/10730841-L.jpg"}
    ] },
    { seriesName: null, status: null, books: [
      {title:"Shug", pubYear:2006, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/760966-L.jpg"},
      {title:"Clara Lee and the Apple Pie Dream", pubYear:2011, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8783501-L.jpg"}
    ] }
    ],
    note: null
  },
  "John Green": {
    groups: [
    { seriesName: null, status: null, books: [
      {title:"Looking for Alaska", pubYear:2005, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/12614602-L.jpg"},
      {title:"An Abundance of Katherines", pubYear:2006, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/14559681-L.jpg"},
      {title:"Paper Towns", pubYear:2008, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/5731773-L.jpg"},
      {title:"Will Grayson, Will Grayson", pubYear:2010, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/12358776-L.jpg"},
      {title:"The Fault in Our Stars", pubYear:2012, number:null, read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/7418786-L.jpg"},
      {title:"Turtles All the Way Down", pubYear:2017, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8283871-L.jpg"},
      {title:"The Anthropocene Reviewed", pubYear:2021, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/11426520-L.jpg"},
      {title:"Everything Is Tuberculosis: The History and Persistence of Our Deadliest Infection", pubYear:2025, number:null, read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/14853332-L.jpg"}
    ] }
    ],
    note: null
  },
  "Kate Stewart": {
    groups: [
    { seriesName: "The Ravenhood", status: "complete", books: [
      {title:"Flock", pubYear:2020, number:"1", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/I/41yC9PdU0gL.jpg"},
      {title:"Exodus", pubYear:2020, number:"2", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/I/41XHkcLHMEL.jpg"},
      {title:"The Finish Line", pubYear:2021, number:"3", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1610549876i/56182388.jpg"}
    ] },
    { seriesName: "The Ravenhood Continues", status: "ongoing", books: [
      {title:"One Last Rainy Day", pubYear:2023, number:"4", read:false, comingSoon:false, cover:null},
      {title:"Birds of a Feather", pubYear:2025, number:"5", read:false, comingSoon:false, cover:null}
    ] },
    { seriesName: "Underdogs", status: "complete", books: [
      {title:"The Guy on the Right", pubYear:2019, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/10107816-L.jpg"},
      {title:"The Guy on the Left", pubYear:2019, number:"2", read:false, comingSoon:false, cover:null},
      {title:"The Guy in the Middle", pubYear:2020, number:"3", read:false, comingSoon:false, cover:null}
    ] },
    { seriesName: null, status: null, books: [
      {title:"Never Me", pubYear:2014, number:null, read:false, comingSoon:false, cover:null},
      {title:"Loving the White Liar", pubYear:2015, number:null, read:false, comingSoon:false, cover:null},
      {title:"The Brave Line", pubYear:2017, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/10835585-L.jpg"},
      {title:"The Real", pubYear:2018, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/10518329-L.jpg"},
      {title:"Someone Else's Ocean", pubYear:2018, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/11762144-L.jpg"},
      {title:"Heartbreak Warfare", pubYear:2018, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/10541438-L.jpg"},
      {title:"Method", pubYear:2019, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/10538693-L.jpg"},
      {title:"The Plight Before Christmas", pubYear:2021, number:null, read:false, comingSoon:false, cover:null},
      {title:"Euro Dreams", pubYear:2024, number:null, read:false, comingSoon:false, cover:null}
    ] }
    ],
    note: null
  },
  "Kaylie Smith": {
    groups: [
    { seriesName: "Wicked Games", status: "ongoing", books: [
      {title:"Phantasma", pubYear:2024, number:"1", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/14842920-L.jpg"},
      {title:"Enchantra", pubYear:2025, number:"2", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15115281-L.jpg"}
    ] },
    { seriesName: "Witch's Dice", status: "complete", books: [
      {title:"A Ruinous Fate", pubYear:2023, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/13258447-L.jpg"},
      {title:"A Reckless Oath", pubYear:2024, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15123628-L.jpg"},
      {title:"A Raging Heart", pubYear:2025, number:"3", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15123619-L.jpg"}
    ] }
    ],
    note: null
  },
  "Kristin Hannah": {
    groups: [
    { seriesName: "Firefly Lane", status: "complete", books: [
      {title:"Firefly Lane", pubYear:2008, number:"1", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1485338283i/3524297.jpg"},
      {title:"Fly Away", pubYear:2013, number:"2", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/9418741-L.jpg"}
    ] },
    { seriesName: null, status: null, books: [
      {title:"On Mystic Lake", pubYear:1999, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/211486-L.jpg"},
      {title:"Angel Falls", pubYear:2000, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/4525551-L.jpg"},
      {title:"Summer Island", pubYear:2001, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/10118272-L.jpg"},
      {title:"Distant Shores", pubYear:2002, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/210516-L.jpg"},
      {title:"Between Sisters", pubYear:2003, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/227202-L.jpg"},
      {title:"Comfort & Joy", pubYear:2005, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/877943-L.jpg"},
      {title:"Magic Hour", pubYear:2006, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/4262423-L.jpg"},
      {title:"True Colors", pubYear:2009, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/6308421-L.jpg"},
      {title:"Winter Garden", pubYear:2010, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/6676454-L.jpg"},
      {title:"Night Road", pubYear:2011, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/6680499-L.jpg"},
      {title:"Home Front", pubYear:2012, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/7070070-L.jpg"},
      {title:"The Nightingale", pubYear:2015, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8314147-L.jpg"},
      {title:"The Great Alone", pubYear:2018, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8315368-L.jpg"},
      {title:"The Four Winds", pubYear:2021, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/10675593-L.jpg"},
      {title:"The Women", pubYear:2024, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/14631595-L.jpg"}
    ] }
    ],
    note: "Kristin Hannah has published 20+ standalone novels; only her 15 most notable/best-known standalones are shown here in addition to the tracked Firefly Lane series."
  },
  "L.A. Meyer": {
    groups: [
    { seriesName: "Bloody Jack", status: "ongoing", books: [
      {title:"Bloody Jack: Being an Account of the Curious Adventures of Mary \"Jacky\" Faber, Ship's Boy", pubYear:2002, number:"1", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1328336242i/8488973.jpg"},
      {title:"Curse of the Blue Tattoo: Being an Account of the Misadventures of Jacky Faber, Midshipman and Fine Lady", pubYear:2004, number:"2", read:true, comingSoon:false, cover:"https://is1-ssl.mzstatic.com/image/thumb/Publication116/v4/1d/8f/52/1d8f526d-2825-dfc7-93ae-5de20a7eb176/9780547415871.jpg/600x600bb.jpg"},
      {title:"Under the Jolly Roger: Being an Account of the Further Nautical Adventures of Jacky Faber", pubYear:2005, number:"3", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1427211277i/295651.jpg"},
      {title:"In the Belly of the Bloodhound", pubYear:2006, number:"4", read:false, comingSoon:false, cover:null},
      {title:"Mississippi Jack", pubYear:2007, number:"5", read:false, comingSoon:false, cover:null},
      {title:"My Bonny Light Horseman", pubYear:2008, number:"6", read:false, comingSoon:false, cover:null},
      {title:"Rapture of the Deep", pubYear:2009, number:"7", read:false, comingSoon:false, cover:null},
      {title:"The Wake of the Lorelei Lee", pubYear:2010, number:"8", read:false, comingSoon:false, cover:null},
      {title:"The Mark of the Golden Dragon", pubYear:2011, number:"9", read:false, comingSoon:false, cover:null},
      {title:"Viva Jacquelina!", pubYear:2012, number:"10", read:false, comingSoon:false, cover:null},
      {title:"Boston Jacky", pubYear:2013, number:"11", read:false, comingSoon:false, cover:null},
      {title:"Wild Rover No More", pubYear:2014, number:"12", read:false, comingSoon:false, cover:null}
    ] }
    ],
    note: null
  },
  "Lauren Roberts": {
    groups: [
    { seriesName: "The Powerless Trilogy", status: "ongoing", books: [
      {title:"Powerless", pubYear:2023, number:"1", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1672676191i/75513900.jpg"},
      {title:"Powerful", pubYear:2024, number:"1.5", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1731714728i/203840597.jpg"},
      {title:"Reckless", pubYear:2024, number:"2", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1731714752i/183086339.jpg"},
      {title:"Fearless", pubYear:2025, number:"3", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1730330746i/214151222.jpg"},
      {title:"Fearful", pubYear:2025, number:"3.5", read:false, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1749656949i/220161171.jpg"}
    ] }
    ],
    note: null
  },
  "Leigh Bardugo": {
    groups: [
    { seriesName: "Ninth House", status: "ongoing", books: [
      {title:"Ninth House", pubYear:2019, number:"1", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/12667414-L.jpg"},
      {title:"Hell Bent", pubYear:2023, number:"2", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/14357966-L.jpg"}
    ] },
    { seriesName: "Shadow and Bone Trilogy", status: "complete", books: [
      {title:"Shadow and Bone", pubYear:2012, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/13816048-L.jpg"},
      {title:"Siege and Storm", pubYear:2013, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/10297781-L.jpg"},
      {title:"Ruin and Rising", pubYear:2014, number:"3", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/12667421-L.jpg"}
    ] },
    { seriesName: "Six of Crows Duology", status: "complete", books: [
      {title:"Six of Crows", pubYear:2015, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/12667417-L.jpg"},
      {title:"Crooked Kingdom", pubYear:2016, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/12667428-L.jpg"}
    ] },
    { seriesName: "King of Scars Duology", status: "complete", books: [
      {title:"King of Scars", pubYear:2019, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/12714913-L.jpg"},
      {title:"Rule of Wolves", pubYear:2021, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/10394566-L.jpg"}
    ] },
    { seriesName: null, status: null, books: [
      {title:"Wonder Woman: Warbringer", pubYear:2017, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/12667422-L.jpg"},
      {title:"The Language of Thorns", pubYear:2017, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/12706696-L.jpg"},
      {title:"The Familiar", pubYear:2024, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/14605764-L.jpg"}
    ] }
    ],
    note: "Only Bardugo's most notable Grishaverse trilogies/duologies plus a few standalones are shown; her full backlist of novellas and short fiction is not exhaustively listed."
  },
  "Lev Grossman": {
    groups: [
    { seriesName: "The Magicians Trilogy", status: "complete", books: [
      {title:"The Magicians", pubYear:2009, number:"1", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1715695565i/7125342.jpg"},
      {title:"The Magician King", pubYear:2011, number:"2", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/I/51uxgRMrw6L.jpg"},
      {title:"The Magician's Land", pubYear:2014, number:"3", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/I/51TZvbTMO8L.jpg"}
    ] },
    { seriesName: null, status: null, books: [
      {title:"Warp", pubYear:1997, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/2368421-L.jpg"},
      {title:"Codex", pubYear:2004, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/6799230-L.jpg"},
      {title:"The Bright Sword", pubYear:2024, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/14657934-L.jpg"}
    ] }
    ],
    note: null
  },
  "Liv Zander": {
    groups: [
    { seriesName: "Heartstring Duet", status: "complete", books: [
      {title:"Crown Me Dead", pubYear:2025, number:"1", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15226806-L.jpg"},
      {title:"Crown Me Yours", pubYear:2026, number:"2", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15228557-L.jpg"}
    ] }
    ],
    note: null
  },
  "Lucinda Berry": {
    groups: [
    { seriesName: "The Perfect Child Series (Hannah & Christopher Bauer)", status: "ongoing", books: [
      {title:"The Perfect Child", pubYear:2019, number:"1", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8807977-L.jpg"},
      {title:"A Welcome Reunion", pubYear:2023, number:"2", read:true, comingSoon:false, cover:null}
    ] },
    { seriesName: "When It All Falls Apart", status: "complete", books: [
      {title:"When It All Falls Apart: Book One", pubYear:2015, number:"1", read:false, comingSoon:false, cover:null},
      {title:"When It All Falls Apart: Book Two", pubYear:2015, number:"2", read:false, comingSoon:false, cover:null}
    ] },
    { seriesName: null, status: null, books: [
      {title:"Missing Parts", pubYear:2016, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/14063437-L.jpg"},
      {title:"Phantom Limb", pubYear:2016, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/11500308-L.jpg"},
      {title:"Appetite for Innocence", pubYear:2017, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/13117978-L.jpg"},
      {title:"Saving Noah", pubYear:2017, number:null, read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/11993833-L.jpg"},
      {title:"When She Returned", pubYear:2019, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/9129916-L.jpg"},
      {title:"The Best of Friends", pubYear:2020, number:null, read:false, comingSoon:false, cover:null},
      {title:"The Secrets of Us", pubYear:2021, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/10868549-L.jpg"},
      {title:"Under Her Care", pubYear:2022, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/13828377-L.jpg"},
      {title:"Off the Deep End", pubYear:2023, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/13121233-L.jpg"},
      {title:"Keep Your Friends Close", pubYear:2023, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/14808906-L.jpg"},
      {title:"If You Tell a Lie", pubYear:2024, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/14813481-L.jpg"},
      {title:"One in Four", pubYear:2025, number:null, read:false, comingSoon:false, cover:null},
      {title:"Her First Lie", pubYear:2026, number:null, read:false, comingSoon:false, cover:null}
    ] }
    ],
    note: null
  },
  "Madeleine L'Engle": {
    groups: [
    { seriesName: "Time Quintet", status: "complete", books: [
      {title:"A Wrinkle in Time", pubYear:1962, number:"1", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8709146-L.jpg"},
      {title:"A Wind in the Door", pubYear:1973, number:"2", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8276481-L.jpg"},
      {title:"A Swiftly Tilting Planet", pubYear:1978, number:"3", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8223424-L.jpg"},
      {title:"Many Waters", pubYear:1986, number:"4", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/6536498-L.jpg"},
      {title:"An Acceptable Time", pubYear:1989, number:"5", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8285726-L.jpg"}
    ] },
    { seriesName: "Time Quintet (Graphic Novel Adaptation)", status: null, books: [
      {title:"A Wrinkle in Time: The Graphic Novel", pubYear:2012, number:null, read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/7364130-L.jpg"}
    ] },
    { seriesName: "Austin Family Chronicles", status: "complete", books: [
      {title:"Meet the Austins", pubYear:1960, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15230312-L.jpg"},
      {title:"The Moon by Night", pubYear:1963, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/283451-L.jpg"},
      {title:"The Young Unicorns", pubYear:1968, number:"3", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/283483-L.jpg"},
      {title:"A Ring of Endless Light", pubYear:1980, number:"4", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/224078-L.jpg"},
      {title:"Troubling a Star", pubYear:1994, number:"5", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/224185-L.jpg"}
    ] },
    { seriesName: "O'Keefe Family", status: "complete", books: [
      {title:"The Arm of the Starfish", pubYear:1965, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/6793472-L.jpg"},
      {title:"Dragons in the Waters", pubYear:1976, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/1529944-L.jpg"},
      {title:"A House Like a Lotus", pubYear:1984, number:"3", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/223891-L.jpg"}
    ] },
    { seriesName: "Katherine Forrester Vigneras", status: "complete", books: [
      {title:"The Small Rain", pubYear:1945, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/224705-L.jpg"},
      {title:"A Severed Wasp", pubYear:1982, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/224683-L.jpg"}
    ] },
    { seriesName: "Camilla", status: "complete", books: [
      {title:"Camilla", pubYear:1965, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/6297106-L.jpg"},
      {title:"A Live Coal in the Sea", pubYear:1996, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/223158-L.jpg"}
    ] }
    ],
    note: "Only L'Engle's most notable additional series/works beyond the Time Quintet are shown; her full backlist (including the Crosswicks Journals memoirs and other titles) is larger."
  },
  "Madeline Miller": {
    groups: [
    { seriesName: null, status: null, books: [
      {title:"The Song of Achilles", pubYear:2011, number:null, read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1357177533i/13623848._SX300_.jpg"},
      {title:"Galatea: A Short Story", pubYear:2013, number:null, read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/12871689-L.jpg"},
      {title:"Circe", pubYear:2018, number:null, read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8739376-L.jpg"}
    ] }
    ],
    note: null
  },
  "Margaret Atwood": {
    groups: [
    { seriesName: "The Handmaid's Tale", status: "complete", books: [
      {title:"The Handmaid's Tale", pubYear:1985, number:"1", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1488552336i/34454589.jpg"},
      {title:"The Testaments", pubYear:2019, number:"2", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1549292344i/42975172._SX300_.jpg"}
    ] },
    { seriesName: "MaddAddam Trilogy", status: "complete", books: [
      {title:"Oryx and Crake", pubYear:2003, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/12507658-L.jpg"},
      {title:"The Year of the Flood", pubYear:2009, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/12816870-L.jpg"},
      {title:"MaddAddam", pubYear:2013, number:"3", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/9164869-L.jpg"}
    ] },
    { seriesName: null, status: null, books: [
      {title:"Surfacing", pubYear:1972, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/10195804-L.jpg"},
      {title:"Cat's Eye", pubYear:1988, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/12506526-L.jpg"},
      {title:"Alias Grace", pubYear:1996, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/6642671-L.jpg"},
      {title:"The Blind Assassin", pubYear:2000, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/11041760-L.jpg"}
    ] }
    ],
    note: "Margaret Atwood has published dozens of novels across a decades-long career; only her most iconic additional works beyond The Handmaid's Tale series are included here as a capped notable-additions list, not her complete bibliography."
  },
  "Matt Dinniman": {
    groups: [
    { seriesName: "Dungeon Crawler Carl (Graphic Novel)", status: "ongoing", books: [
      {title:"Dungeon Crawler Carl, Vol. 1 (Graphic Novel)", pubYear:2026, number:"1", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/isbn/9781638493655-L.jpg"}
    ] },
    { seriesName: "Dungeon Crawler Carl", status: "complete", books: [
      {title:"Dungeon Crawler Carl", pubYear:2020, number:"1", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1715780755i/211721806.jpg"},
      {title:"Carl's Doomsday Scenario", pubYear:2021, number:"2", read:true, comingSoon:false, cover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1719949673i/212393364._SY180_.jpg"},
      {title:"The Dungeon Anarchist's Cookbook", pubYear:2021, number:"3", read:true, comingSoon:false, cover:"dungeon-crawler-carl/dungeon-anarchists-cookbook-cover.jpg"},
      {title:"The Gate of the Feral Gods", pubYear:2021, number:"4", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/isbn/9780593955970-L.jpg"},
      {title:"The Butcher's Masquerade", pubYear:2022, number:"5", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15231958-L.jpg"},
      {title:"The Eye of the Bedlam Bride", pubYear:2023, number:"6", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15231488-L.jpg"},
      {title:"This Inevitable Ruin", pubYear:2024, number:"7", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15142977-L.jpg"},
      {title:"A Parade of Horribles", pubYear:2026, number:"8", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15221497-L.jpg"},
      {title:"The Beautiful Place", pubYear:null, number:"9", read:false, comingSoon:true, cover:null},
      {title:"Dungeon Crawler Carl, Book 10", pubYear:null, number:"10", read:false, comingSoon:true, cover:null}
    ] },
    { seriesName: "The Shivered Sky Trilogy", status: "complete", books: [
      {title:"Every Grain of Sand", pubYear:2003, number:"1", read:false, comingSoon:false, cover:null},
      {title:"In the City of Demons", pubYear:2003, number:"2", read:false, comingSoon:false, cover:null},
      {title:"The Great Devouring Darkness", pubYear:2003, number:"3", read:false, comingSoon:false, cover:null}
    ] },
    { seriesName: "A Dominion of Blades", status: "ongoing", books: [
      {title:"Dominion of Blades", pubYear:2017, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8567350-L.jpg"},
      {title:"The Hobgoblin Riot", pubYear:2018, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/10516443-L.jpg"}
    ] },
    { seriesName: null, status: null, books: [
      {title:"Trailer Park Fairy Tales", pubYear:2005, number:null, read:false, comingSoon:false, cover:null},
      {title:"The Grinding", pubYear:2013, number:null, read:false, comingSoon:false, cover:null},
      {title:"Kaiju: Battlefield Surgeon", pubYear:2019, number:null, read:false, comingSoon:false, cover:null},
      {title:"Operation Bounce House", pubYear:2026, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15154427-L.jpg"}
    ] }
    ],
    note: null
  },
  "Molly R. Anderson": {
    groups: [
    { seriesName: "The Crypt Series", status: "ongoing", books: [
      {title:"The Crypt of Lost Souls", pubYear:2025, number:"1", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1756517403i/240940458.jpg"},
      {title:"Revenge of The Reaper", pubYear:2026, number:"2", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1784178776i/255499535.jpg"}
    ] }
    ],
    note: null
  },
  "Nora Roberts": {
    groups: [
    { seriesName: "Chronicles of The One", status: "complete", books: [
      {title:"Year One", pubYear:2017, number:"1", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8841058-L.jpg"},
      {title:"Of Blood and Bone", pubYear:2018, number:"2", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8758039-L.jpg"},
      {title:"The Rise of Magicks", pubYear:2019, number:"3", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/9154264-L.jpg"}
    ] },
    { seriesName: "Born In Trilogy", status: "complete", books: [
      {title:"Born in Fire", pubYear:1994, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/3197486-L.jpg"},
      {title:"Born in Ice", pubYear:1995, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/6975928-L.jpg"},
      {title:"Born in Shame", pubYear:1996, number:"3", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/318858-L.jpg"}
    ] },
    { seriesName: "Dream Trilogy", status: "complete", books: [
      {title:"Daring to Dream", pubYear:1996, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/319546-L.jpg"},
      {title:"Holding the Dream", pubYear:1997, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/318893-L.jpg"},
      {title:"Finding the Dream", pubYear:1997, number:"3", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/319545-L.jpg"}
    ] },
    { seriesName: "Key Trilogy", status: "complete", books: [
      {title:"Key of Light", pubYear:2003, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/1397023-L.jpg"},
      {title:"Key of Knowledge", pubYear:2003, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/4310868-L.jpg"},
      {title:"Key of Valor", pubYear:2004, number:"3", read:false, comingSoon:false, cover:null}
    ] },
    { seriesName: "Sign of Seven Trilogy", status: "complete", books: [
      {title:"Blood Brothers", pubYear:2007, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/7246357-L.jpg"},
      {title:"The Hollow", pubYear:2008, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/6375236-L.jpg"},
      {title:"The Pagan Stone", pubYear:2008, number:"3", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/6980541-L.jpg"}
    ] },
    { seriesName: "Bride Quartet", status: "complete", books: [
      {title:"Vision in White", pubYear:2009, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/6028240-L.jpg"},
      {title:"Bed of Roses", pubYear:2009, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/6623418-L.jpg"},
      {title:"Savor the Moment", pubYear:2010, number:"3", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/7246361-L.jpg"},
      {title:"Happy Ever After", pubYear:2010, number:"4", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/6666627-L.jpg"}
    ] },
    { seriesName: "In Death (as J.D. Robb)", status: "ongoing", books: [
      {title:"Naked in Death", pubYear:1995, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/1470068-L.jpg"}
    ] },
    { seriesName: null, status: null, books: [
      {title:"Montana Sky", pubYear:1996, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/1008917-L.jpg"}
    ] }
    ],
    note: "Nora Roberts has published 200+ novels plus 50+ 'In Death' novels as J.D. Robb; only a representative sample (~10) of her most iconic trilogies/standalones is included here, not her full catalog."
  },
  "Pierce Brown": {
    groups: [
    { seriesName: "Red Rising Saga", status: "ongoing", books: [
      {title:"Red Rising", pubYear:2014, number:"1", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/isbn/9780345539786-L.jpg"},
      {title:"Golden Son", pubYear:2015, number:"2", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8454351-L.jpg"},
      {title:"Morning Star", pubYear:2016, number:"3", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8566174-L.jpg"},
      {title:"Iron Gold", pubYear:2018, number:"4", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/14511722-L.jpg"},
      {title:"Dark Age", pubYear:2019, number:"5", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8748017-L.jpg"},
      {title:"Light Bringer", pubYear:2023, number:"6", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15157697-L.jpg"},
      {title:"Red God", pubYear:null, number:"7", read:false, comingSoon:true, cover:null}
    ] },
    { seriesName: null, status: null, books: [
      {title:"Red Rising: Sons of Ares", pubYear:2017, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/10314407-L.jpg"},
      {title:"The Book of Lorn", pubYear:2025, number:null, read:false, comingSoon:true, cover:null}
    ] }
    ],
    note: null
  },
  "Rebecca Ross": {
    groups: [
    { seriesName: "Letters of Enchantment", status: "complete", books: [
      {title:"Wild Reverence", pubYear:2025, number:"1", read:false, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1737937394i/222376906.jpg"},
      {title:"Divine Rivals", pubYear:2023, number:"2", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1661929417i/62202008.jpg"},
      {title:"Ruthless Vows", pubYear:2023, number:"3", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/14572083-L.jpg"}
    ] },
    { seriesName: "The Queen's Rising", status: "complete", books: [
      {title:"The Queen's Rising", pubYear:2018, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8797379-L.jpg"},
      {title:"The Queen's Resistance", pubYear:2018, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8798045-L.jpg"}
    ] },
    { seriesName: "Elements of Cadence", status: "complete", books: [
      {title:"A River Enchanted", pubYear:2022, number:"1", read:false, comingSoon:false, cover:null},
      {title:"A Fire Endless", pubYear:2022, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/13533959-L.jpg"}
    ] },
    { seriesName: null, status: null, books: [
      {title:"Sisters of Sword and Song", pubYear:2020, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/10236734-L.jpg"},
      {title:"Dreams Lie Beneath", pubYear:2021, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/12366209-L.jpg"}
    ] }
    ],
    note: null
  },
  "Rebecca Yarros": {
    groups: [
    { seriesName: "The Empyrean (Fourth Wing)", status: "ongoing", books: [
      {title:"Fourth Wing", pubYear:2023, number:"1", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1761312598i/61431922.jpg"},
      {title:"Iron Flame", pubYear:2023, number:"2", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1706724269i/90202302.jpg"},
      {title:"Onyx Storm", pubYear:2025, number:"3", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1720446381i/209668781.jpg"},
      {title:"Empyrean Book 4", pubYear:null, number:"4", read:false, comingSoon:true, cover:null},
      {title:"Empyrean Book 5", pubYear:null, number:"5", read:false, comingSoon:true, cover:null}
    ] },
    { seriesName: null, status: null, books: [
      {title:"The Last Letter", pubYear:2019, number:null, read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/10165652-L.jpg"}
    ] },
    { seriesName: "Flight & Glory", status: "complete", books: [
      {title:"Full Measures", pubYear:2014, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/13806625-L.jpg"},
      {title:"Eyes Turned Skyward", pubYear:2014, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/11218612-L.jpg"},
      {title:"Beyond What Is Given", pubYear:2015, number:"3", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15103226-L.jpg"},
      {title:"Hallowed Ground", pubYear:2016, number:"4", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/14750028-L.jpg"},
      {title:"The Reality of Everything", pubYear:2020, number:"5", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15115941-L.jpg"}
    ] },
    { seriesName: "The Renegades", status: "complete", books: [
      {title:"Wilder", pubYear:2016, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/13864786-L.jpg"},
      {title:"Nova", pubYear:2017, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15103248-L.jpg"},
      {title:"Rebel", pubYear:2017, number:"3", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/13864891-L.jpg"}
    ] },
    { seriesName: "Legacy", status: null, books: [
      {title:"Point of Origin", pubYear:2016, number:"0.5", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15103261-L.jpg"},
      {title:"Somewhere I Belong", pubYear:2018, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15103240-L.jpg"},
      {title:"Reason to Believe", pubYear:2022, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15103237-L.jpg"}
    ] },
    { seriesName: null, status: null, books: [
      {title:"Great and Precious Things", pubYear:2020, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/9294533-L.jpg"},
      {title:"The Things We Leave Unfinished", pubYear:2021, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/10240342-L.jpg"},
      {title:"In the Likely Event", pubYear:2023, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15103244-L.jpg"},
      {title:"Variation", pubYear:2024, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15103255-L.jpg"}
    ] }
    ],
    note: "Rebecca Yarros wrote many military-romance novels/series before Fourth Wing fame; only a representative ~15 of her most notable pre-fame works/series are included here as a capped notable-additions list, not her complete backlist."
  },
  "Sarah J. Maas": {
    groups: [
    { seriesName: "Throne of Glass", status: "complete", books: [
      {title:"The Assassin's Blade", pubYear:2014, number:"0.5", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1680869667i/126062562.jpg"},
      {title:"Throne of Glass", pubYear:2012, number:"1", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1673566495i/76703559.jpg"},
      {title:"Crown of Midnight", pubYear:2013, number:"2", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1673566594i/76705490.jpg"},
      {title:"Heir of Fire", pubYear:2014, number:"3", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1673566654i/76706470.jpg"},
      {title:"Queen of Shadows", pubYear:2015, number:"4", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1677267561i/123004944.jpg"},
      {title:"Empire of Storms", pubYear:2016, number:"5", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1676979605i/76713323.jpg"},
      {title:"Tower of Dawn", pubYear:2017, number:"6", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1673567264i/76714487.jpg"},
      {title:"Kingdom of Ash", pubYear:2018, number:"7", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1673567331i/76715522.jpg"}
    ] },
    { seriesName: "A Court of Thorns and Roses", status: "ongoing", books: [
      {title:"A Court of Thorns and Roses", pubYear:2015, number:"1", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1620324329i/50659467.jpg"},
      {title:"A Court of Mist and Fury", pubYear:2016, number:"2", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1620325671i/50659468.jpg"},
      {title:"A Court of Wings and Ruin", pubYear:2017, number:"3", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1585623092i/50659472.jpg"},
      {title:"A Court of Frost and Starlight", pubYear:2018, number:"3.5", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1585622963i/50659471.jpg"},
      {title:"A Court of Silver Flames", pubYear:2021, number:"4", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1734440950i/53138095.jpg"},
      {title:"ACOTAR Book 6", pubYear:null, number:"5", read:false, comingSoon:"October 2026", cover:null},
      {title:"ACOTAR Book 7", pubYear:null, number:"6", read:false, comingSoon:"January 2027", cover:null}
    ] },
    { seriesName: "Crescent City", status: "ongoing", books: [
      {title:"House of Earth and Blood", pubYear:2020, number:"1", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1559142847i/44778083.jpg"},
      {title:"House of Sky and Breath", pubYear:2022, number:"2", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1633097753i/40132775.jpg"},
      {title:"House of Flame and Shadow", pubYear:2024, number:"3", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1689809645i/52857700.jpg"},
      {title:"Crescent City Book 4", pubYear:null, number:"4", read:false, comingSoon:true, cover:null}
    ] },
    { seriesName: null, status: null, books: [
      {title:"Catwoman: Soulstealer", pubYear:2018, number:null, read:false, comingSoon:false, cover:null}
    ] }
    ],
    note: null
  },
  "Scarlett St. Clair": {
    groups: [
    { seriesName: "Hades & Persephone", status: "complete", books: [
      {title:"A Touch of Darkness", pubYear:2019, number:"1", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/10363130-L.jpg"},
      {title:"A Touch of Ruin", pubYear:2020, number:"2", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/11357445-L.jpg"},
      {title:"A Touch of Malice", pubYear:2021, number:"3", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/12415911-L.jpg"},
      {title:"A Touch of Chaos", pubYear:2024, number:"4", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/14612989-L.jpg"},
      {title:"A Christmas of Chaos", pubYear:2025, number:null, read:false, comingSoon:false, cover:null}
    ] },
    { seriesName: "Hades Saga", status: "complete", books: [
      {title:"A Game of Fate", pubYear:2020, number:"1", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/10450006-L.jpg"},
      {title:"A Game of Retribution", pubYear:2022, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/14641718-L.jpg"},
      {title:"A Game of Gods", pubYear:2023, number:"3", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15143774-L.jpg"}
    ] },
    { seriesName: "Adrian X Isolde", status: "ongoing", books: [
      {title:"King of Battle and Blood", pubYear:2021, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/12194497-L.jpg"},
      {title:"Queen of Myth and Monsters", pubYear:2022, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/13148643-L.jpg"},
      {title:"Born of Flames and Sacrifice", pubYear:2025, number:"3", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15143779-L.jpg"}
    ] },
    { seriesName: "Blood of Lilith", status: "ongoing", books: [
      {title:"Terror at the Gates", pubYear:2025, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15143748-L.jpg"},
      {title:"Coiled at the Roots", pubYear:2026, number:"2", read:false, comingSoon:true, cover:null}
    ] },
    { seriesName: "Fairy Tale Retelling", status: "ongoing", books: [
      {title:"Mountains Made of Glass", pubYear:2023, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15143776-L.jpg"},
      {title:"Apples Dipped in Gold", pubYear:2024, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/15143778-L.jpg"}
    ] },
    { seriesName: null, status: null, books: [
      {title:"When Stars Come Out", pubYear:2018, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/10363202-L.jpg"}
    ] }
    ],
    note: null
  },
  "Scott Westerfeld": {
    groups: [
    { seriesName: "Uglies", status: "complete", books: [
      {title:"Uglies", pubYear:2005, number:"1", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/438244-L.jpg"},
      {title:"Pretties", pubYear:2005, number:"2", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/1474615-L.jpg"},
      {title:"Specials", pubYear:2006, number:"3", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/761913-L.jpg"},
      {title:"Extras", pubYear:2006, number:"4", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/1787209-L.jpg"}
    ] },
    { seriesName: "Leviathan", status: "complete", books: [
      {title:"Leviathan", pubYear:2009, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/6253918-L.jpg"},
      {title:"Behemoth", pubYear:2010, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/6608999-L.jpg"},
      {title:"Goliath", pubYear:2011, number:"3", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/7237029-L.jpg"}
    ] },
    { seriesName: "Impostors", status: "complete", books: [
      {title:"Impostors", pubYear:2018, number:"1", read:false, comingSoon:false, cover:null},
      {title:"Shatter City", pubYear:2019, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8788738-L.jpg"},
      {title:"Mirror's Edge", pubYear:2021, number:"3", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/10835491-L.jpg"},
      {title:"Youngbloods", pubYear:2022, number:"4", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/12708043-L.jpg"}
    ] }
    ],
    note: null
  },
  "Shel Silverstein": {
    groups: [
    { seriesName: null, status: null, books: [
      {title:"Lafcadio, the Lion Who Shot Back", pubYear:1963, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/5263689-L.jpg"},
      {title:"The Giving Tree", pubYear:1964, number:null, read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8981758-L.jpg"},
      {title:"Where the Sidewalk Ends", pubYear:1974, number:null, read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/31070-L.jpg"},
      {title:"The Missing Piece", pubYear:1976, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/6823304-L.jpg"},
      {title:"A Light in the Attic", pubYear:1981, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/2270980-L.jpg"},
      {title:"Falling Up", pubYear:1996, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/1047571-L.jpg"},
      {title:"Runny Babbit", pubYear:2005, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/24779-L.jpg"}
    ] }
    ],
    note: null
  },
  "Stephanie Garber": {
    groups: [
    { seriesName: "Caraval", status: "complete", books: [
      {title:"Caraval", pubYear:2017, number:"1", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/7990753-L.jpg"},
      {title:"Legendary", pubYear:2018, number:"2", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/9242465-L.jpg"},
      {title:"Finale", pubYear:2019, number:"3", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8802288-L.jpg"}
    ] },
    { seriesName: "Once Upon a Broken Heart", status: "ongoing", books: [
      {title:"Once Upon a Broken Heart", pubYear:2021, number:"1", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/11427092-L.jpg"},
      {title:"The Ballad of Never After", pubYear:2022, number:"2", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/12945180-L.jpg"},
      {title:"A Curse for True Love", pubYear:2023, number:"3", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/13124827-L.jpg"}
    ] }
    ],
    note: null
  },
  "Stephen King": {
    groups: [
    { seriesName: "The Shining", status: "complete", books: [
      {title:"The Shining", pubYear:1977, number:"1", read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1353277730i/11588.jpg"},
      {title:"Doctor Sleep", pubYear:2013, number:"2", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/14652972-L.jpg"}
    ] },
    { seriesName: "The Dark Tower", status: "complete", books: [
      {title:"The Gunslinger", pubYear:1982, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8396638-L.jpg"},
      {title:"The Drawing of the Three", pubYear:1987, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/14651245-L.jpg"},
      {title:"The Waste Lands", pubYear:1991, number:"3", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/14654089-L.jpg"},
      {title:"Wizard and Glass", pubYear:1997, number:"4", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/14657088-L.jpg"},
      {title:"Wolves of the Calla", pubYear:2003, number:"5", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/14652470-L.jpg"},
      {title:"Song of Susannah", pubYear:2004, number:"6", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8393691-L.jpg"},
      {title:"The Dark Tower", pubYear:2004, number:"7", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/14656148-L.jpg"}
    ] },
    { seriesName: null, status: null, books: [
      {title:"Carrie", pubYear:1974, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/9256043-L.jpg"},
      {title:"'Salem's Lot", pubYear:1975, number:null, read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1554318143i/18128._SX300_.jpg"},
      {title:"The Stand", pubYear:1978, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/9255992-L.jpg"},
      {title:"Pet Sematary", pubYear:1983, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/12015500-L.jpg"},
      {title:"It", pubYear:1986, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8569284-L.jpg"},
      {title:"Misery", pubYear:1987, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8259296-L.jpg"},
      {title:"On Writing: A Memoir of the Craft", pubYear:2000, number:null, read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/9255939-L.jpg"},
      {title:"11/22/63", pubYear:2011, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/10713447-L.jpg"},
      {title:"The Outsider", pubYear:2018, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/11412999-L.jpg"},
      {title:"Fairy Tale", pubYear:2022, number:null, read:true, comingSoon:false, cover:"https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1647789287i/60177373.jpg"}
    ] }
    ],
    note: "Stephen King has published 65+ novels; this list caps his additional (non-Shining) work to the 7-book Dark Tower series plus ~10 of his other most iconic standalone novels, not his full catalog."
  },
  "Stephenie Meyer": {
    groups: [
    { seriesName: "The Twilight Saga", status: "complete", books: [
      {title:"Twilight", pubYear:2005, number:"1", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/12641977-L.jpg"},
      {title:"New Moon", pubYear:2006, number:"2", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/12643406-L.jpg"},
      {title:"Eclipse", pubYear:2007, number:"3", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/12643410-L.jpg"},
      {title:"Breaking Dawn", pubYear:2008, number:"4", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/12643419-L.jpg"},
      {title:"Midnight Sun", pubYear:2020, number:null, read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/9946539-L.jpg"}
    ] },
    { seriesName: "The Host", status: "ongoing", books: [
      {title:"The Host", pubYear:2008, number:"1", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/3366731-L.jpg"},
      {title:"The Seeker", pubYear:null, number:"2", read:false, comingSoon:true, cover:null},
      {title:"The Soul", pubYear:null, number:"3", read:false, comingSoon:true, cover:null}
    ] }
    ],
    note: null
  },
  "Suzanne Collins": {
    groups: [
    { seriesName: "The Hunger Games", status: "ongoing", books: [
      {title:"The Ballad of Songbirds and Snakes", pubYear:2020, number:null, read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/14421833-L.jpg"},
      {title:"Sunrise on the Reaping", pubYear:2025, number:null, read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/isbn/1546171460-L.jpg"},
      {title:"The Hunger Games", pubYear:2008, number:"1", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/12646537-L.jpg"},
      {title:"Catching Fire", pubYear:2009, number:"2", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/12878880-L.jpg"},
      {title:"Mockingjay", pubYear:2010, number:"3", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/12646459-L.jpg"}
    ] },
    { seriesName: "Gregor the Overlander (The Underland Chronicles)", status: "complete", books: [
      {title:"Gregor the Overlander", pubYear:2003, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8345963-L.jpg"},
      {title:"Gregor and the Prophecy of Bane", pubYear:2004, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/12873409-L.jpg"},
      {title:"Gregor and the Curse of the Warmbloods", pubYear:2005, number:"3", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8345962-L.jpg"},
      {title:"Gregor and the Marks of Secret", pubYear:2006, number:"4", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8353620-L.jpg"},
      {title:"Gregor and the Code of Claw", pubYear:2007, number:"5", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8345961-L.jpg"}
    ] }
    ],
    note: null
  },
  "Veronica Roth": {
    groups: [
    { seriesName: "Divergent", status: "complete", books: [
      {title:"Divergent", pubYear:2011, number:"1", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/13274634-L.jpg"},
      {title:"Insurgent", pubYear:2012, number:"2", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/7083755-L.jpg"},
      {title:"Allegiant", pubYear:2013, number:"3", read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/7276393-L.jpg"}
    ] },
    { seriesName: null, status: null, books: [
      {title:"Four: A Divergent Collection", pubYear:2014, number:null, read:false, comingSoon:false, cover:null}
    ] },
    { seriesName: "Carve the Mark", status: "complete", books: [
      {title:"Carve the Mark", pubYear:2017, number:"1", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/7984766-L.jpg"},
      {title:"The Fates Divide", pubYear:2018, number:"2", read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8474606-L.jpg"}
    ] },
    { seriesName: null, status: null, books: [
      {title:"Chosen Ones", pubYear:2020, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/9324176-L.jpg"},
      {title:"Poster Girl", pubYear:2022, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/12978203-L.jpg"}
    ] }
    ],
    note: null
  },
  "William Shakespeare": {
    groups: [
    { seriesName: "Notable Plays (selected)", status: null, books: [
      {title:"Romeo and Juliet", pubYear:1595, number:null, read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8257991-L.jpg"},
      {title:"Julius Caesar", pubYear:1599, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/7901303-L.jpg"},
      {title:"Much Ado About Nothing", pubYear:1598, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8290853-L.jpg"},
      {title:"A Midsummer Night's Dream", pubYear:1595, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/7205924-L.jpg"},
      {title:"Hamlet", pubYear:1600, number:null, read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8281954-L.jpg"},
      {title:"Twelfth Night", pubYear:1601, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/9119932-L.jpg"},
      {title:"Othello", pubYear:1603, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/7165018-L.jpg"},
      {title:"Macbeth", pubYear:1606, number:null, read:true, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/872432-L.jpg"},
      {title:"King Lear", pubYear:1606, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/7420452-L.jpg"},
      {title:"The Tempest", pubYear:1611, number:null, read:false, comingSoon:false, cover:"https://covers.openlibrary.org/b/id/8155661-L.jpg"}
    ] }
    ],
    note: "Shakespeare wrote roughly 39 plays; this list is capped to 10 of his most canonical/best-known works, not his full canon."
  }
};
