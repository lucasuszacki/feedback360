import { NgModule } from '@angular/core';

import { DashboardOverviewComponent } from './containers/dashboard-overview/dashboard-overview.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [DashboardOverviewComponent],
  imports: [DashboardRoutingModule],
})
export class DashboardModule {}
