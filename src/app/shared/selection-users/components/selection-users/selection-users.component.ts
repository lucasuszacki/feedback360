import { Component, EventEmitter, Input, Output } from '@angular/core';

import { User } from '../../../../core/models/user.model';

@Component({
  selector: 'app-selection-users',
  templateUrl: './selection-users.component.html',
  styleUrls: ['./selection-users.component.scss'],
})
export class SelectionUsersComponent {
  @Input() public users: User[] = [];

  constructor() {}
}
