import { HttpClient } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { of } from "rxjs";
import { HttpService } from "src/app/core/services/http.service";
import { StatsService } from "src/app/core/services/stats.service";

import { CountryListComponent } from "./country-list.component";

describe("CountryListComponent", () => {
  let component: CountryListComponent;
  let fixture: ComponentFixture<CountryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryListComponent],
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
    fixture = TestBed.createComponent(CountryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should perform updateSearchParam", () => {
    const spyGetCountryList = spyOn(
      component.statsService,
      "getCountryList"
    ).and.stub();

    component.updateSearchParam("abc");

    expect(spyGetCountryList).toHaveBeenCalled();
    expect(component.statsService.searchCountryParam).toEqual("abc");
  });

  it("should perform updateSearchParam", () => {
    const spyNavigate = spyOn(
      component["router"] as any,
      "navigate"
    ).and.stub();

    component.goToCountryDetailsPage("code");

    expect(spyNavigate).toHaveBeenCalledWith([
      "home/data-dashboard/country-details",
      "code",
    ]);
  });
});
