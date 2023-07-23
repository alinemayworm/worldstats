import { Component, OnInit } from "@angular/core";
import { StatsService } from "src/app/core/services/stats.service";
import { REGION_OPTIONS } from "../../app.constants";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  constructor(public statsService: StatsService) {}

  public expanded = true;
  public allCountries = "All";
  public menuItems = REGION_OPTIONS.slice(1);
  public searchCountry = "Search";

  ngOnInit(): void {
    this.getInformation();
  }

  public toggleExpanded(): void {
    this.expanded = !this.expanded;
  }

  public setOption(option: string): void {
    this.statsService.menuOptionSelected = option;
    this.getInformation();
  }

  private getInformation(): void {
    if (this.statsService.menuOptionSelected !== "Search") {
      this.statsService.getAllCountriesInformation();
    } else {
      this.statsService.getCountryList();
    }
  }
}
