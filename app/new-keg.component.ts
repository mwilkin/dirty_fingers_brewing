import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template:`
  <div class="keg-form">
    <h3>Create Keg: </h3>
    <input placeholder="Name" class="col-sm-11 input-lg" #newName>
    <button (click)="addKeg(newName)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<String>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(userName: HTMLInputElement){
    this.onSubmitNewKeg.emit(userName.value);
    userName.value = "";
  }
}
