import { Component, EventEmitter, Input, Output } from '@angular/core';

import { GlobalModel } from '../../../../core/models/global.model';

@Component({
  selector: 'app-selection-data',
  templateUrl: './selection-data.component.html',
  styleUrls: ['./selection-data.component.scss'],
})
export class SelectionDataComponent {
  @Input() public data: GlobalModel[] = [];
  @Output() selectedValue = new EventEmitter<string>();

  constructor() {}

  selectedChange(value: string) {
    this.selectedValue.emit(value);
  }
}
