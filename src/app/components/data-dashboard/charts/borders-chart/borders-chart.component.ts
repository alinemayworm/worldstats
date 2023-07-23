import { Component, OnInit } from "@angular/core";
import { Chart, registerables } from "chart.js";
import { StatsService } from "src/app/core/services/stats.service";
@Component({
  selector: "app-borders-chart",
  templateUrl: "./borders-chart.component.html",
  styleUrls: ["./borders-chart.component.css"],
})
export class BordersChartComponent implements OnInit {
  constructor(private statsService: StatsService) {}

  ngOnInit(): void {
    const ctx = document.getElementById("bordersChart");

    new Chart(ctx as any, {
      type: "bar",
      data: {
        labels: this.statsService.bordersStatistics.map(
          (bordersStatistic: any) => bordersStatistic.country
        ),

        datasets: [
          {
            label: "Borders",
            data: this.statsService.bordersStatistics.map(
              (bordersStatistic: any) => bordersStatistic.borders
            ),

            backgroundColor: [
              "#D5E4FA",
              "#E5D6FB",
              "#EAEBE6",
              "#FFFDC7",
              "#FBD4F5",
            ],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
