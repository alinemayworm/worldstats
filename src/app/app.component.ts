import { Component } from "@angular/core";
import { ChildrenOutletContexts } from "@angular/router";
import { fadeInOut } from "./shared/animations/animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [fadeInOut],
})
export class AppComponent {
  constructor() {}
}
