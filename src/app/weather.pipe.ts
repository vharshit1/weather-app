
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weather',
  pure: false
})
export class WeatherPipe implements PipeTransform {
 // transforms calvin to celsius temprature 
  transform(value: any, args?: any): any {
    if (!value || isNaN(value)) {
      return value;
    }
   9
   return Math.round (value-273.15);

}

}
