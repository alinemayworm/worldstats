import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { StatsService } from "src/app/core/services/stats.service";

@Component({
  selector: "app-country-details",
  templateUrl: "./country-details.component.html",
  styleUrls: ["./country-details.component.css"],
})
export class CountryDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private statsService: StatsService
  ) {}

  public countryDetails: any = null;

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.statsService
        .getCountryDetails(params.code)
        .subscribe((results: any) => {
          this.countryDetails = results[0];
        });
    });
  }

  public navigateToList() {
    this.router.navigate(["/home/data-dashboard"]);
    this.statsService.menuOptionSelected = "Search";
  }
}
