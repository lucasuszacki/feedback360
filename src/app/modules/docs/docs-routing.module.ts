import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocsBoardsComponent } from './containers/docs-boards/docs-boards.component';

const routes: Routes = [
  {
    path: '',
    component: DocsBoardsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocsRoutingModule {}
