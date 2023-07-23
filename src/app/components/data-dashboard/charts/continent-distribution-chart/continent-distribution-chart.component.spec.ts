import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ContinentDistributionChartComponent } from "./continent-distribution-chart.component";

describe("PopulationChartComponent", () => {
  let component: ContinentDistributionChartComponent;
  let fixture: ComponentFixture<ContinentDistributionChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContinentDistributionChartComponent],
    });
    fixture = TestBed.createComponent(ContinentDistributionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
