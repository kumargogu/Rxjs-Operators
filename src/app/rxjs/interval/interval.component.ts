import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    interval(5000).subscribe(() => {
      console.log("Ohm Sri Swamy ee Sharanam Ayyappa");//it will print string
    })
  /*   ----------------------------- */
      
      interval(3000).subscribe(data=>console.log(data))//it wil give numbers 
  }

}
