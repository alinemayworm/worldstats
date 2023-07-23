import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { REGION_OPTIONS } from "src/app/shared/app.constants";

@Injectable()
export class StatsService {
  constructor(private http: HttpClient) {}

  private baseUrl = "https://restcountries.com/v3.1";
  public menuOptionSelected: string = REGION_OPTIONS[0];
  public allCountriesInfo: any = [];
  public languagesStatistics: any = [];
  public continentStatistics: any = [];
  public dependencyStatistics: any = [];
  public populationStatistics: any = [];
  public bordersStatistics: any = [];
  public sizeStatistics: any = [];
  public countryList: any = [];
  public searchCountryParam: string = "";
  public loading = false;

  public getAllCountriesInformation(): void {
    this.loading = true;

    this.http.get(`${this.baseUrl}/all`).subscribe((results: any) => {
      if (this.menuOptionSelected !== "All") {
        this.allCountriesInfo = results.filter((country: any) =>
          country.continents.includes(this.menuOptionSelected)
        );
        this.getBordersStatistics();
        this.getLargestCountries();
      } else {
        this.allCountriesInfo = results;
        this.getCountriesByContinentStatistics();
        this.getDependencyStatistics();
      }

      this.getWorldLanguagesStatistics();
      this.GetWorldLargestPopulations();
      this.loading = false;
    });
  }

  private getWorldLanguagesStatistics() {
    const languageData = this.allCountriesInfo.map((country: any) => {
      return {
        name: country.name,
        languages: country.languages ? Object.values(country.languages) : [],
      };
    });

    let allLanguages = languageData.reduce(
      (accumulator: any, currentValue: any) =>
        accumulator.concat(currentValue.languages),
      []
    );

    allLanguages = new Set(allLanguages);

    const languagesStatistics: any = [];

    allLanguages.forEach((language: any) => {
      languagesStatistics.push({
        language: language,
        quantity: languageData.filter((country: any) =>
          country.languages.includes(language)
        ).length,
      });
    });

    this.languagesStatistics = languagesStatistics
      .sort((a: any, b: any) => b.quantity - a.quantity)
      .slice(0, 8);
  }

  private GetWorldLargestPopulations() {
    const population = this.allCountriesInfo.map((country: any) => {
      return {
        country: country.name.official,
        population: country.population,
      };
    });

    this.populationStatistics = population
      .sort((a: any, b: any) => b.population - a.population)
      .slice(0, 10);
  }

  private getCountriesByContinentStatistics() {
    const continents = REGION_OPTIONS.filter((option) => option !== "All");

    this.continentStatistics = continents.map((continent) => {
      return {
        continent: continent,
        countries: this.allCountriesInfo.filter((country: any) =>
          country.continents.includes(continent)
        ).length,
      };
    });
  }

  private getDependencyStatistics() {
    this.http
      .get(`${this.baseUrl}/independent?status?=true`)
      .subscribe((results: any) => {
        this.dependencyStatistics = [
          { status: "Independent", quantity: results.length },

          {
            status: "Dependent",
            quantity: this.allCountriesInfo.length - results.length,
          },
        ];
      });
  }

  private getBordersStatistics() {
    const borders = this.allCountriesInfo.map((country: any) => {
      return {
        country: country.name.official,
        borders: country.borders?.length || 0,
      };
    });

    this.bordersStatistics = borders
      .sort((a: any, b: any) => b.borders - a.borders)
      .slice(0, 10);
  }

  private getLargestCountries() {
    const largetsCountries = this.allCountriesInfo.map((country: any) => {
      return {
        country: country.name.official,
        area: country.area,
      };
    });

    this.sizeStatistics = largetsCountries
      .sort((a: any, b: any) => b.area - a.area)
      .slice(0, 8);
  }

  public getCountryList() {
    this.http.get(`${this.baseUrl}/all`).subscribe((results: any) => {
      this.countryList = results
        .map((country: any) => {
          return {
            name: country.name.official,
            continent: country.continents,
            code: country.cca2,
          };
        })
        .filter((country: any) =>
          country.name.includes(this.searchCountryParam)
        )
        .sort((a: any, b: any) => {
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

  public getCountryDetails(code: string) {
    return this.http.get(`${this.baseUrl}/alpha/${code}`);
  }
}
