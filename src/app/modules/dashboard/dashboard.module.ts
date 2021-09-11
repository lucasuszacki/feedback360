import { NgModule } from '@angular/core';

import { DashboardOverviewComponent } from './containers/dashboard-overview/dashboard-overview.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SelectionDataModule } from '../../shared/selection-data/selection-data.module';

@NgModule({
  declarations: [DashboardOverviewComponent],
  imports: [DashboardRoutingModule, SelectionDataModule],
})
export class DashboardModule {}
