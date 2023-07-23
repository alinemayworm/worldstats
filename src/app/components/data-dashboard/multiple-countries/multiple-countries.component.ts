import { Component } from "@angular/core";
import { StatsService } from "src/app/core/services/stats.service";

@Component({
  selector: "app-multiple-countries",
  templateUrl: "./multiple-countries.component.html",
  styleUrls: ["./multiple-countries.component.css"],
})
export class MultipleCountriesComponent {
  constructor(public statsService: StatsService) {}
}
