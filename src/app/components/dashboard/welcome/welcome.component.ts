import { Component } from "@angular/core";
import { fadeIn, fadeInLong } from "src/app/shared/animations/animations";
import { Router } from "@angular/router";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"],
  animations: [fadeIn(), fadeInLong()],
})
export class WelcomeComponent {
  constructor(private router: Router) {}

  public navigateToHome(): void {
    this.router.navigate(["/home/data-dashboard"]);
  }
}
