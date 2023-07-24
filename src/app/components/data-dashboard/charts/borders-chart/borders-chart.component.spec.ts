import { ComponentFixture, TestBed } from "@angular/core/testing";
import { StatsService } from "src/app/core/services/stats.service";

import { BordersChartComponent } from "./borders-chart.component";

describe("BordersChartComponent", () => {
  let component: BordersChartComponent;
  let fixture: ComponentFixture<BordersChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BordersChartComponent],
      providers: [
        {
          provide: StatsService,
          useValue: {
            bordersStatistics: [
              {
                country: "DE",
                borders: "4",
              },
            ],
          },
        },
      ],
    });
    fixture = TestBed.createComponent(BordersChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
