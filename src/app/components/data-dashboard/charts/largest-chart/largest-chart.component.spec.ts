import { ComponentFixture, TestBed } from "@angular/core/testing";
import { StatsService } from "src/app/core/services/stats.service";

import { LargestChartComponent } from "./largest-chart.component";

describe("LargestChartComponent", () => {
  let component: LargestChartComponent;
  let fixture: ComponentFixture<LargestChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LargestChartComponent],
      providers: [
        {
          provide: StatsService,
          useValue: {
            sizeStatistics: [
              {
                country: "Portugal",
                area: 1,
              },
            ],
          },
        },
      ],
    });
    fixture = TestBed.createComponent(LargestChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
