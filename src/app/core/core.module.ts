import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { HttpService } from "./services/http.service";
import { StatsService } from "./services/stats.service";

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [HttpService, StatsService],
})
export class CoreModule {}
