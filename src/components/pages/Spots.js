import React from 'react';
import PageLayout from "./PageLayout";
import List from "../parts/List";
import '../../styles/list.css';
function Spots() {
const list = [{
    title: "Drej Ind(Rødding)",
    place: 'Rødding',
    rating:'4',
    openinghours: 'mon-fri 10-22 sat-sun 12-22',
  },
  {
    title: "Stedet(Aabenraa)",
    place: 'Aabenraa',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    title: "Syd Grillen(Kolding)",
    place: 'Kolding',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    title: "Haderslev Golfrestaurant",
    place: 'Haderslev',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    title: "Hejsager Strandgrill(Haderslev)",
    place: 'Haderslev',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    title: "Burger Boom",
    place: '',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    title: "Grillen Burgerbar",
    place: '',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    title: "WeDoBurgers",
    place: '',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    title: "Restaurant NerD(Frederikshavn)",
    place: 'Frederikshavn',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    title: "Chuck Wagon(Hjørring)",
    place: 'Hjørring',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    title: "Café Knuth's(Skagen)",
    place: 'Skagen',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    title: "Himmerland Golf og Spa(Farsø)",
    place: 'Farsø',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    title: "We Meat Burger(Frederikshavn)",
    place: 'Frederikshavn',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    title: "Chuck Wagon(Hjørring)",
    place: 'Hjørring',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    title: "JOMA Burgerbar(Thisted)",
    place: 'Thisted',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    title: "Burger Boom(Aalborg)",
    place: 'Aalborg',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    title: "Pagoden Foodtrucks(Ølgod)",
    place: 'Ølgod',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    title: "Guldhammers(Horsens)",
    place: 'Horsens',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    title: "Burger Boom(Aarhus)",
    place: 'Aarhus',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    title: "Highway 51(Randers)",
    place: 'Randers',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    title: "Samsø Madsnedkeri",
    place: '',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    title: "Burger Boom",
    place: '',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    title: "Café Sidewalk",
    place: '',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    title: "Melone",
    place: '',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    title: "Chicago Burger",
    place: '',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    title: "Burger Shack",
    place: '',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    title: "Café Mauritz/Molotov",
    place: '',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    title: "Downtown Sandwich",
    place: '',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    title: "Café Mauritz",
    place: '',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    title: "Thaisens Ma'hus(Ringe)",
    place: 'Ringe',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    title: "Nurs Burger & Steakhouse(Nyborg)",
    place: 'Nyborg',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    title: "Downtown Sandwich and Burgers(Odense)",
    place: 'Odense',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    title: "Eden Jaxx",
    place: '',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    title: "The Börger",
    place: '',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    title: "Square Burger",
    place: '',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    title: "Liban Cuisine",
    place: '',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    title: "The Midwestern Diner",
    place: '',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    title: "Max Hamburger",
    place: '',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    title: "Skovgrillen",
    place: '',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  },
  {
    title: "Café Farø Vad",
    place: '',
    openinghours: 'mon-fri 10-22 sat-sun 12-22'
  }
]

  return (
    <PageLayout name="Spots">
      <List list={list} />
    </PageLayout>
  );
}

export default Spots;