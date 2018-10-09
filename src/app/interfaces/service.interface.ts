export interface ServiceInterface<T> {

  checkOrder(period: string, order: Array<String>): Array<String>;
  checkMorningOrder(order: Array<String>): Array<String>;
  checkNightgOrder(order: Array<String>): Array<String>;
}
