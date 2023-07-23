import { Component, Input } from "@angular/core";
import { ICountry } from "src/app/shared/interfaces/country";

@Component({
  selector: "app-summary",
  templateUrl: "./summary.component.html",
  styleUrls: ["./summary.component.css"],
})
export class SummaryComponent {
  @Input()
  public countryDetails: ICountry;

  constructor() {
    this.countryDetails = {} as ICountry;
  }

  public getDensity(): number {
    return Math.round(
      this.countryDetails.population / this.countryDetails.area
    );
  }

  public getCurrency(): string {
    if (this.countryDetails.currencies) {
      const code = Object.keys(this.countryDetails.currencies)[0];
      return code + " - " + (this.countryDetails.currencies as any)[code].name;
    }
    return "N/A";
  }
}
