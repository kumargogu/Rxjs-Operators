import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arraydisplay',
  pure:false
})
export class ArraydisplayPipe implements PipeTransform {

  transform(value:any){
    return value.join(',')
    
  }

}
