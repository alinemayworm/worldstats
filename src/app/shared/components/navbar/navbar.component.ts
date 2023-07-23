import { Component } from "@angular/core";
import { StatsService } from "src/app/core/services/stats.service";
import { REGION_OPTIONS } from "../../app.constants";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent {
  constructor(public statsService: StatsService) {}

  allCountries = "All";

  menuItems = REGION_OPTIONS.slice(1);

  setOption(region: string) {
    this.statsService.regionSelected = region;
    this.statsService.getAllCountriesInformation();
  }
}
