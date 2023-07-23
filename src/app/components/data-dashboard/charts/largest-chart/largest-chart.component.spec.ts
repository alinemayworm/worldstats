import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargestChartComponent } from './largest-chart.component';

describe('LargestChartComponent', () => {
  let component: LargestChartComponent;
  let fixture: ComponentFixture<LargestChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LargestChartComponent]
    });
    fixture = TestBed.createComponent(LargestChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
