import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DataDashboardComponent } from "./data-dashboard.component";

const routes: Routes = [
  {
    path: "",
    component: DataDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataDashboardRoutingModule {}
