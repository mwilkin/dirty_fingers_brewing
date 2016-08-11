import { Pipe, PipeTransform } from 'angular2/core';
import { Keg } from './keg.model';

@Pipe({
  name: "refill",
  pure: false
})
export class RefillPipe implements PipeTransform {
  transform = function (input: Keg[], info) {
    var desiredRefill = info[0];
    var output: Keg[] = [];
    if(desiredRefill === "refill") {
      for (var i = 0; i < input.length; i++) {
        if(input[i].pints < 10) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
    return input;
  }
}
