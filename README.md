# WorldStats

WorldStats is a Angular SPA example in Angular 16 + Typescript

## Requirements

Node.js version -> ^16.14.0 || ^18.10.0 -> You can install node following instructions in https://nodejs.org/en/download

## Get Started

Clone the application

```bash
git clone https://github.com/alinemayworm/worldstats.git
cd worldstats
```

## Installation

Install the dependencies running npm install command - make sure to be on branch main when doing this.

```bash
npm install
```

## Running the application

After installing the dependencies, run the application using the command npm run start or ng serve in the root of the project
Please run the application on branch main so you can see the all the features implemented so far.

```bash
npm run start
```
In the browser, go to http://localhost:4200/ (if this port was in use when you run the application, go to the port indicated in the terminal where the app is being served)

## Features

Once you open the application, you will see our Welcome Screen. Click on Start to open the Statistics dashboard.

-In the dashboard, the navigation bar will display your options: you can choose to see the Statistics of All countries (world), of a continent or Search for a country.
By default, app will display All countries. Navigation bar is also collapsable (chevron icon on top will expand / collapse the navigation bar)

-Clicking in options All or a Continent, you will see the statistics of the world of the continent selected.

-Clicking in search, you will see a list where you can search for the country you want.
  If you don't search for any country, the list will display all countries
  If you search, the list will refresh to display the countries whose name matches the search input.

-Clicking on a card country, you will see the selected country information.


## Testing the application

To run the tests, run npm run test or ng test in the root of the project

```bash
npm run test
```

## Checking the coverage

To run the tests with code coverage, inside /worldstats folder, ng test --code-coverage . A folder coverage/ will be created in the root of the project. Open the file coverage/worldstats-app/index.html in your browser and check the coverage of the unit tests.

```bash
npm run test --code-coverage
```

## Technology used

Besides Angular 16 + typescript, the other tech / libraries used are:

-FOR UI: tailwind.css - Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables. (https://tailwindcss.com/)

-FOR ICONS: @mdi/font - Icon library for Material Design Icons (https://www.npmjs.com/package/@mdi/font)

-FOR GRAPHICS: chart.js - Chart.js is a free, open-source JavaScript library (https://www.chartjs.org/)

-FOR MAPS: @types/googlemaps - Types for the Google Maps browser API

-FOR TESTING: the usual for angular - Jasmine and Karma

-API: Rest Countries - Open Source API with countries data (https://restcountries.com/)

## Extras and improvements I'd like to add

This application was developed in very short time.
So, some things were left to a second plan. But here are some things I'd like to improve / add soon:

-Add more statistics and country information

-Remove google maps and add open library map instead

-Some extra animations to make the transitions smoother

-Improve design, routing, loading and error handling

-Create a chart factory in order to reuse code

-Create a node server to stop relying on Rest Countries API and have my own API, so it is possible not only see readonly data, but also create new imaginary countries :)
