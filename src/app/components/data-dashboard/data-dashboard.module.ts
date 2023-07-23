import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DataDashboardRoutingModule } from "./data-dashboard-routing.module";
import { DataDashboardComponent } from "./data-dashboard.component";
import { SharedModule } from "src/app/shared/shared.module";
import { NavbarComponent } from "src/app/shared/components/navbar/navbar.component";
import { LanguageChartComponent } from "./charts/language-chart/language-chart.component";
import { ContinentDistributionChartComponent } from "./charts/continent-distribution-chart/continent-distribution-chart.component";
import { IndependencyStatusChartComponent } from "./charts/independency-status-chart/independency-status-chart.component";
import { PopulationChartComponent } from "./charts/population-chart/population-chart.component";
import { LoadingComponent } from "../loading/loading.component";
import { BordersChartComponent } from "./charts/borders-chart/borders-chart.component";
import { LargestChartComponent } from "./charts/largest-chart/largest-chart.component";
import { MultipleCountriesComponent } from "./multiple-countries/multiple-countries.component";
import { CountryListComponent } from "./country-list/country-list.component";
import { CountryDetailsComponent } from "./country-details/country-details.component";
import { WorldMapComponent } from "./country-details/world-map/world-map.component";
import { SummaryComponent } from './country-details/summary/summary.component';

@NgModule({
  declarations: [
    DataDashboardComponent,
    NavbarComponent,
    LanguageChartComponent,
    ContinentDistributionChartComponent,
    IndependencyStatusChartComponent,
    PopulationChartComponent,
    LoadingComponent,
    BordersChartComponent,
    LargestChartComponent,
    MultipleCountriesComponent,
    CountryListComponent,
    CountryDetailsComponent,
    WorldMapComponent,
    SummaryComponent,
  ],

  imports: [CommonModule, SharedModule, DataDashboardRoutingModule],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DataDashboardModule {}
