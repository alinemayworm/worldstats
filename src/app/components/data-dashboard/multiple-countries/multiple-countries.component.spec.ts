import { HttpClient } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { HttpService } from "src/app/core/services/http.service";
import { StatsService } from "src/app/core/services/stats.service";

import { MultipleCountriesComponent } from "./multiple-countries.component";

describe("MultipleCountriesComponent", () => {
  let component: MultipleCountriesComponent;
  let fixture: ComponentFixture<MultipleCountriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultipleCountriesComponent],
      providers: [
        StatsService,
        HttpService,
        {
          provide: HttpClient,
          useValue: {
            get: () => of(),
          },
        },
      ],
    });
    fixture = TestBed.createComponent(MultipleCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
