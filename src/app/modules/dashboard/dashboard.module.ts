import { NgModule } from '@angular/core';

import { DashboardOverviewComponent } from './containers/dashboard-overview/dashboard-overview.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SelectionDataModule } from '../../shared/selection-data/selection-data.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DashboardOverviewComponent],
  imports: [DashboardRoutingModule, SelectionDataModule, NgbModule, CommonModule],
  bootstrap: [DashboardOverviewComponent],
})
export class DashboardModule {}
