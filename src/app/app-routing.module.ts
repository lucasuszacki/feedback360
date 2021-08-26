import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocsComponent } from './docs/docs.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'docs', component: DocsComponent },
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
