import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Order } from '../../models/Order';
import { OrderFormService } from './order-form.service';

@Component({
  selector: 'restaurant-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  private orderInput: String;
  private orderOutput: Object[];
  private order: Order;
  private errorMessage: String;

  @Output() getOrderOutput = new EventEmitter<any>();

  constructor (
   private orderFormService: OrderFormService
  ) {}

  onGetOrderOutput(orderOutput: any) {
    this.getOrderOutput.emit(orderOutput);
  }

  ngOnInit() { }

  onSubmit() {
    this.createOrder();
  }

  createOrder() {
    this.orderInput = this.orderInput.toLowerCase();
    let orderSplitted = this.orderInput.replace(/\s/g, "").split(',');
    let period = orderSplitted.filter(a => a === 'morning' || a === 'night');
    let periodIndex = orderSplitted.findIndex(this.checkPeriod);

    if(period.length > 1 || periodIndex != 0) {
      this.errorMessage = `You must enter a valid input: a period of the time
        and the dishes separated by comma.`;
    } else {
      this.order = new Order();
      this.order.setDayPeriod(period[0]);
      this.order.setInputOrder(this.orderInput);
      this.order.setDishes(this.orderFormService.checkOrder(this.order.getdayPeriod(), orderSplitted.slice(1)));
      this.orderOutput = this.order.getDishes();
      this.onGetOrderOutput(this.order);
    }
  }

  checkPeriod(order: string) {
    return order.toLowerCase() === 'morning' || order.toLowerCase() === 'night';
  }
}
