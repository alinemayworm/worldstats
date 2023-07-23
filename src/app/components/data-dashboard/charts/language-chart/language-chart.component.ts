import { Component, OnInit } from "@angular/core";
import { Chart, registerables } from "chart.js";
import { StatsService } from "src/app/core/services/stats.service";

Chart.register(...registerables);

@Component({
  selector: "app-language-chart",
  templateUrl: "./language-chart.component.html",
  styleUrls: ["./language-chart.component.css"],
})
export class LanguageChartComponent implements OnInit {
  private langChart!: Chart;

  constructor(private statsService: StatsService) {
    this.langChart = {} as Chart;
  }

  ngOnInit(): void {
    const ctx = document.getElementById("langChart");

    new Chart(ctx as any, {
      type: "pie",
      data: {
        labels: this.statsService.languagesStatistics.map(
          (lang: any) => lang.language + "-" + lang.quantity
        ),
        datasets: [
          {
            label: "Languages",
            data: this.statsService.languagesStatistics.map(
              (lang: any) => lang.quantity
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
