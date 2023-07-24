import { ComponentFixture, TestBed } from "@angular/core/testing";
import { StatsService } from "src/app/core/services/stats.service";

import { ContinentDistributionChartComponent } from "./continent-distribution-chart.component";

describe("ContinentDistributionChartComponent", () => {
  let component: ContinentDistributionChartComponent;
  let fixture: ComponentFixture<ContinentDistributionChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContinentDistributionChartComponent],
      providers: [
        {
          provide: StatsService,
          useValue: {
            continentStatistics: [
              {
                continent: "Europe",
                countries: "15",
              },
            ],
          },
        },
      ],
    });
    fixture = TestBed.createComponent(ContinentDistributionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
