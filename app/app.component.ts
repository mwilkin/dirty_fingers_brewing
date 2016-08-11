import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Dirty Fingers Brewing</h1>
      <h3 *ngFor="#keg of kegs">{{ keg.name }}</h3>
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
      new Keg("Saddle Sour", 3)

    ];
  }
}

export class Keg {
  constructor(public name: string, public id: number) {

  }
}
