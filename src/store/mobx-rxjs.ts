import { computed } from 'mobx';
import { Observable, Subscriber } from 'rxjs';

/**
 * mobx 与 rxjs 之间的桥梁
 * @param expression 例如: () => this.store.xxxx
 */
export function fromMobx<T>(cb: () => any) {
  return new Observable((subscriber: Subscriber<T>) => {
    const _computed = computed(cb);
    const disposer = _computed.observe(changed => {
      subscriber.next(changed.newValue as T);
    });
    return () => {
      if (disposer) disposer();
    }
  });
}
