import { Component, Input } from '@angular/core';

import { Card } from '../../../../core/models/card.model';

@Component({
  selector: 'app-card-data',
  templateUrl: './card-data.component.html',
  styleUrls: ['./card-data.component.scss'],
})
export class CardDataComponent {
  @Input() public card: Card;

  constructor() {}
}
