import { Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Observer } from "rxjs";
import { StatsService } from "src/app/core/services/stats.service";
import { ICountry } from "src/app/shared/interfaces/country";

@Component({
  selector: "app-country-details",
  templateUrl: "./country-details.component.html",
  styleUrls: ["./country-details.component.css"],
})
export class CountryDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private statsService: StatsService,
    private sanitizer: DomSanitizer
  ) {}

  public countryDetails!: ICountry;

  ngOnInit(): void {
    this.route.params.subscribe((params: Partial<Observer<Params>>) => {
      this.statsService
        .getCountryDetails((params as { code: string }).code)
        .subscribe((results: Partial<Observer<ICountry[]>>) => {
          this.countryDetails = (results as ICountry[])[0];
        });
    });
  }

  public navigateToList(): void {
    this.router.navigate(["/home/data-dashboard"]);
    this.statsService.menuOptionSelected = "Search";
  }

  public flagImg(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      this.countryDetails.flags.png
    );
  }

  public flagAlt(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      this.countryDetails.flags.alt
    );
  }

  public coatOfArmsImg(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      this.countryDetails.coatOfArms.png
    );
  }
}
