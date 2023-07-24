import { ComponentFixture, TestBed } from "@angular/core/testing";
import { StatsService } from "src/app/core/services/stats.service";

import { LanguageChartComponent } from "./language-chart.component";

describe("LanguageChartComponent", () => {
  let component: LanguageChartComponent;
  let fixture: ComponentFixture<LanguageChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LanguageChartComponent],
      providers: [
        {
          provide: StatsService,
          useValue: {
            languagesStatistics: [
              {
                name: "language",
                languages: ["pt"],
              },
            ],
          },
        },
      ],
    });
    fixture = TestBed.createComponent(LanguageChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
