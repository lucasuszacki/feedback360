import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SelectionDataComponent } from './components/selection-data/selection-data.component';

@NgModule({
  declarations: [SelectionDataComponent],
  exports: [SelectionDataComponent],
  imports: [CommonModule, NgbModule],
})
export class SelectionDataModule {}
