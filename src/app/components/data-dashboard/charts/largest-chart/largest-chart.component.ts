import { Component, OnInit } from "@angular/core";
import { Chart, registerables } from "chart.js";
import { StatsService } from "src/app/core/services/stats.service";
import { ISizeStatistics } from "src/app/shared/interfaces/statistics";

Chart.register(...registerables);
@Component({
  selector: "app-largest-chart",
  templateUrl: "./largest-chart.component.html",
  styleUrls: ["./largest-chart.component.css"],
})
export class LargestChartComponent implements OnInit {
  constructor(private statsService: StatsService) {}

  ngOnInit(): void {
    const ctx = document.getElementById("largestChart");

    new Chart(ctx as any, {
      type: "pie",
      data: {
        labels: this.statsService.sizeStatistics.map(
          (sizeStatistic: ISizeStatistics) => sizeStatistic.country
        ),
        datasets: [
          {
            label: "Largests Countries",
            data: this.statsService.sizeStatistics.map(
              (sizeStatistic: ISizeStatistics) => sizeStatistic.area
            ),

            backgroundColor: [
              "#D5E4FA",
              "#E5D6FB",
              "#FBD4F5",
              "#FFFDC7",
              "#EAEBE6",
            ],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "right",
          },
        },
      },
    });
  }
}
