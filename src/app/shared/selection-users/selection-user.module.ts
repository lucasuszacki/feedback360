import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SelectionUsersComponent } from './components/selection-users/selection-users.component';

@NgModule({
  declarations: [SelectionUsersComponent],
  exports: [SelectionUsersComponent],
  imports: [CommonModule, NgbModule],
})
export class SelectionUsersModule {}
