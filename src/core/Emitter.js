export class Emitter {
  constructor() {
    this.listeners = {};
  }
  // dispatch, fire, trigger
  // Уведомляем слушаетелей, если они есть
  // 'focus', 'formula:done', etc
  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false;
    } else {
      this.listeners[event].forEach((listener) => {
        listener(...args);
      });
      return true;
    }
  }
  // on, listen, ...
  // подписываемся на уведомления либо добавляем нового слушателя
  // formula.subscribe('table:select', () => {})
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || [];
    this.listeners[event].push(fn);
    return () => {
      this.listeners[event] = this.listeners[event]
          .filter((listener) => listener !== fn);
    };
  }
}

