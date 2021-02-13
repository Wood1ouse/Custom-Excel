import {DomListener} from '@core/DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.emitter = options.emitter;
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


  // init, adding listeners
  init() {
    this.initDomListeners();
  }

  // delete compo , remove listeners
  destroy() {
    this.removeDomListeners();
    this.unsuscribers.forEach((unsub) => unsub());
  }
}
