import { Injectable } from '@angular/core';
import { Order } from '../../models/Order';
import { ServiceInterface } from '../../interfaces/service.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderFormService implements ServiceInterface<Order>{

  constructor() { }

  checkOrder(period, order): Array<String> {
    order.sort();

    if (period === 'morning') {
     return this.checkMorningOrder(order);
    } else {
     return this.checkNightgOrder(order);
    }
  }

  checkMorningOrder(order: Array<String>): Array<String> {
    let dishes = [];

    order.forEach((dish) => {
        if (dish.toString() === '1') {
         dishes.push('eggs');
        } else if (dish === '2') {
         dishes.push('toast');
        } else if (dish === '3') {
         dishes.push('coffee');
        } else {
         dishes.push('error');
        }
    });

    return dishes;
  }

  checkNightgOrder(order: Array<String>): Array<String> {
    let dishes = [];

    order.forEach((dish) => {
      if (dish.toString() === '1') {
        dishes.push('steak');
      } else if (dish === '2') {
        dishes.push('potato');
      } else if (dish === '3') {
        dishes.push('wine');
      } else if (dish === '4') {
        dishes.push('cake');
      } else {
        dishes.push('error');
      }
    });

    return dishes;
  }
}
