import {DomListener} from '@core/DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.emitter = options.emitter;
    this.subscribe = options.subscribe || [];
    this.store = options.store;
    this.unsuscribers = [];

    this.prepare();
  }

  // set compo before init()
  prepare() {}
  // return component template
  toHTML() {
    return '';
  }

  // notify listeners about event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args);
  }

  // subscribe on event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn);
    this.unsuscribers.push(unsub);
  }

  $dispatch(action) {
    this.store.dispatch(action);
  }

  // $subscribe(fn) {
  //   this.storeSub = this.store.subscribe(fn);
  // }

  // Приходят изменения по тем полям, на которые мы подписались
  storeChanged() {}

  isWatching(key) {
    return this.subscribe.includes(key);
  }
  // init, adding listeners
  init() {
    this.initDomListeners();
  }

  // delete compo , remove listeners
  destroy() {
    this.removeDomListeners();
    this.unsuscribers.forEach((unsub) => unsub());
  // this.storeSub.unsubscribe();
  }
}
