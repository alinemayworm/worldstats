import { ComponentFixture, TestBed } from "@angular/core/testing";

import { WelcomeComponent } from "./welcome.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"; // Import BrowserAnimationsModule
import { animate, style, transition, trigger } from "@angular/animations";

export const mockFadeInLong = trigger("fadeInLong", [
  transition(":enter", [
    style({ opacity: 0 }),
    animate("0s", style({ opacity: 1 })),
  ]),
]);

describe("WelcomeComponent", () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeComponent],
      imports: [BrowserAnimationsModule],
    }).overrideComponent(WelcomeComponent, {
      set: {
        animations: [mockFadeInLong],
      },
    });
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should perform navigateToHome", () => {
    const spyNavigate = spyOn(
      component["router"] as any,
      "navigate"
    ).and.stub();

    component.navigateToHome();
    expect(spyNavigate).toHaveBeenCalledWith(["/home/data-dashboard"]);
  });
});
