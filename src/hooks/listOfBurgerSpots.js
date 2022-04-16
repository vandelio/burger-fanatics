const listOfBurgerSpots = [
   {
    id:"1",
title: "Drej Ind - Rødding",

    desc:'All of our menu items are inspired by national cuisine and have been created by our head chef, (CN), after studying authentic national cuisine in ____. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from, and the best burgers in the world.  Come dine with us & experience an authentic national_ meal in an intimate dining space. We look forward to serving you!',
rating: '4',
    place: 'Rødding',
    openinghours: 'mon-fri 10-22 sat-sun 12-22',
  },
  {
    id:"2",
title: "Stedet - Aabenraa",
    desc:'All of our menu items are inspired by national cuisine and have been created by our head chef, (CN), after studying authentic national cuisine in ____. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from, and the best burgers in the world.  Come dine with us & experience an authentic national_ meal in an intimate dining space. We look forward to serving you!', 
rating: '4',
    place: 'Aabenraa',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    id:"3",
    title: "Syd Grillen - Kolding",
    desc:'All of our menu items are inspired by national cuisine and have been created by our head chef, (CN), after studying authentic national cuisine in ____. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from, and the best burgers in the world.  Come dine with us & experience an authentic national_ meal in an intimate dining space. We look forward to serving you!', 
    rating: '4',
    place: 'Kolding',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    id:"4",
title: "Haderslev Golfrestaurant",
    desc:'All of our menu items are inspired by national cuisine and have been created by our head chef, (CN), after studying authentic national cuisine in ____. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from, and the best burgers in the world.  Come dine with us & experience an authentic national_ meal in an intimate dining space. We look forward to serving you!', 
rating: '4',
    place: 'Haderslev',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    id:"5",
title: "Hejsager Strandgrill - Haderslev",
    desc:'All of our menu items are inspired by national cuisine and have been created by our head chef, (CN), after studying authentic national cuisine in ____. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from, and the best burgers in the world.  Come dine with us & experience an authentic national_ meal in an intimate dining space. We look forward to serving you!', 
rating: '4',
    place: 'Haderslev',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    id:"6",
title: "Burger Boom - København",
    desc:'All of our menu items are inspired by national cuisine and have been created by our head chef, (CN), after studying authentic national cuisine in ____. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from, and the best burgers in the world.  Come dine with us & experience an authentic national_ meal in an intimate dining space. We look forward to serving you!', 
rating: '5',
    place: 'København',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    id:"7",
title: "Grillen Burgerbar - Odense",
    desc:'All of our menu items are inspired by national cuisine and have been created by our head chef, (CN), after studying authentic national cuisine in ____. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from, and the best burgers in the world.  Come dine with us & experience an authentic national_ meal in an intimate dining space. We look forward to serving you!', 
rating: '3',
    place: 'Odense',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    id:"8",
title: "WeDoBurgers - Randers",
    desc:'All of our menu items are inspired by national cuisine and have been created by our head chef, (CN), after studying authentic national cuisine in ____. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from, and the best burgers in the world.  Come dine with us & experience an authentic national_ meal in an intimate dining space. We look forward to serving you!', 
rating: '5',
    place: 'Randers',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    id:"9",
title: "Restaurant NerD - Frederikshavn",
    desc:'All of our menu items are inspired by national cuisine and have been created by our head chef, (CN), after studying authentic national cuisine in ____. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from, and the best burgers in the world.  Come dine with us & experience an authentic national_ meal in an intimate dining space. We look forward to serving you!', 
rating: '5',
    place: 'Frederikshavn',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    id:"10",
title: "Chuck Wagon - Hjørring",
    desc:'All of our menu items are inspired by national cuisine and have been created by our head chef, (CN), after studying authentic national cuisine in ____. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from, and the best burgers in the world.  Come dine with us & experience an authentic national_ meal in an intimate dining space. We look forward to serving you!', 
rating: '5',
    place: 'Hjørring',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    id:"11",
title: "Café Knuth's - Skagen",
    desc:'All of our menu items are inspired by national cuisine and have been created by our head chef, (CN), after studying authentic national cuisine in ____. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from, and the best burgers in the world.  Come dine with us & experience an authentic national_ meal in an intimate dining space. We look forward to serving you!', 
rating: '5',
    place: 'Skagen',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    id:"12",
title: "Himmerland Golf og Spa - Farsø",
    desc:'All of our menu items are inspired by national cuisine and have been created by our head chef, (CN), after studying authentic national cuisine in ____. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from, and the best burgers in the world.  Come dine with us & experience an authentic national_ meal in an intimate dining space. We look forward to serving you!', 
rating: '4',
    place: 'Farsø',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    id:"13",
title: "We Meat Burger - Frederikshavn",
    desc:'All of our menu items are inspired by national cuisine and have been created by our head chef, (CN), after studying authentic national cuisine in ____. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from, and the best burgers in the world.  Come dine with us & experience an authentic national_ meal in an intimate dining space. We look forward to serving you!', 
rating: '4',
    place: 'Frederikshavn',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    id:"14",
title: "Chuck Wagon - Nyborg",
    desc:'All of our menu items are inspired by national cuisine and have been created by our head chef, (CN), after studying authentic national cuisine in ____. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from, and the best burgers in the world.  Come dine with us & experience an authentic national_ meal in an intimate dining space. We look forward to serving you!', 
rating: '4',
    place: 'Nyborg',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    id:"15",
title: "JOMA Burgerbar - Thisted",
    desc:'All of our menu items are inspired by national cuisine and have been created by our head chef, (CN), after studying authentic national cuisine in ____. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from, and the best burgers in the world.  Come dine with us & experience an authentic national_ meal in an intimate dining space. We look forward to serving you!', 
rating: '4',
    place: 'Thisted',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    id:"16",
title: "Burger Boom - Aalborg",
    desc:'All of our menu items are inspired by national cuisine and have been created by our head chef, (CN), after studying authentic national cuisine in ____. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from, and the best burgers in the world.  Come dine with us & experience an authentic national_ meal in an intimate dining space. We look forward to serving you!', 
rating: '4',
    place: 'Aalborg',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
//   {
//     id:"",
// title: "Pagoden Foodtrucks(Ølgod)",
//     desc:'All of our menu items are inspired by national cuisine and have been created by our head chef, (CN), after studying authentic national cuisine in ____. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from, and the best burgers in the world.  Come dine with us & experience an authentic national_ meal in an intimate dining space. We look forward to serving you!', 
// rating: '4',
//     place: 'Ølgod',
//     openinghours: 'mon-fri 10-22 sat-sun 12-22'
//   },
//   {
//     id:"",
// title: "Guldhammers(Horsens)",
//     desc:'All of our menu items are inspired by national cuisine and have been created by our head chef, (CN), after studying authentic national cuisine in ____. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from, and the best burgers in the world.  Come dine with us & experience an authentic national_ meal in an intimate dining space. We look forward to serving you!', 
// rating: '4',
//     place: 'Horsens',
//     openinghours: 'mon-fri 10-22 sat-sun 12-22'
//   },
//   {
//     id:"",
// title: "Burger Boom(Aarhus)",
//     desc:'All of our menu items are inspired by national cuisine and have been created by our head chef, (CN), after studying authentic national cuisine in ____. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from, and the best burgers in the world.  Come dine with us & experience an authentic national_ meal in an intimate dining space. We look forward to serving you!', 
// rating: '4',
//     place: 'Aarhus',
//     openinghours: 'mon-fri 10-22 sat-sun 12-22'
//   },
//   {
//     id:"",
// title: "Highway 51(Randers)",
//     desc:'All of our menu items are inspired by national cuisine and have been created by our head chef, (CN), after studying authentic national cuisine in ____. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from, and the best burgers in the world.  Come dine with us & experience an authentic national_ meal in an intimate dining space. We look forward to serving you!', 
// rating: '4',
//     place: 'Randers',
//     openinghours: 'mon-fri 10-22 sat-sun 12-22'
//   },
//   {
//     id:"",
// title: "Samsø Madsnedkeri",
//     desc:'All of our menu items are inspired by national cuisine and have been created by our head chef, (CN), after studying authentic national cuisine in ____. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from, and the best burgers in the world.  Come dine with us & experience an authentic national_ meal in an intimate dining space. We look forward to serving you!', 
// rating: '4',
//     place: '',
//     openinghours: 'mon-fri 10-22 sat-sun 12-22'
//   },
//   {
//     id:"",
// title: "Burger Boom",
//     desc:'All of our menu items are inspired by national cuisine and have been created by our head chef, (CN), after studying authentic national cuisine in ____. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from, and the best burgers in the world.  Come dine with us & experience an authentic national_ meal in an intimate dining space. We look forward to serving you!', 
// rating: '4',
//     place: '',
//     openinghours: 'mon-fri 10-22 sat-sun 12-22'
//   },
//   {
//     id:"",
// title: "Café Sidewalk",
//     desc:'All of our menu items are inspired by national cuisine and have been created by our head chef, (CN), after studying authentic national cuisine in ____. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from, and the best burgers in the world.  Come dine with us & experience an authentic national_ meal in an intimate dining space. We look forward to serving you!', 
// rating: '4',
//     place: '',
//     openinghours: 'mon-fri 10-22 sat-sun 12-22'
//   },
//   {
//     id:"",
// title: "Melone",
//     desc:'All of our menu items are inspired by national cuisine and have been created by our head chef, (CN), after studying authentic national cuisine in ____. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from, and the best burgers in the world.  Come dine with us & experience an authentic national_ meal in an intimate dining space. We look forward to serving you!', 
// rating: '4',
//     place: '',
//     openinghours: 'mon-fri 10-22 sat-sun 12-22'
//   },
//   {
//     id:"",
// title: "Chicago Burger",
//     desc:'All of our menu items are inspired by national cuisine and have been created by our head chef, (CN), after studying authentic national cuisine in ____. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from, and the best burgers in the world.  Come dine with us & experience an authentic national_ meal in an intimate dining space. We look forward to serving you!', 
// rating: '4',
//     place: '',
//     openinghours: 'mon-fri 10-22 sat-sun 12-22'
//   },
//   {
//     id:"",
// title: "Burger Shack",
//     desc:'All of our menu items are inspired by national cuisine and have been created by our head chef, (CN), after studying authentic national cuisine in ____. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from, and the best burgers in the world.  Come dine with us & experience an authentic national_ meal in an intimate dining space. We look forward to serving you!', 
// rating: '4',
//     place: '',
//     openinghours: 'mon-fri 10-22 sat-sun 12-22'
//   },
//   {
//     id:"",
// title: "Café Mauritz/Molotov",
//     desc:'All of our menu items are inspired by national cuisine and have been created by our head chef, (CN), after studying authentic national cuisine in ____. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from, and the best burgers in the world.  Come dine with us & experience an authentic national_ meal in an intimate dining space. We look forward to serving you!', 
// rating: '4',
//     place: '',
//     openinghours: 'mon-fri 10-22 sat-sun 12-22'
//   },
//   {
//     id:"",
// title: "Downtown Sandwich",
//     desc:'All of our menu items are inspired by national cuisine and have been created by our head chef, (CN), after studying authentic national cuisine in ____. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from, and the best burgers in the world.  Come dine with us & experience an authentic national_ meal in an intimate dining space. We look forward to serving you!', 
// rating: '4',
//     place: '',
//     openinghours: 'mon-fri 10-22 sat-sun 12-22'
//   },
//   {
//     id:"",
// title: "Café Mauritz",
//     desc:'All of our menu items are inspired by national cuisine and have been created by our head chef, (CN), after studying authentic national cuisine in ____. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from, and the best burgers in the world.  Come dine with us & experience an authentic national_ meal in an intimate dining space. We look forward to serving you!', 
// rating: '4',
//     place: '',
//     openinghours: 'mon-fri 10-22 sat-sun 12-22'
//   },
//   {
//     id:"",
// title: "Thaisens Ma'hus(Ringe)",
//     desc:'All of our menu items are inspired by national cuisine and have been created by our head chef, (CN), after studying authentic national cuisine in ____. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from, and the best burgers in the world.  Come dine with us & experience an authentic national_ meal in an intimate dining space. We look forward to serving you!', 
// rating: '4',
//     place: 'Ringe',
//     openinghours: 'mon-fri 10-22 sat-sun 12-22'
//   },
//   {
//     id:"",
// title: "Nurs Burger & Steakhouse(Nyborg)",
//     desc:'All of our menu items are inspired by national cuisine and have been created by our head chef, (CN), after studying authentic national cuisine in ____. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from, and the best burgers in the world.  Come dine with us & experience an authentic national_ meal in an intimate dining space. We look forward to serving you!', 
// rating: '4',
//     place: 'Nyborg',
//     openinghours: 'mon-fri 10-22 sat-sun 12-22'
//   },
//   {
//     id:"",
// title: "Downtown Sandwich and Burgers(Odense)",
//     desc:'All of our menu items are inspired by national cuisine and have been created by our head chef, (CN), after studying authentic national cuisine in ____. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from, and the best burgers in the world.  Come dine with us & experience an authentic national_ meal in an intimate dining space. We look forward to serving you!', 
// rating: '4',
//     place: 'Odense',
//     openinghours: 'mon-fri 10-22 sat-sun 12-22'
//   },
//   {
//     id:"",
// title: "Eden Jaxx",
//     desc:'All of our menu items are inspired by national cuisine and have been created by our head chef, (CN), after studying authentic national cuisine in ____. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from, and the best burgers in the world.  Come dine with us & experience an authentic national_ meal in an intimate dining space. We look forward to serving you!', 
// rating: '4',
//     place: '',
//     openinghours: 'mon-fri 10-22 sat-sun 12-22'
//   },
//   {
//     id:"",
// title: "The Börger",
//     desc:'All of our menu items are inspired by national cuisine and have been created by our head chef, (CN), after studying authentic national cuisine in ____. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from, and the best burgers in the world.  Come dine with us & experience an authentic national_ meal in an intimate dining space. We look forward to serving you!', 
// rating: '4',
//     place: '',
//     openinghours: 'mon-fri 10-22 sat-sun 12-22'
//   },
//   {
//     id:"",
// title: "Square Burger",
//     desc:'All of our menu items are inspired by national cuisine and have been created by our head chef, (CN), after studying authentic national cuisine in ____. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from, and the best burgers in the world.  Come dine with us & experience an authentic national_ meal in an intimate dining space. We look forward to serving you!', 
// rating: '4',
//     place: '',
//     openinghours: 'mon-fri 10-22 sat-sun 12-22'
//   },
//   {
//     id:"",
// title: "Liban Cuisine",
//     desc:'All of our menu items are inspired by national cuisine and have been created by our head chef, (CN), after studying authentic national cuisine in ____. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from, and the best burgers in the world.  Come dine with us & experience an authentic national_ meal in an intimate dining space. We look forward to serving you!', 
// rating: '4',
//     place: '',
//     openinghours: 'mon-fri 10-22 sat-sun 12-22'
//   },
//   {
//     id:"",
// title: "The Midwestern Diner",
//     desc:'All of our menu items are inspired by national cuisine and have been created by our head chef, (CN), after studying authentic national cuisine in ____. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from, and the best burgers in the world.  Come dine with us & experience an authentic national_ meal in an intimate dining space. We look forward to serving you!', 
// rating: '4',
//     place: '',
//     openinghours: 'mon-fri 10-22 sat-sun 12-22'
//   },
//   {
//     id:"",
// title: "Max Hamburger",
//     desc:'All of our menu items are inspired by national cuisine and have been created by our head chef, (CN), after studying authentic national cuisine in ____. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from, and the best burgers in the world.  Come dine with us & experience an authentic national_ meal in an intimate dining space. We look forward to serving you!', 
// rating: '4',
//     place: '',
//     openinghours: 'mon-fri 10-22 sat-sun 12-22'
//   },
//   {
//     id:"",
// title: "Skovgrillen",
//     desc:'All of our menu items are inspired by national cuisine and have been created by our head chef, (CN), after studying authentic national cuisine in ____. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from, and the best burgers in the world.  Come dine with us & experience an authentic national_ meal in an intimate dining space. We look forward to serving you!', 
// rating: '4',
//     place: '',
//     openinghours: 'mon-fri 10-22 sat-sun 12-22'
//   },
//   {
//     id:"",
// title: "Café Farø Vad",
//     desc:'All of our menu items are inspired by national cuisine and have been created by our head chef, (CN), after studying authentic national cuisine in ____. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from, and the best burgers in the world.  Come dine with us & experience an authentic national_ meal in an intimate dining space. We look forward to serving you!', 
// rating: '4',
//     place: '',
//     openinghours: 'mon-fri 10-22 sat-sun 12-22'
//   }
  ]


export default listOfBurgerSpots;