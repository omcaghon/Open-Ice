const RINKS = [
  {
    id: "braemar",
    name: "Braemar Arena",
    city: "Edina",
    address: "7511 Ikola Way",
    sheets: 3,
    lat: 44.8836, lng: -93.3414,
    types: ["Open Hockey", "Stick & Puck"],
    price: 7,
    priceNote: "typical adult drop-in",
    quality: 4.5,
    qualityNotes: "Three sheets, well-run, gets busy on weekends",
    schedule: [
      { days: ["Mon", "Wed", "Fri"], start: "11:00", end: "13:00", label: "Open Hockey (18+)" },
      { days: ["Sat"], start: "10:15", end: "11:45", label: "Stick & Puck (all ages)" }
    ],
    website: "https://www.braemararena.com"
  },
  {
    id: "big-bloomington",
    name: "Bloomington Ice Garden (BIG)",
    city: "Bloomington",
    address: "3600 W 98th St",
    sheets: 4,
    lat: 44.8389, lng: -93.3328,
    types: ["Open Hockey", "Stick & Puck"],
    price: 7,
    priceNote: "typical drop-in",
    quality: 4.3,
    qualityNotes: "Four sheets under one roof; classic big-box hockey barn",
    schedule: [
      { days: ["Tue", "Thu"], start: "11:15", end: "13:15", label: "Open Hockey (18+)" },
      { days: ["Sun"], start: "17:45", end: "19:15", label: "Stick & Puck (all ages)" }
    ],
    website: "https://www.bloomingtonmn.gov"
  },
  {
    id: "parade-ice-garden",
    name: "Parade Ice Garden",
    city: "Minneapolis",
    address: "600 Kenwood St",
    sheets: 3,
    lat: 44.9730, lng: -93.3110,
    types: ["Open Hockey", "Stick & Puck"],
    price: 8,
    priceNote: "typical drop-in",
    quality: 4.0,
    qualityNotes: "Three sheets near downtown; lunchtime sessions popular with downtown workers",
    schedule: [
      { days: ["Mon", "Tue", "Wed", "Thu", "Fri"], start: "12:00", end: "13:30", label: "Open Hockey (adults)" },
      { days: ["Sat"], start: "09:30", end: "11:00", label: "Stick & Puck (all ages)" }
    ],
    website: "https://www.minneapolisparks.org"
  },
  {
    id: "schulz-highland",
    name: "Charles M. Schulz Highland Arena",
    city: "St. Paul",
    address: "1398 Montreal Ave",
    sheets: 1,
    lat: 44.9277, lng: -93.1655,
    types: ["Open Hockey"],
    price: 6,
    priceNote: "typical drop-in",
    quality: 4.2,
    qualityNotes: "Solid single sheet in Highland Park; good ice",
    schedule: [
      { days: ["Wed", "Fri"], start: "12:30", end: "14:00", label: "Open Hockey (18+)" },
      { days: ["Sun"], start: "18:00", end: "19:30", label: "Open Hockey (adults)" }
    ],
    website: "https://www.stpaul.gov"
  },
  {
    id: "richfield-ice",
    name: "Richfield Ice Arena",
    city: "Richfield",
    address: "643 E 78th St",
    sheets: 1,
    lat: 44.8700, lng: -93.2830,
    types: ["Open Hockey", "Stick & Puck"],
    price: 6,
    priceNote: "typical drop-in",
    quality: 3.9,
    qualityNotes: "Older single-sheet community rink; friendly crowds",
    schedule: [
      { days: ["Mon", "Tue", "Wed", "Thu", "Fri"], start: "11:00", end: "12:30", label: "Open Hockey (18+)" },
      { days: ["Sat"], start: "10:00", end: "11:30", label: "Stick & Puck (all ages)" }
    ],
    website: "https://www.richfieldmn.gov"
  },
  {
    id: "slp-rec",
    name: "St. Louis Park Recreation Center",
    city: "St. Louis Park",
    address: "3700 Monterey Dr",
    sheets: 3,
    lat: 44.9430, lng: -93.3650,
    types: ["Open Hockey", "Stick & Puck"],
    price: 7,
    priceNote: "typical drop-in",
    quality: 4.0,
    qualityNotes: "Multi-use rec center with three ice sheets",
    schedule: [
      { days: ["Tue", "Thu"], start: "12:00", end: "13:30", label: "Open Hockey (18+)" },
      { days: ["Sun"], start: "10:00", end: "11:30", label: "Stick & Puck (all ages)" }
    ],
    website: "https://www.stlouisparkmn.gov"
  },
  {
    id: "hopkins-pavilion",
    name: "Hopkins Pavilion",
    city: "Hopkins",
    address: "807 Excelsior Ave",
    sheets: 1,
    lat: 44.9260, lng: -93.4050,
    types: ["Pond Hockey", "Open Hockey"],
    price: 5,
    priceNote: "covered outdoor ice; seasonal Nov–Feb",
    quality: 3.9,
    qualityNotes: "Covered outdoor rink — pond-hockey vibes without the wind",
    schedule: [
      { days: ["Fri", "Sat", "Sun"], start: "18:00", end: "21:00", label: "Evening Pond/Open Hockey" },
      { days: ["Sat", "Sun"], start: "12:00", end: "16:00", label: "Afternoon Open Hockey" }
    ],
    website: "https://www.hopkinsmn.com"
  },
  {
    id: "roseville-oval",
    name: "Roseville Skating Center / John Rose OVAL",
    city: "Roseville",
    address: "2661 Civic Center Dr",
    sheets: 2,
    lat: 45.0103, lng: -93.1897,
    types: ["Open Hockey", "Stick & Puck", "Pond Hockey"],
    price: 7,
    priceNote: "indoor drop-in; outdoor bandy/pond rates vary by season",
    quality: 4.3,
    qualityNotes: "Indoor sheet plus the famous refrigerated outdoor oval and pond rinks",
    schedule: [
      { days: ["Tue", "Thu"], start: "10:30", end: "12:30", label: "Open Hockey (18+)" },
      { days: ["Sat"], start: "09:00", end: "10:30", label: "Stick & Puck (all ages)" }
    ],
    website: "https://www.cityofroseville.com"
  },
  {
    id: "aldrich",
    name: "Aldrich Arena",
    city: "Maplewood",
    address: "1850 White Bear Ave",
    sheets: 1,
    lat: 44.9667, lng: -93.0867,
    types: ["Open Hockey"],
    price: 5,
    priceNote: "one of the cheapest drop-ins around",
    quality: 3.8,
    qualityNotes: "Historic Ramsey County barn — no frills but great value",
    schedule: [
      { days: ["Mon", "Wed"], start: "11:30", end: "13:00", label: "Open Hockey (18+)" }
    ],
    website: "https://www.ramseycounty.us"
  },
  {
    id: "tco-sports-garden",
    name: "TCO Sports Garden",
    city: "Vadnais Heights",
    address: "1495 Rice St",
    sheets: 2,
    lat: 45.0357, lng: -93.1547,
    types: ["Open Hockey"],
    price: 10,
    priceNote: "premium facility pricing",
    quality: 4.6,
    qualityNotes: "Top-tier facility, excellent ice quality and amenities",
    schedule: [
      { days: ["Mon", "Wed", "Fri"], start: "11:30", end: "13:30", label: "Open Hockey (18+)" },
      { days: ["Sun"], start: "19:00", end: "20:30", label: "Open Hockey (adults)" }
    ],
    website: "https://tcosportsgarden.com"
  },
  {
    id: "white-bear-sc",
    name: "White Bear Lake Sports Center",
    city: "White Bear Lake",
    address: "2120 First St",
    sheets: 2,
    lat: 45.0840, lng: -92.9960,
    types: ["Open Hockey", "Stick & Puck"],
    price: 8,
    priceNote: "typical drop-in",
    quality: 4.2,
    qualityNotes: "Two well-maintained sheets on the east side",
    schedule: [
      { days: ["Mon", "Wed", "Fri"], start: "11:30", end: "13:00", label: "Open Hockey (18+)" },
      { days: ["Sun"], start: "17:00", end: "18:30", label: "Stick & Puck (all ages)" }
    ],
    website: "https://www.whitebearlakemn.gov"
  },
  {
    id: "bielenberg",
    name: "Bielenberg Sports Center",
    city: "Woodbury",
    address: "4125 Radio Dr",
    sheets: 2,
    lat: 44.9240, lng: -92.9410,
    types: ["Open Hockey", "Stick & Puck"],
    price: 10,
    priceNote: "premium facility pricing",
    quality: 4.3,
    qualityNotes: "Modern east-metro complex with indoor turf too",
    schedule: [
      { days: ["Tue", "Thu"], start: "12:00", end: "13:30", label: "Open Hockey (18+)" },
      { days: ["Sat"], start: "10:30", end: "12:00", label: "Stick & Puck (all ages)" }
    ],
    website: "https://www.woodburymn.gov"
  },
  {
    id: "vmcc-igh",
    name: "Veterans Memorial Community Center",
    city: "Inver Grove Heights",
    address: "8055 Barbara Ave",
    sheets: 1,
    lat: 44.8420, lng: -93.0760,
    types: ["Open Hockey", "Stick & Puck"],
    price: 7,
    priceNote: "typical drop-in",
    quality: 4.2,
    qualityNotes: "Clean community center rink, good locker rooms",
    schedule: [
      { days: ["Tue", "Thu"], start: "12:00", end: "13:30", label: "Open Hockey (18+)" },
      { days: ["Sat"], start: "10:30", end: "12:00", label: "Stick & Puck (all ages)" }
    ],
    website: "https://www.ighmn.gov"
  },
  {
    id: "wakota",
    name: "Wakota Arena",
    city: "South St. Paul",
    address: "161 6th St N",
    sheets: 2,
    lat: 44.8880, lng: -93.0410,
    types: ["Open Hockey"],
    price: 6,
    priceNote: "typical drop-in",
    quality: 3.9,
    qualityNotes: "Old-school hockey town rink with a loyal lunch crowd",
    schedule: [
      { days: ["Mon", "Wed", "Fri"], start: "12:00", end: "13:30", label: "Open Hockey (18+)" }
    ],
    website: null
  },
  {
    id: "eagan-civic",
    name: "Eagan Civic Arena",
    city: "Eagan",
    address: "3870 Pilot Knob Rd",
    sheets: 2,
    lat: 44.8180, lng: -93.1680,
    types: ["Open Hockey", "Stick & Puck"],
    price: 7,
    priceNote: "typical drop-in",
    quality: 4.1,
    qualityNotes: "Two sheets, reliable midday sessions",
    schedule: [
      { days: ["Mon", "Wed", "Fri"], start: "12:00", end: "13:30", label: "Open Hockey (18+)" },
      { days: ["Sun"], start: "17:00", end: "18:30", label: "Stick & Puck (all ages)" }
    ],
    website: "https://www.cityofeagan.com"
  },
  {
    id: "hayes-apple-valley",
    name: "Apple Valley Sports & Arena (Hayes)",
    city: "Apple Valley",
    address: "14598 Hayes Rd",
    sheets: 2,
    lat: 44.7310, lng: -93.2180,
    types: ["Open Hockey", "Stick & Puck"],
    price: 7,
    priceNote: "typical drop-in",
    quality: 4.0,
    qualityNotes: "Twin south-metro sheets; steady lunchtime games",
    schedule: [
      { days: ["Tue", "Thu"], start: "11:30", end: "13:00", label: "Open Hockey (18+)" },
      { days: ["Sat"], start: "09:45", end: "11:15", label: "Stick & Puck (all ages)" }
    ],
    website: "https://www.cityofapplevalley.org"
  },
  {
    id: "ames-lakeville",
    name: "Ames Arena",
    city: "Lakeville",
    address: "19900 Ipava Ave",
    sheets: 2,
    lat: 44.6490, lng: -93.2420,
    types: ["Open Hockey", "Stick & Puck"],
    price: 7,
    priceNote: "typical drop-in",
    quality: 4.1,
    qualityNotes: "Far-south option with solid open-hockey following",
    schedule: [
      { days: ["Wed"], start: "12:00", end: "13:30", label: "Open Hockey (18+)" },
      { days: ["Sun"], start: "10:00", end: "11:30", label: "Stick & Puck (all ages)" }
    ],
    website: "https://www.lakevillemn.gov"
  },
  {
    id: "burnsville-ice",
    name: "Burnsville Ice Center",
    city: "Burnsville",
    address: "251 Civic Center Pkwy",
    sheets: 2,
    lat: 44.7670, lng: -93.2790,
    types: ["Open Hockey", "Stick & Puck"],
    price: 6,
    priceNote: "typical drop-in",
    quality: 4.0,
    qualityNotes: "Convenient central-south location off I-35E",
    schedule: [
      { days: ["Mon", "Tue", "Wed", "Thu", "Fri"], start: "11:00", end: "12:30", label: "Stick & Puck (all ages)" },
      { days: ["Sun"], start: "18:30", end: "20:00", label: "Open Hockey (18+)" }
    ],
    website: "https://www.burnsvillemn.gov"
  },
  {
    id: "farmington-sm",
    name: "Schmitz-Maki Arena",
    city: "Farmington",
    address: "114 Spruce St",
    sheets: 1,
    lat: 44.7400, lng: -93.1420,
    types: ["Open Hockey", "Stick & Puck"],
    price: 5,
    priceNote: "budget-friendly",
    quality: 3.8,
    qualityNotes: "Small-town single sheet, cheap sessions",
    schedule: [
      { days: ["Wed", "Fri"], start: "12:00", end: "13:30", label: "Open Hockey (18+)" },
      { days: ["Sat"], start: "10:00", end: "11:30", label: "Stick & Puck (all ages)" }
    ],
    website: null
  },
  {
    id: "hastings-civic",
    name: "Hastings Civic Arena",
    city: "Hastings",
    address: "1224 3rd St E",
    sheets: 2,
    lat: 44.7300, lng: -92.8500,
    types: ["Open Hockey", "Stick & Puck"],
    price: 6,
    priceNote: "typical drop-in",
    quality: 3.9,
    qualityNotes: "Southeast corner of the metro; rarely crowded midday",
    schedule: [
      { days: ["Tue", "Thu"], start: "12:00", end: "13:30", label: "Open Hockey (18+)" },
      { days: ["Sun"], start: "16:30", end: "18:00", label: "Stick & Puck (all ages)" }
    ],
    website: "https://www.hastingsmn.gov"
  },
  {
    id: "cottage-grove-ia",
    name: "Cottage Grove Ice Arena",
    city: "Cottage Grove",
    address: "802 80th St S",
    sheets: 2,
    lat: 44.8440, lng: -92.9430,
    types: ["Open Hockey", "Stick & Puck"],
    price: 6,
    priceNote: "typical drop-in",
    quality: 4.0,
    qualityNotes: "Reliable east-side option",
    schedule: [
      { days: ["Mon", "Wed"], start: "11:30", end: "13:00", label: "Open Hockey (18+)" },
      { days: ["Sun"], start: "10:00", end: "11:30", label: "Stick & Puck (all ages)" }
    ],
    website: null
  },
  {
    id: "shakopee-ice",
    name: "Shakopee Ice Center",
    city: "Shakopee",
    address: "1251 Fuller St S",
    sheets: 2,
    lat: 44.7970, lng: -93.5270,
    types: ["Open Hockey", "Stick & Puck"],
    price: 6,
    priceNote: "typical drop-in",
    quality: 4.0,
    qualityNotes: "Southwest metro workhorse rink",
    schedule: [
      { days: ["Tue", "Thu"], start: "11:30", end: "13:00", label: "Open Hockey (18+)" },
      { days: ["Sat"], start: "10:00", end: "11:30", label: "Stick & Puck (all ages)" }
    ],
    website: "https://www.shakopeemn.gov"
  },
  {
    id: "pagel-minnetonka",
    name: "Pagel Activity Center",
    city: "Minnetonka",
    address: "17401 Old Excelsior Blvd",
    sheets: 2,
    lat: 44.9000, lng: -93.4560,
    types: ["Open Hockey", "Stick & Puck"],
    price: 8,
    priceNote: "typical drop-in",
    quality: 4.2,
    qualityNotes: "Good west-metro ice, popular lunch league crowd",
    schedule: [
      { days: ["Mon", "Wed", "Fri"], start: "12:00", end: "13:30", label: "Open Hockey (18+)" },
      { days: ["Sun"], start: "09:30", end: "11:00", label: "Stick & Puck (all ages)" }
    ],
    website: "https://www.minnetonkamn.gov"
  },
  {
    id: "ep-cc",
    name: "Eden Prairie Community Center",
    city: "Eden Prairie",
    address: "16700 Valley View Rd",
    sheets: 3,
    lat: 44.8540, lng: -93.4700,
    types: ["Open Hockey", "Stick & Puck"],
    price: 8,
    priceNote: "typical drop-in",
    quality: 4.2,
    qualityNotes: "Big multi-purpose center with three sheets",
    schedule: [
      { days: ["Tue", "Thu"], start: "12:00", end: "13:30", label: "Open Hockey (18+)" },
      { days: ["Sat"], start: "10:00", end: "11:30", label: "Stick & Puck (all ages)" }
    ],
    website: "https://www.edenprairie.org"
  },
  {
    id: "chanhassen-rec",
    name: "Chanhassen Recreational Center",
    city: "Chanhassen",
    address: "2310 Coulter Blvd",
    sheets: 2,
    lat: 44.8600, lng: -93.5300,
    types: ["Open Hockey", "Stick & Puck"],
    price: 8,
    priceNote: "typical drop-in",
    quality: 4.2,
    qualityNotes: "Well-run southwest suburban rink",
    schedule: [
      { days: ["Mon", "Wed", "Fri"], start: "12:00", end: "13:30", label: "Open Hockey (18+)" },
      { days: ["Sat"], start: "10:00", end: "11:30", label: "Stick & Puck (all ages)" }
    ],
    website: null
  },
  {
    id: "victoria-rec",
    name: "Victoria Recreation Center",
    city: "Victoria",
    address: "8477 Kochia Ln",
    sheets: 2,
    lat: 44.8530, lng: -93.6530,
    types: ["Open Hockey", "Stick & Puck"],
    price: 7,
    priceNote: "typical drop-in",
    quality: 4.3,
    qualityNotes: "Newer facility on the far SW edge of the metro",
    schedule: [
      { days: ["Tue", "Thu"], start: "11:30", end: "13:00", label: "Open Hockey (18+)" },
      { days: ["Sun"], start: "10:30", end: "12:00", label: "Stick & Puck (all ages)" }
    ],
    website: null
  },
  {
    id: "waconia-ia",
    name: "Waconia Ice Arena",
    city: "Waconia",
    address: "333 SE 2nd St",
    sheets: 2,
    lat: 44.8490, lng: -93.7880,
    types: ["Open Hockey", "Stick & Puck"],
    price: 5,
    priceNote: "budget-friendly",
    quality: 4.1,
    qualityNotes: "Cheap weekday sessions if you're out that way",
    schedule: [
      { days: ["Mon", "Tue", "Wed", "Thu", "Fri"], start: "11:30", end: "13:00", label: "Open Hockey (18+)" },
      { days: ["Sat"], start: "09:30", end: "11:00", label: "Stick & Puck (all ages)" }
    ],
    website: null
  },
  {
    id: "plymouth-ice",
    name: "Plymouth Ice Center",
    city: "Plymouth",
    address: "3650 Plymouth Blvd",
    sheets: 3,
    lat: 45.0110, lng: -93.4550,
    types: ["Open Hockey", "Stick & Puck"],
    price: 8,
    priceNote: "typical drop-in",
    quality: 4.3,
    qualityNotes: "Three sheets, strong hockey community",
    schedule: [
      { days: ["Mon", "Wed", "Fri"], start: "11:30", end: "13:30", label: "Open Hockey (18+)" },
      { days: ["Sun"], start: "17:30", end: "19:00", label: "Stick & Puck (all ages)" }
    ],
    website: "https://www.plymouthmn.gov"
  },
  {
    id: "new-hope-ia",
    name: "New Hope Ice Arena",
    city: "New Hope",
    address: "4949 Louisiana Ave N",
    sheets: 2,
    lat: 45.0380, lng: -93.3930,
    types: ["Open Hockey", "Stick & Puck"],
    price: 7,
    priceNote: "typical drop-in",
    quality: 4.0,
    qualityNotes: "No-nonsense NW metro rink",
    schedule: [
      { days: ["Tue", "Thu"], start: "11:00", end: "13:00", label: "Open Hockey (18+)" },
      { days: ["Sat"], start: "10:00", end: "11:30", label: "Stick & Puck (all ages)" }
    ],
    website: "https://www.newhopemn.gov"
  },
  {
    id: "maple-grove-cc",
    name: "Maple Grove Community Center",
    city: "Maple Grove",
    address: "12951 Weaver Lake Rd",
    sheets: 2,
    lat: 45.1150, lng: -93.4320,
    types: ["Open Hockey", "Stick & Puck"],
    price: 7,
    priceNote: "typical drop-in",
    quality: 4.3,
    qualityNotes: "Nice facility with a pond-style outdoor rink too",
    schedule: [
      { days: ["Mon", "Wed"], start: "12:00", end: "13:30", label: "Open Hockey (18+)" },
      { days: ["Sat"], start: "09:30", end: "11:00", label: "Stick & Puck (all ages)" }
    ],
    website: "https://www.maplegrovemn.gov"
  },
  {
    id: "bp-cac",
    name: "Brooklyn Park Community Activity Center",
    city: "Brooklyn Park",
    address: "5600 85th Ave N",
    sheets: 2,
    lat: 45.0940, lng: -93.3190,
    types: ["Open Hockey"],
    price: 7,
    priceNote: "typical drop-in",
    quality: 4.0,
    qualityNotes: "Big rec center serving the northwest metro",
    schedule: [
      { days: ["Tue", "Thu"], start: "12:00", end: "13:30", label: "Open Hockey (18+)" }
    ],
    website: "https://www.brooklynpark.gov"
  },
  {
    id: "coon-rapids-ic",
    name: "Coon Rapids Ice Center",
    city: "Coon Rapids",
    address: "11800 Crooked Lake Blvd NW",
    sheets: 3,
    lat: 45.1460, lng: -93.2970,
    types: ["Open Hockey", "Stick & Puck"],
    price: 8,
    priceNote: "typical drop-in",
    quality: 4.2,
    qualityNotes: "Three sheets; weekday midday slots are quiet",
    schedule: [
      { days: ["Mon", "Tue", "Wed", "Thu", "Fri"], start: "11:30", end: "13:00", label: "Open Hockey (18+)" },
      { days: ["Sun"], start: "10:30", end: "12:00", label: "Stick & Puck (all ages)" }
    ],
    website: "https://www.coonrapidsmn.gov"
  },
  {
    id: "andover-cc",
    name: "Andover Community Center",
    city: "Andover",
    address: "15200 Hanson Blvd NW",
    sheets: 2,
    lat: 45.2560, lng: -93.2910,
    types: ["Open Hockey", "Stick & Puck"],
    price: 8,
    priceNote: "typical drop-in",
    quality: 4.2,
    qualityNotes: "Far north metro; light midday crowds",
    schedule: [
      { days: ["Tue", "Thu"], start: "11:30", end: "13:30", label: "Open Hockey (18+)" },
      { days: ["Sat"], start: "10:00", end: "11:30", label: "Stick & Puck (all ages)" }
    ],
    website: "https://www.andovermn.gov"
  },
  {
    id: "fogerty",
    name: "Fogerty Arena",
    city: "Blaine",
    address: "9170 Madison St NE",
    sheets: 2,
    lat: 45.1720, lng: -93.2350,
    types: ["Open Hockey"],
    price: 6,
    priceNote: "typical drop-in",
    quality: 4.3,
    qualityNotes: "Beloved community arena with great ice",
    schedule: [
      { days: ["Mon", "Wed", "Fri"], start: "11:00", end: "13:00", label: "Open Hockey (18+)" },
      { days: ["Sun"], start: "18:00", end: "19:30", label: "Open Hockey (adults)" }
    ],
    website: "https://fogertyarena.com"
  },
  {
    id: "super-rink",
    name: "Schwan Super Rink (National Sports Center)",
    city: "Blaine",
    address: "1700 105th Ave NE",
    sheets: 4,
    lat: 45.1600, lng: -93.2220,
    types: ["Open Hockey", "Stick & Puck"],
    price: 8,
    priceNote: "largest indoor complex in the country",
    quality: 4.5,
    qualityNotes: "Four-plus sheets; almost always a session running somewhere",
    schedule: [
      { days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], start: "12:00", end: "14:00", label: "Daily Open Hockey (rotating sheet)" }
    ],
    website: "https://www.nscsports.org"
  },
  {
    id: "elk-river-arena",
    name: "Elk River Ice Arena",
    city: "Elk River",
    address: "9379 7th St N",
    sheets: 2,
    lat: 45.3000, lng: -93.5630,
    types: ["Open Hockey", "Stick & Puck"],
    price: 6,
    priceNote: "typical drop-in",
    quality: 4.0,
    qualityNotes: "Northwest edge of the metro",
    schedule: [
      { days: ["Tue", "Thu"], start: "11:00", end: "12:30", label: "Open Hockey (18+)" },
      { days: ["Sat"], start: "10:00", end: "11:30", label: "Stick & Puck (all ages)" }
    ],
    website: null
  },
  {
    id: "rogers-ac",
    name: "Rogers Activity Center",
    city: "Rogers",
    address: "21080 141st Ave N",
    sheets: 2,
    lat: 45.1880, lng: -93.5560,
    types: ["Open Hockey"],
    price: 7,
    priceNote: "typical drop-in",
    quality: 3.9,
    qualityNotes: "Growing northwest suburb rink",
    schedule: [
      { days: ["Mon", "Wed"], start: "11:30", end: "13:00", label: "Open Hockey (18+)" }
    ],
    website: null
  },
  {
    id: "anoka-ia",
    name: "Anoka Area Ice Arena",
    city: "Anoka",
    address: "1101 5th Ave",
    sheets: 1,
    lat: 45.1970, lng: -93.3900,
    types: ["Open Hockey", "Stick & Puck"],
    price: 6,
    priceNote: "typical drop-in",
    quality: 4.0,
    qualityNotes: "Classic northern single sheet",
    schedule: [
      { days: ["Mon", "Wed"], start: "11:00", end: "12:30", label: "Open Hockey (18+)" },
      { days: ["Sat"], start: "10:00", end: "11:30", label: "Stick & Puck (all ages)" }
    ],
    website: null
  }
];
