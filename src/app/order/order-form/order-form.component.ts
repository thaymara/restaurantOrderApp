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
    this.errorMessage = "";
    this.orderInput = this.orderInput.toLowerCase();
    let orderSplitted = this.orderInput.replace(/\s/g, '').split(',');
    let period = orderSplitted.filter(a => a === 'morning' || a === 'night');
    let periodIndex = orderSplitted.findIndex(this.checkPeriod);

    if (period.length > 1 || periodIndex != 0) {
      this.errorMessage = `You must enter a valid input: a period of the time
        and the dishes separated by comma.`;
    } else {
      let isDuplicated = this.checkDuplicated(period[0], orderSplitted.slice(1));

      if(isDuplicated) {
        this.errorMessage = `You only can order 1 of each dish type.
          Exceptions: In the morning, you can order multiple cups of coffee;
          At night, you can have multiple orders of potatoes.`
      } else {
        this.sendOrder(period[0], orderSplitted.slice(1));
      }
    }
  }

  checkPeriod(order: string) {
    return order.toLowerCase() === 'morning' || order.toLowerCase() === 'night';
  }

  checkDuplicated(period, dishes) {
    for (var i = 0; i < dishes.length - 1; i++) {
      if (period === 'morning') {
        if (dishes[i + 1] === dishes[i] && dishes[i] != '3') {
          return true;
        }
      } else {
        if (dishes[i + 1] === dishes[i] && dishes[i] != '2') {
          return true;
        }
      }
    }
  }

  sendOrder(period, dishes) {
    this.order = new Order();
    this.order.setDayPeriod(period);
    this.order.setInputOrder(this.orderInput);
    this.order.setDishes(this.orderFormService.checkOrder(this.order.getdayPeriod(), dishes));
    this.orderOutput = this.order.getDishes();
    this.onGetOrderOutput(this.order);
  }
}
