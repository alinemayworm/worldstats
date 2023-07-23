import { Component, OnInit } from "@angular/core";
import { Chart, registerables } from "chart.js";
import { StatsService } from "src/app/core/services/stats.service";

Chart.register(...registerables);
@Component({
  selector: "app-independency-status-chart",
  templateUrl: "./independency-status-chart.component.html",
  styleUrls: ["./independency-status-chart.component.css"],
})
export class IndependencyStatusChartComponent implements OnInit {
  private independencyStatusChart!: Chart;

  constructor(private statsService: StatsService) {
    this.independencyStatusChart = {} as Chart;
  }

  ngOnInit(): void {
    const ctx = document.getElementById("independencyStatusChart");

    new Chart(ctx as any, {
      type: "pie",
      data: {
        labels: this.statsService.dependencyStatistics.map(
          (dependency: any) => dependency.status
        ),
        datasets: [
          {
            label: "Independency Status",
            data: this.statsService.dependencyStatistics.map(
              (lang: any) => lang.quantity
            ),

            backgroundColor: ["#D5E4FA", "#E5D6FB"],
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
