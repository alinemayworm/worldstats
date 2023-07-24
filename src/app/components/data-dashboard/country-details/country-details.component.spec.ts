import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from "@angular/core/testing";
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { of } from "rxjs";
import { StatsService } from "src/app/core/services/stats.service";

import { CountryDetailsComponent } from "./country-details.component";

describe("CountryDetailsComponent", () => {
  let component: CountryDetailsComponent;
  let fixture: ComponentFixture<CountryDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryDetailsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of(),
          },
        },
        {
          provide: DomSanitizer,
          useValue: {
            bypassSecurityTrustResourceUrl: (_: any) => "",
          },
        },
        {
          provide: Router,
          useValue: {
            navigate: (_: any) => null,
          },
        },
        {
          provide: StatsService,
          useValue: {
            getCountryDetails: (_: any) => of(),
            menuOptionSelected: "All",
          },
        },
      ],
    });
    fixture = TestBed.createComponent(CountryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should perform ngOnInit", fakeAsync(() => {
    component["route"].params = of({ code: "code" });

    const spyGetDetails = spyOn(
      component["statsService"] as any,
      "getCountryDetails"
    ).and.returnValue(of([{ details: "Test works!" }]));

    component.ngOnInit();
    tick(50);

    expect(spyGetDetails).toHaveBeenCalledWith("code");
    expect(component.countryDetails as any).toEqual({
      details: "Test works!",
    });
  }));

  it("should perform navigateToList", () => {
    component["statsService"].menuOptionSelected = "Not Search";

    const spyNavigate = spyOn(
      component["router"] as any,
      "navigate"
    ).and.stub();

    component.navigateToList();

    expect(spyNavigate).toHaveBeenCalledWith(["/home/data-dashboard"]);
    expect(component["statsService"].menuOptionSelected).toEqual("Search");
  });

  it("should perform flagImg", () => {
    (component.countryDetails as any) = { flags: { png: "pngFile" } };

    const spySanitizer = spyOn(
      component["sanitizer"] as any,
      "bypassSecurityTrustResourceUrl"
    ).and.returnValue("sanitizedUrl");

    const response = component.flagImg();

    expect(spySanitizer).toHaveBeenCalledWith("pngFile");
    expect(response).toEqual("sanitizedUrl");
  });

  it("should perform flagAlt", () => {
    (component.countryDetails as any) = { flags: { alt: "altText" } };

    const spySanitizer = spyOn(
      component["sanitizer"] as any,
      "bypassSecurityTrustResourceUrl"
    ).and.returnValue("sanitizedUrl");

    const response = component.flagAlt();

    expect(spySanitizer).toHaveBeenCalledWith("altText");
    expect(response).toEqual("sanitizedUrl");
  });

  it("should perform coatOfArmsImg", () => {
    (component.countryDetails as any) = { coatOfArms: { png: "pngFile" } };

    const spySanitizer = spyOn(
      component["sanitizer"] as any,
      "bypassSecurityTrustResourceUrl"
    ).and.returnValue("sanitizedUrl");

    const response = component.coatOfArmsImg();

    expect(spySanitizer).toHaveBeenCalledWith("pngFile");
    expect(response).toEqual("sanitizedUrl");
  });
});
