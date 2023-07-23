import { Component, OnInit } from "@angular/core";
import { Chart, registerables } from "chart.js";
import { StatsService } from "src/app/core/services/stats.service";
import { IPopulationStatistics } from "src/app/shared/interfaces/statistics";

Chart.register(...registerables);
@Component({
  selector: "app-population-chart",
  templateUrl: "./population-chart.component.html",
  styleUrls: ["./population-chart.component.css"],
})
export class PopulationChartComponent implements OnInit {
  constructor(private statsService: StatsService) {}

  ngOnInit(): void {
    const ctx = document.getElementById("populationChart");

    new Chart(ctx as any, {
      type: "bar",
      data: {
        labels: this.statsService.populationStatistics.map(
          (populationStatistic: IPopulationStatistics) =>
            populationStatistic.country
        ),

        datasets: [
          {
            label: "Population",
            data: this.statsService.populationStatistics.map(
              (populationStatistic: IPopulationStatistics) =>
                populationStatistic.population
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
