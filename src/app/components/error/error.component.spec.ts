import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";

import { ErrorComponent } from "./error.component";

describe("ErrorComponent", () => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorComponent],
      providers: [
        {
          provide: Router,
          useValue: {
            getCurrentNavigation: () => {
              return {
                extras: {
                  state: "",
                },
              };
            },
          },
        },
      ],
    });
    fixture = TestBed.createComponent(ErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should define Error Message", () => {
    const mockRouter = {
        getCurrentNavigation: () => {
          return {
            extras: {
              state: {
                message: "Test works!",
              },
            },
          };
        },
      },
      component = new ErrorComponent(mockRouter as any);

    expect(component.errorMessage).toEqual("Test works!");
  });
});
