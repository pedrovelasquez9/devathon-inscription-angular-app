const isFunction = (fn: any) => typeof fn === 'function';
export type Nullable<T> = T | null | undefined;

export interface SubscriptionLike {
  unsubscribe(): void;
}

export class Unsubscriber {
  protected _subs: Nullable<SubscriptionLike>[] = [];

  /**
   * Holds Observable subscriptions until you call unsubscribe on it in ngOnDestroy.
   * @example
   * ```
   *   private subs = new Unsubscriber();
   *   ...
   *   this.subs.addSub = observable$.subscribe(...)
   *   ...
   *   ngOnDestroy() {
   *     this.subs.unsubscribe();
   *   }
   * ```
   */
  constructor() {}

  set addSub(subscription: Nullable<SubscriptionLike>) {
    this._subs.push(subscription);
  }

  unsubscribe() {
    this._subs.forEach(
      subscription =>
        subscription &&
        isFunction(subscription.unsubscribe) &&
        subscription.unsubscribe()
    );
    this._subs = [];
  }
}
