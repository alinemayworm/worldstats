import { createPlatform } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { StatsService } from "src/app/core/services/stats.service";

import { NavbarComponent } from "./navbar.component";

describe("NavbarComponent", () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      providers: [
        {
          provide: StatsService,
          useValue: {
            menuOptionSelected: "All",
            getAllCountriesInformation: () => null,
            getCountryList: () => null,
          },
        },
      ],
    });
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should perform toggleExpanded", () => {
    component.expanded = true;

    component.toggleExpanded();

    expect(component.expanded).toBeFalse();
  });

  it("should perform setOption", () => {
    component.statsService.menuOptionSelected = "Some Option";
    const spyGetInformation = spyOn(
      component as any,
      "getInformation"
    ).and.stub();

    component.setOption("Other Option");

    expect(component.statsService.menuOptionSelected).toEqual("Other Option");
    expect(spyGetInformation).toHaveBeenCalled();
  });

  it("should perform getInformation - option !== search", () => {
    component.statsService.menuOptionSelected = "Some Option";
    const spyAllCountries = spyOn(
      component.statsService,
      "getAllCountriesInformation"
    ).and.stub();

    const spyList = spyOn(component.statsService, "getCountryList").and.stub();

    component["getInformation"]();

    expect(spyAllCountries).toHaveBeenCalled();
    expect(spyList).not.toHaveBeenCalled();
  });

  it("should perform getInformation - option === search", () => {
    component.statsService.menuOptionSelected = "Search";
    const spyAllCountries = spyOn(
      component.statsService,
      "getAllCountriesInformation"
    ).and.stub();

    const spyList = spyOn(component.statsService, "getCountryList").and.stub();

    component["getInformation"]();

    expect(spyAllCountries).not.toHaveBeenCalled();
    expect(spyList).toHaveBeenCalled();
  });
});
