import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
    <div class="task-form">
      <h3>Edit Name: {{ keg.name }}</h3>
      <input [(ngModel)]="keg.name" class="col-sm-8 input-lg keg-form">
    </div>
  `
})
export class EditKegDetailsComponent {
  public keg: Keg;
}
