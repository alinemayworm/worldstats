export interface ICountry {
  name: ICountryName;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  independent: boolean;
  status: string;
  currencies: Object;
  idd: ICountryIdd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Object;
  translations: Object;
  latlng: number[];
  landlocked: boolean;
  population: number;
  borders: string[];
  area: number;
  demonyms: Object;
  maps: Object;
  gini: Object;
  fifa: string;
  car: ICountryCar;
  timezones: string[];
  continents: string[];
  flags: Object;
  coatOfArms: Object;
  startOfWeek: string;
  capitalInfo: ICapitalInfo;
  postalCode: IPostalCode;
}

export interface ICountryListItem {
  name: string;
  continent: string[];
  code: string;
}

declare interface ICountryName {
  common: string;
  official: string;
}

declare interface ICountryIdd {
  root: string;
  suffixes: string[];
}

declare interface ICountryCar {
  signs: string[];
  side: "left" | "right";
}

declare interface ICapitalInfo {
  latlng: number[];
}

declare interface IPostalCode {
  format: string;
  regex: RegExp;
}
