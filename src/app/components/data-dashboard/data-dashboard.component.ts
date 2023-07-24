import { Component } from "@angular/core";
import { StatsService } from "src/app/core/services/stats.service";
import { fadeIn } from "src/app/shared/animations/animations";

@Component({
  selector: "app-data-dashboard",
  templateUrl: "./data-dashboard.component.html",
  styleUrls: ["./data-dashboard.component.css"],
  animations: [fadeIn()],
})
export class DataDashboardComponent {
  constructor(public statsService: StatsService) {}
}
