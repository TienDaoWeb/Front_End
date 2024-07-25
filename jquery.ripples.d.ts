// src/types/jquery.ripples.d.ts
import * as $ from 'jquery';

declare module 'jquery' {
  interface JQuery {
    ripples(options?: any): JQuery;
    ripples(action: string, ...args: any[]): JQuery;
  }
}
