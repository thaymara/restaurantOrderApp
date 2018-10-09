import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'restaurant-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  public output: any;

  constructor() { }

  ngOnInit() {
  }

  getOrderOutput(output) {
    this.output = output;
  }
}
