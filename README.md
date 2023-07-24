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

Install the dependencies running npm install command

```bash
npm install
```

## Running the application

After installing the dependencies, run the application using the command npm run start or ng serve in the root of the project

```bash
npm run start
```

In the browser, go to http://localhost:4200/ (if this port was in use when you run the application, go to the port indicated in the terminal where the app is being served)

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

-Remove google maps and add open library map instead

-Some extra animations to make the transitions smoother

-Improve design, routing, loading and error handling

-Create a chart factory in order to reuse code

-Create a node server to stop relying on Rest Countries API and have my own API, so it is possible not only see readonly data, but also create new imaginary countries :)
