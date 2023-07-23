import { Component } from "@angular/core";
import { HttpService } from "src/app/core/services/http.service";
import { StatsService } from "src/app/core/services/stats.service";
import { fadeIn } from "src/app/shared/animations/animations";

@Component({
  selector: "app-data-dashboard",
  templateUrl: "./data-dashboard.component.html",
  styleUrls: ["./data-dashboard.component.css"],
  animations: [fadeIn()],
})
export class DataDashboardComponent {
  constructor(private http: HttpService, public statsService: StatsService) {}
}
