import { Component, EventEmitter } from 'angular2/core';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  template: `
  <h3 *ngFor="#currentKeg of kegList" (click)="kegClicked(currentKeg)">
    {{ currentKeg.name }}
  </h3>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
console.log(clickedKeg, "child");
  this.onKegSelect.emit(clickedKeg);
  }
}

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container">
      <h1>Purple Stain Brewing</h1>
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
      new Keg("Shaddow DOM Porter", 3)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
console.log(clickedKeg, "parent");
  }
}

export class Keg {
  constructor(public name: string, public id: number) {

  }
}
