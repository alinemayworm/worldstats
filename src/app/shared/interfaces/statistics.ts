export interface ILanguageStatistics {
  language: string;
  quantity: number;
}

export interface IPopulationStatistics {
  country: string;
  population: number;
}

export interface IContinentStatistics {
  continent: string;
  countries: number;
}

export interface IDependencyStatistics {
  status: string;
  quantity: number;
}

export interface IBordersStatistics {
  country: string;
  borders: number;
}

export interface ISizeStatistics {
  country: string;
  area: number;
}

export interface ILanguageData {
  name: string;
  languages: string[];
}
