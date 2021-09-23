import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

import { DashboardOverviewComponent } from './containers/dashboard-overview/dashboard-overview.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SelectionDataModule } from '../../shared/selection-data/selection-data.module';

@NgModule({
  declarations: [DashboardOverviewComponent],
  imports: [DashboardRoutingModule, SelectionDataModule, NgbModule, CommonModule],
  bootstrap: [DashboardOverviewComponent],
})
export class DashboardModule {}
