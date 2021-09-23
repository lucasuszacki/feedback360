import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardDataComponent } from './components/card-data/card-data.component';

@NgModule({
  declarations: [CardDataComponent],
  exports: [CardDataComponent],
  imports: [CommonModule],
})
export class CardDataModule {}
