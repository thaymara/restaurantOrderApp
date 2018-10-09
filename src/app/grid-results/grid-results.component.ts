import { Component, OnInit, Input, SimpleChange, OnChanges } from '@angular/core';

@Component({
  selector: 'restaurant-results',
  templateUrl: './grid-results.component.html',
  styleUrls: ['./grid-results.component.scss']
})
export class GridResultsComponent implements OnChanges {
  @Input('orderOutput') output;

  private orderArray: Array<String>;

  constructor() { }

  ngOnInit() {
    this.orderArray = [];
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    for (let prop in changes) {
      if (prop === 'output') {
        if (changes[prop].currentValue !== undefined) {
          this.orderArray.unshift(changes[prop].currentValue);
        }
      }
    }
  }
}
