import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { StatsService } from "src/app/core/services/stats.service";

@Component({
  selector: "app-country-list",
  templateUrl: "./country-list.component.html",
  styleUrls: ["./country-list.component.css"],
})
export class CountryListComponent implements OnInit {
  constructor(public statsService: StatsService, private router: Router) {}

  updateSearchParam(param: string) {
    this.statsService.searchCountryParam = param;
    this.statsService.getCountryList();
  }

  goToCountryDetailsPage(code: string) {
    this.router.navigate(["home/data-dashboard/country-details", code]);
  }

  ngOnInit() {
    this.updateSearchParam("");
  }
}
