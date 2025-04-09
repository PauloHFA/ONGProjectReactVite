import { Subject } from './Subject';
import { Observer } from './Observer';

export class ConcreteSubject<T> implements Subject<T> {
  private observers: Observer<T>[] = [];

  attach(observer: Observer<T>): void {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      return console.log('Subject: Observer has been attached already.');
    }
    this.observers.push(observer);
  }

  detach(observer: Observer<T>): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log('Subject: Nonexistent observer.');
    }
    this.observers.splice(observerIndex, 1);
  }

  notify(data: T): void {
    for (const observer of this.observers) {
      observer.update(data);
    }
  }
} 