import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.css']
})
export class RangeComponent implements OnInit {
  serverName: string='';
  constructor() { }

  ngOnInit(): void {
//syntax  range(start:number, how many count:number).subscrint
    
    range(7).subscribe(data=>console.warn(data))//if we not provide starting it will take 0 to seven numbers
 
    range(15, 3).subscribe(data => console.warn(data))//5 to  3 numbers>15,16,17

    /*   ------------------------------------- */
 /*    function numPrint(n) {
      if (n > 0) {
        numPrint(n - 1);
        console.log( n);
      }
    }
    numPrint(100); */

    
   range(1,100).subscribe(data=>console.log(data))
  }

}
