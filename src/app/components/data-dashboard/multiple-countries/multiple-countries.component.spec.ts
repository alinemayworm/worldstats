import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MultipleCountriesComponent } from "./multiple-countries.component";

describe("AllCountriesComponent", () => {
  let component: MultipleCountriesComponent;
  let fixture: ComponentFixture<MultipleCountriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultipleCountriesComponent],
    });
    fixture = TestBed.createComponent(MultipleCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
