import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: string, maxlength: number = 4, isMask : boolean = true): any {
    if (value.length > maxlength && isMask === true) {
      return value.substr(0, maxlength) + '***';
    }
    else {
      return value;
    }
  }
}
