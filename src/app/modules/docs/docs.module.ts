import { NgModule } from '@angular/core';

import { DocsBoardsComponent } from './containers/docs-boards/docs-boards.component';
import { DocsRoutingModule } from './docs-routing.module';

@NgModule({
  declarations: [DocsBoardsComponent],
  imports: [DocsRoutingModule],
})
export class DocsModule {}
