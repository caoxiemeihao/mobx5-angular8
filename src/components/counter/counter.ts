import { Component, DoCheck, ChangeDetectionStrategy } from "@angular/core";
import { Observable } from 'rxjs';
import { AppStore } from '@src/store/app-store';
import { fromMobx } from '@src/store/mobx-rxjs';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.html',
  styleUrls: ['./counter.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements DoCheck  {
  couter$: Observable<number>;
  counter = 0;

  constructor(
    private store: AppStore
  ) {
    this.couter$ = fromMobx<number>(() => this.store.counter).pipe(startWith(0));
    this.counter = this.store.counter;
  }

  ngDoCheck() {
    console.log('[this.store.counter]', this.store.counter)
  }
}
