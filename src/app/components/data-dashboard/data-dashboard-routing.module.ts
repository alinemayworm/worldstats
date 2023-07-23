import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CountryDetailsComponent } from "./country-details/country-details.component";

import { DataDashboardComponent } from "./data-dashboard.component";

const routes: Routes = [
  {
    path: "",
    component: DataDashboardComponent,
  },
  {
    path: "country-details/:code",
    component: CountryDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataDashboardRoutingModule {}
