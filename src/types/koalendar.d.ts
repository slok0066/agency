interface Koalendar {
  (type: 'init'): void;
  props?: any[];
}

declare global {
  interface Window {
    Koalendar?: Koalendar;
  }
}

export {};
