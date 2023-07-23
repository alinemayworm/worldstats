import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BordersChartComponent } from './borders-chart.component';

describe('BordersChartComponent', () => {
  let component: BordersChartComponent;
  let fixture: ComponentFixture<BordersChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BordersChartComponent]
    });
    fixture = TestBed.createComponent(BordersChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
