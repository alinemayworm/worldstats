import { Component, OnInit } from "@angular/core";
import { Chart, registerables } from "chart.js";
import { StatsService } from "src/app/core/services/stats.service";

Chart.register(...registerables);

@Component({
  selector: "app-continent-distribution-chart",
  templateUrl: "./continent-distribution-chart.component.html",
  styleUrls: ["./continent-distribution-chart.component.css"],
})
export class ContinentDistributionChartComponent implements OnInit {
  constructor(private statsService: StatsService) {}

  ngOnInit(): void {
    const ctx = document.getElementById("continentDistributionChart");

    new Chart(ctx as any, {
      type: "bar",
      data: {
        labels: this.statsService.continentStatistics.map(
          (continentStatistic: any) => continentStatistic.continent
        ),

        datasets: [
          {
            label: "Countries",
            data: this.statsService.continentStatistics.map(
              (continentStatistic: any) => continentStatistic.countries
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
