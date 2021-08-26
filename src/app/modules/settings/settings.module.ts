import { NgModule } from '@angular/core';

import { SettingsOverviewComponent } from './containers/settings-overview/settings-overview.component';
import { SettingsRoutingModule } from './settings-routing.module';

@NgModule({
  declarations: [SettingsOverviewComponent],
  imports: [SettingsRoutingModule],
})
export class SettingsModule {}
