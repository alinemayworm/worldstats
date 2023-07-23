import { Component, Input } from "@angular/core";

@Component({
  selector: "app-summary",
  templateUrl: "./summary.component.html",
  styleUrls: ["./summary.component.css"],
})
export class SummaryComponent {
  @Input()
  countryDetails: any;

  constructor() {
    this.countryDetails = {};
  }

  getDensity() {
    return Math.round(
      this.countryDetails.population / this.countryDetails.area
    );
  }

  getCurrency() {
    if (this.countryDetails.currencies) {
      const code = Object.keys(this.countryDetails.currencies)[0];
      return code + " - " + this.countryDetails.currencies[code].name;
    }
    return "N/A";
  }
}
