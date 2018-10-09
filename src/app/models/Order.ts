import { Dish } from './Dish';

export class Order {
  private dayPeriod: string;
  private inputOrder: Array<String>;
  private dishes: Array<Dish>;

  constructor() {
  }

  public getdayPeriod() {
    return this.dayPeriod;
  }

  public setDayPeriod(dayPeriod) {
    this.dayPeriod = dayPeriod;
  }

  public getInputOrder() {
    return this.inputOrder
  }

  public setInputOrder(inputOrder) {
    this.inputOrder = inputOrder;
  }

  public getDishes() {
    return this.dishes;
  }

  public setDishes(dishes) {
    this.dishes = dishes;
  }
}
