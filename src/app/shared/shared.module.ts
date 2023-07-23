import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoreModule } from "../core/core.module";
import { NavbarComponent } from "./components/navbar/navbar.component";

@NgModule({
  declarations: [],
  imports: [CommonModule, CoreModule],
})
export class SharedModule {}
