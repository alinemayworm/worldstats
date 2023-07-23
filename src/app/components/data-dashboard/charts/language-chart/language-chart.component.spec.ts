import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageChartComponent } from './language-chart.component';

describe('LanguageChartComponent', () => {
  let component: LanguageChartComponent;
  let fixture: ComponentFixture<LanguageChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LanguageChartComponent]
    });
    fixture = TestBed.createComponent(LanguageChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
