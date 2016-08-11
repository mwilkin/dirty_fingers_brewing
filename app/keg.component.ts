import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <h3>{{ keg.name }}</h3>
    <h3>{{ keg.pints }}</h3>
    <button (click)="subtractPint()" class="btn btn-success btn-lg">Subtract Pint</button>

  `
})
export class KegComponent {
  public keg: Keg;
  subtractPint(): void {
    this.keg.pints -= 1;
  }
}
