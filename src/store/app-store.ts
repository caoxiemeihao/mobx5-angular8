import { Injectable } from '@angular/core';
import { observable, action, reaction } from 'mobx';

@Injectable({
  providedIn: 'root'
})
export class AppStore {
  constructor() {
    reaction(
      () => ({
        // 跟踪数据变动
        red: this.counterRed,
        green: this.counterGreen,
        blue: this.counterBlue
      }),
      ({ red, green, blue }) => {
        // 计算总惦记次数
        this.counter = red + green + blue;
      }
    );
  }

  @observable counter: number = 0;
  @observable counterRed: number = 0;
  @observable counterBlue: number = 0;
  @observable counterGreen: number = 0;

  @action.bound setCounter(color: 'red' | 'green' | 'blue') {
    if (color === 'red') {
      this.counterRed += 1;
    } else if (color === 'green') {
      this.counterGreen += 1;
    } else if (color === 'blue') {
      this.counterBlue += 1;
    }
  }

}
