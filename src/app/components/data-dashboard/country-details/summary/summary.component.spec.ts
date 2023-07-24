import { SummaryComponent } from "./summary.component";

describe("SummaryComponent", () => {
  let component: SummaryComponent;

  const mockCountryDetails = {
    population: 1,
    area: 1,
    currencies: {
      USD: { name: "US Dollar" },
    },
  };

  beforeEach(() => {
    component = new SummaryComponent();
    component.countryDetails = mockCountryDetails as any;

    // Provide a mock countryDetails object with the currencies property defined
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should perform getDensity", () => {
    (component.countryDetails as any) = {
      population: 50,
      area: 6,
    };
    const response = component.getDensity();
    expect(response).toEqual(8);
  });

  it("should perform getCurrency", () => {
    (component.countryDetails as any) = {
      currencies: {
        USD: { name: "US Dollars" },
      },
    };
    const response = component.getCurrency();
    expect(response).toEqual("USD - US Dollars");
  });

  it("should perform getCurrency", () => {
    (component.countryDetails as any) = {
      currencies: null,
    };
    const response = component.getCurrency();
    expect(response).toEqual("N/A");
  });
});
