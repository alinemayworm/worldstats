import { fakeAsync, tick } from "@angular/core/testing";
import { of } from "rxjs";
import { REGION_OPTIONS } from "src/app/shared/app.constants";
import { StatsService } from "./stats.service";

describe("HttpService", () => {
  let service: StatsService;

  let mockHttp = {
    get: () => of(),
  };
  beforeEach(() => {
    service = new StatsService(mockHttp as any);
  });

  it("should create", () => {
    expect(service).toBeTruthy();
  });

  it("should perform getAllCountriesInformation - menu !== All", fakeAsync(() => {
    service.menuOptionSelected = "SomeContinent";
    const spyGet = spyOn(service["http"], "get" as any).and.returnValue(
      of([{ continents: ["SomeContinent"] }])
    );
    const spyBorders = spyOn(service, "getBordersStatistics" as any).and.stub();
    const spyLargests = spyOn(service, "getLargestCountries" as any).and.stub();
    const spyContinent = spyOn(
      service,
      "getCountriesByContinentStatistics" as any
    ).and.stub();
    const spyDependencies = spyOn(
      service,
      "getDependencyStatistics" as any
    ).and.stub();
    const spyLanguages = spyOn(
      service,
      "getWorldLanguagesStatistics" as any
    ).and.stub();
    const spyPopulation = spyOn(
      service,
      "getWorldLargestPopulations" as any
    ).and.stub();

    service.getAllCountriesInformation();
    tick(50);

    expect(spyPopulation).toHaveBeenCalled();
    expect(spyLanguages).toHaveBeenCalled();
    expect(spyBorders).toHaveBeenCalled();
    expect(spyLargests).toHaveBeenCalled();
    expect(spyGet).toHaveBeenCalled();

    expect(spyContinent).not.toHaveBeenCalled();
    expect(spyDependencies).not.toHaveBeenCalled();

    expect(service.allCountriesInfo[0] as any).toEqual({
      continents: ["SomeContinent"],
    });
  }));

  it("should perform getAllCountriesInformation - menu === All", fakeAsync(() => {
    service.menuOptionSelected = "All";
    const spyGet = spyOn(service["http"], "get" as any).and.returnValue(
      of([{ continents: ["SomeContinent"] }])
    );
    const spyBorders = spyOn(service, "getBordersStatistics" as any).and.stub();
    const spyLargests = spyOn(service, "getLargestCountries" as any).and.stub();
    const spyContinent = spyOn(
      service,
      "getCountriesByContinentStatistics" as any
    ).and.stub();
    const spyDependencies = spyOn(
      service,
      "getDependencyStatistics" as any
    ).and.stub();
    const spyLanguages = spyOn(
      service,
      "getWorldLanguagesStatistics" as any
    ).and.stub();
    const spyPopulation = spyOn(
      service,
      "getWorldLargestPopulations" as any
    ).and.stub();

    service.getAllCountriesInformation();
    tick(50);

    expect(spyGet).toHaveBeenCalled();
    expect(spyPopulation).toHaveBeenCalled();
    expect(spyLanguages).toHaveBeenCalled();

    expect(spyContinent).toHaveBeenCalled();
    expect(spyDependencies).toHaveBeenCalled();

    expect(spyBorders).not.toHaveBeenCalled();
    expect(spyLargests).not.toHaveBeenCalled();

    expect(service.allCountriesInfo[0] as any).toEqual({
      continents: ["SomeContinent"],
    });
  }));

  it("should perform getWorldLanguagesStatistics", () => {
    service.allCountriesInfo = [
      {
        name: {
          official: "Valyrian peninsula",
        },
        languages: {
          valyrian: "valyrian",
        },
      },
      {
        name: {
          official: "Essos",
        },
        languages: {
          dothraki: "dothraki",
        },
      },

      {
        name: {
          official: "Westeros",
        },
        languages: {
          valyrian: "valyrian",
          dothraki: "dothraki",
        },
      },
      {
        name: {
          official: "",
        },
      },
    ] as any;

    service["getWorldLanguagesStatistics"]();

    expect(service.languagesStatistics).toEqual([
      {
        language: "valyrian",
        quantity: 2,
      },
      {
        language: "dothraki",
        quantity: 2,
      },
    ] as any);
  });

  it("should perform getWorldLargestPopulations", () => {
    service.allCountriesInfo = [
      {
        name: {
          official: "Valyrian peninsula",
        },
        population: 11,
      },
      {
        name: {
          official: "Essos",
        },
        population: 12,
      },
    ] as any;

    service["getWorldLargestPopulations"]();

    expect(service.populationStatistics).toEqual([
      {
        country: "Essos",
        population: 12,
      },
      {
        country: "Valyrian peninsula",
        population: 11,
      },
    ] as any);
  });

  it("should perform getCountriesByContinentStatistics", () => {
    service.allCountriesInfo = [
      {
        continents: ["Asia"],
      },
      {
        continents: ["Europe", "Oceania"],
      },
    ] as any;

    service["getCountriesByContinentStatistics"]();

    expect(service.continentStatistics).toEqual([
      {
        continent: "North America",
        countries: 0,
      },
      {
        continent: "South America",
        countries: 0,
      },
      {
        continent: "Europe",
        countries: 1,
      },
      {
        continent: "Asia",
        countries: 1,
      },
      {
        continent: "Oceania",
        countries: 1,
      },
    ] as any);
  });

  it("should perform getDependencyStatistics", fakeAsync(() => {
    service.allCountriesInfo = new Array(20);

    spyOn(service["http"] as any, "get").and.returnValue(of(new Array(15)));

    service["getDependencyStatistics"]();

    tick(50);

    expect(service.dependencyStatistics).toEqual([
      { status: "Independent", quantity: 15 },
      { status: "Dependent", quantity: 5 },
    ] as any);
  }));

  it("should perform getBordersStatistics", () => {
    service.allCountriesInfo = [
      {
        name: { official: "Florin" },
        borders: new Array(8),
      },
      {
        name: { official: "Genovia" },
        borders: new Array(16),
      },
    ] as any;

    service["getBordersStatistics"]();

    expect(service.bordersStatistics).toEqual([
      {
        country: "Genovia",
        borders: 16,
      },
      {
        country: "Florin",
        borders: 8,
      },
    ] as any);
  });

  it("should perform getBordersStatistics - no borders", () => {
    service.allCountriesInfo = [
      {
        name: { official: "Florin" },
        borders: null,
      },
      {
        name: { official: "Genovia" },
        borders: new Array(16),
      },
    ] as any;

    service["getBordersStatistics"]();

    expect(service.bordersStatistics).toEqual([
      {
        country: "Genovia",
        borders: 16,
      },
      {
        country: "Florin",
        borders: 0,
      },
    ] as any);
  });

  it("should perform getLargestCountries", () => {
    service.allCountriesInfo = [
      {
        name: { official: "Florin" },
        area: 123,
      },
      {
        name: { official: "Genovia" },
        area: 456,
      },
    ] as any;

    service["getLargestCountries"]();

    expect(service.sizeStatistics).toEqual([
      {
        country: "Genovia",
        area: 456,
      },
      {
        country: "Florin",
        area: 123,
      },
    ] as any);
  });

  it("should perform getCountryList - reorder", fakeAsync(() => {
    service.searchCountryParam = "C";
    const spyGet = spyOn(service["http"], "get" as any).and.returnValue(
      of([
        {
          name: {
            official: "Country2",
          },
          continents: ["continent"],
          cca2: "countryCode",
        },
        {
          name: {
            official: "Country1",
          },
          continents: ["continent"],
          cca2: "countryCode",
        },
      ])
    );

    service.getCountryList();
    tick(50);

    expect(service.countryList).toEqual([
      {
        name: "Country1",
        continent: ["continent"],
        code: "countryCode",
      },
      {
        name: "Country2",
        continent: ["continent"],
        code: "countryCode",
      },
    ]);
  }));

  it("should perform getCountryList - no reorder", fakeAsync(() => {
    service.searchCountryParam = "C";
    const spyGet = spyOn(service["http"], "get" as any).and.returnValue(
      of([
        {
          name: {
            official: "Country1",
          },
          continents: ["continent"],
          cca2: "countryCode",
        },
        {
          name: {
            official: "Country2",
          },
          continents: ["continent"],
          cca2: "countryCode",
        },
      ])
    );

    service.getCountryList();
    tick(50);

    expect(service.countryList).toEqual([
      {
        name: "Country1",
        continent: ["continent"],
        code: "countryCode",
      },
      {
        name: "Country2",
        continent: ["continent"],
        code: "countryCode",
      },
    ]);
  }));

  it("should perform getCountryList - same name", fakeAsync(() => {
    service.searchCountryParam = "C";
    const spyGet = spyOn(service["http"], "get" as any).and.returnValue(
      of([
        {
          name: {
            official: "Country1",
          },
          continents: ["continent"],
          cca2: "countryCode",
        },
        {
          name: {
            official: "Country1",
          },
          continents: ["continent"],
          cca2: "countryCode",
        },
      ])
    );

    service.getCountryList();
    tick(50);

    expect(service.countryList).toEqual([
      {
        name: "Country1",
        continent: ["continent"],
        code: "countryCode",
      },
      {
        name: "Country1",
        continent: ["continent"],
        code: "countryCode",
      },
    ]);
  }));

  it("should perform getCountryDetails - same name", () => {
    service.searchCountryParam = "C";
    const spyGet = spyOn(service["http"], "get" as any).and.returnValue(
      of({ details: "Test works!" })
    );

    service.getCountryDetails("code").subscribe((res) => {
      expect(spyGet).toHaveBeenCalled();

      expect(res.details).toEqual("Test works!");
    });
  });
});
