import { ComponentFixture, TestBed } from "@angular/core/testing";
import { StatsService } from "src/app/core/services/stats.service";

import { PopulationChartComponent } from "./population-chart.component";

const mockStatsService = {
  populationStatistics: [
    {
      country: "country",
      population: 1,
    },
  ],
};

describe("PopulationChartComponent", () => {
  let component: PopulationChartComponent;
  let fixture: ComponentFixture<PopulationChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopulationChartComponent],
      providers: [
        {
          provide: StatsService,
          useValue: mockStatsService,
        },
      ],
    });
    fixture = TestBed.createComponent(PopulationChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    component = new PopulationChartComponent(mockStatsService as any);
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
