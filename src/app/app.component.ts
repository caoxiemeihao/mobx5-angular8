import { Component } from '@angular/core';
import { AppStore } from '@src/store/app-store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'mobx5-angualr8';

  constructor(
    private store: AppStore
  ) { }

  add(str) {
    this.store.setCounter(str);
  }
}
