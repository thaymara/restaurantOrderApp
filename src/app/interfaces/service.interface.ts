export interface ServiceInterface<T> {

  sendOrder(): Promise<T>;
  // findAll(): Promise<T[]>;
  // find(id: number): Promise<T>;
  // create(object: T): Promise<T>;
  // update(object: T): Promise<T>;
  // delete(object: T): Promise<T>;
}
