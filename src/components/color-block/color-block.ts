import { Component } from "@angular/core";
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { AppStore } from '@src/store/app-store';
import { fromMobx } from '@src/store/mobx-rxjs';

@Component({
  selector: 'app-color-block',
  templateUrl: './color-block.html',
  styleUrls: ['./color-block.less']
})
export class ColorBlockComponent {

  counterRead$: Observable<number>;
  counterGreen$: Observable<number>;
  counterBlue$: Observable<number>;

  constructor(
    private store: AppStore
  ) {
    this.counterRead$ = fromMobx<number>(() => this.store.counterRed).pipe(startWith(0));
    this.counterGreen$ = fromMobx<number>(() => this.store.counterGreen).pipe(startWith(0));
    this.counterBlue$ = fromMobx<number>(() => this.store.counterBlue).pipe(startWith(0));
  }
}
