import { NgModule } from '@angular/core';

import { DashboardOverviewComponent } from './containers/dashboard-overview/dashboard-overview.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SelectionUsersModule } from '../../shared/selection-users/selection-user.module';

@NgModule({
  declarations: [DashboardOverviewComponent],
  imports: [DashboardRoutingModule, SelectionUsersModule],
})
export class DashboardModule {}
