import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndependencyStatusChartComponent } from './independency-status-chart.component';

describe('IndependencyStatusChartComponent', () => {
  let component: IndependencyStatusChartComponent;
  let fixture: ComponentFixture<IndependencyStatusChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndependencyStatusChartComponent]
    });
    fixture = TestBed.createComponent(IndependencyStatusChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
