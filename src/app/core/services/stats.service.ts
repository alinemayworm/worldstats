import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Observer } from "rxjs";
import { REGION_OPTIONS } from "src/app/shared/app.constants";
import { ICountry, ICountryListItem } from "src/app/shared/interfaces/country";
import {
  IBordersStatistics,
  IContinentStatistics,
  IDependencyStatistics,
  ILanguageData,
  ILanguageStatistics,
  IPopulationStatistics,
  ISizeStatistics,
} from "src/app/shared/interfaces/statistics";

@Injectable()
export class StatsService {
  constructor(private http: HttpClient) {}

  private baseUrl = "https://restcountries.com/v3.1";
  public menuOptionSelected: string = REGION_OPTIONS[0];
  public allCountriesInfo: ICountry[] = [];
  public languagesStatistics: ILanguageStatistics[] = [];
  public continentStatistics: IContinentStatistics[] = [];
  public dependencyStatistics: IDependencyStatistics[] = [];
  public populationStatistics: IPopulationStatistics[] = [];
  public bordersStatistics: IBordersStatistics[] = [];
  public sizeStatistics: ISizeStatistics[] = [];
  public countryList: ICountryListItem[] = [];
  public searchCountryParam: string = "";
  public loading = false;

  public getAllCountriesInformation(): void {
    this.loading = true;

    this.http
      .get(`${this.baseUrl}/all`)
      .subscribe((results: Partial<Observer<ICountry[]>>) => {
        if (this.menuOptionSelected !== "All") {
          this.allCountriesInfo = (results as ICountry[]).filter(
            (country: ICountry) =>
              country.continents.includes(this.menuOptionSelected)
          );
          this.getBordersStatistics();
          this.getLargestCountries();
        } else {
          this.allCountriesInfo = results as ICountry[];
          this.getCountriesByContinentStatistics();
          this.getDependencyStatistics();
        }

        this.getWorldLanguagesStatistics();
        this.getWorldLargestPopulations();
        this.loading = false;
      });
  }

  private getWorldLanguagesStatistics(): void {
    const languageData: ILanguageData[] = this.allCountriesInfo.map(
      (country: ICountry) => {
        return {
          name: country.name.official,
          languages: country.languages ? Object.values(country.languages) : [],
        };
      }
    );

    const languages: string[] = languageData.reduce(
      (accumulator: string[], currentValue: ILanguageData) =>
        accumulator.concat(currentValue.languages),
      []
    );

    const allLanguages: Set<string> = new Set(languages);

    const languagesStatistics: ILanguageStatistics[] = [];

    allLanguages.forEach((language: string) => {
      languagesStatistics.push({
        language: language,
        quantity: languageData.filter((data: ILanguageData) =>
          data.languages.includes(language)
        ).length,
      });
    });

    this.languagesStatistics = languagesStatistics
      .sort(
        (a: ILanguageStatistics, b: ILanguageStatistics) =>
          b.quantity - a.quantity
      )
      .slice(0, 8);
  }

  private getWorldLargestPopulations(): void {
    const population = this.allCountriesInfo.map((country: ICountry) => {
      return {
        country: country.name.official,
        population: country.population,
      };
    });

    this.populationStatistics = population
      .sort(
        (a: IPopulationStatistics, b: IPopulationStatistics) =>
          b.population - a.population
      )
      .slice(0, 10);
  }

  private getCountriesByContinentStatistics(): void {
    const continents = REGION_OPTIONS.filter((option) => option !== "All");

    this.continentStatistics = continents.map((continent) => {
      return {
        continent: continent,
        countries: this.allCountriesInfo.filter((country: ICountry) =>
          country.continents.includes(continent)
        ).length,
      };
    });
  }

  private getDependencyStatistics(): void {
    this.http
      .get(`${this.baseUrl}/independent?status?=true`)
      .subscribe((results: Partial<Observer<ICountry[]>>) => {
        this.dependencyStatistics = [
          { status: "Independent", quantity: (results as ICountry[]).length },

          {
            status: "Dependent",
            quantity:
              this.allCountriesInfo.length - (results as ICountry[]).length,
          },
        ];
      });
  }

  private getBordersStatistics(): void {
    const borders = this.allCountriesInfo.map((country: ICountry) => {
      return {
        country: country.name.official,
        borders: country.borders?.length || 0,
      };
    });

    this.bordersStatistics = borders
      .sort(
        (a: IBordersStatistics, b: IBordersStatistics) => b.borders - a.borders
      )
      .slice(0, 10);
  }

  private getLargestCountries(): void {
    const largetsCountries = this.allCountriesInfo.map((country: ICountry) => {
      return {
        country: country.name.official,
        area: country.area,
      };
    });

    this.sizeStatistics = largetsCountries
      .sort((a: ISizeStatistics, b: ISizeStatistics) => b.area - a.area)
      .slice(0, 8);
  }

  public getCountryList(): void {
    this.http
      .get(`${this.baseUrl}/all`)
      .subscribe((results: Partial<Observer<ICountry[]>>) => {
        this.countryList = (results as ICountry[])
          .map((country: ICountry) => {
            return {
              name: country.name.official,
              continent: country.continents,
              code: country.cca2,
            };
          })
          .filter((country: ICountryListItem) =>
            country.name.includes(this.searchCountryParam)
          )
          .sort((a: ICountryListItem, b: ICountryListItem) => {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          });
      });
  }

  public getCountryDetails(code: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/alpha/${code}`);
  }
}
