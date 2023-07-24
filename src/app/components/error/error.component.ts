import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-error",
  templateUrl: "./error.component.html",
  styleUrls: ["./error.component.css"],
})
export class ErrorComponent {
  public errorMessage: string = "This information is not available";

  constructor(private router: Router) {
    if (this.router.getCurrentNavigation()?.extras?.state) {
      const state: any = this.router.getCurrentNavigation()?.extras.state;

      if (state.message) {
        this.errorMessage = state.message;
      }
    }
  }
}
