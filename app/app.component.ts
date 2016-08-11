import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container">
      <h1>Bent Spoke Brewing</h1>
      <keg-list
        [kegList]="kegs"
        (onKegSelect)="kegWasSelected($event)">
      </keg-list>
    </div>
  `
})
export class AppComponent {
  public kegs: Keg[];
  constructor() {
    this.kegs = [
      new Keg("Chainring Ale", 0),
      new Keg("Breakline IPA", 1),
      new Keg("Handle Bar Stout", 2),
      new Keg("Saddle Sour", 3),
      new Keg("Shaddow DOM Porter", 4)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
console.log(clickedKeg, "parent");
  }
}
