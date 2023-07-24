import { ComponentFixture, TestBed } from "@angular/core/testing";
import { StatsService } from "src/app/core/services/stats.service";

import { IndependencyStatusChartComponent } from "./independency-status-chart.component";

describe("IndependencyStatusChartComponent", () => {
  let component: IndependencyStatusChartComponent;
  let fixture: ComponentFixture<IndependencyStatusChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndependencyStatusChartComponent],
      providers: [
        {
          provide: StatsService,
          useValue: {
            dependencyStatistics: [
              {
                status: "dependent",
                quantity: 0,
              },
            ],
          },
        },
      ],
    });
    fixture = TestBed.createComponent(IndependencyStatusChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
