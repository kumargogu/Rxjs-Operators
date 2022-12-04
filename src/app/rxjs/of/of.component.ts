import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.css']
})
export class OfComponent implements OnInit {
  ////////////////////////////////////////
  //directives code here
  showSecret: boolean = false;

  log = [];
  onToggleDetils() {
    this.showSecret = !this.showSecret;
    //this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
  
  ///////////////////////////////////////

  constructor() { }

  ngOnInit(): void {
    /*  --------------------------------------------------- */
    //of will take multiple inputs and emit one by one
    of(2, 55, 77, 35).subscribe(data => console.log(data))
    /*  --------------------------------------------------- */
    of('ayyappa', 'ram', 'krishna').subscribe(data => console.log(data))//names display
    /*  --------------------------------------------------- */
    of([1, 2, 4]).subscribe(data => console.log(data))//complete array bcz single element
    of(6).subscribe(data => console.log(data))//6
    of('Ayyappa').subscribe(data=>console.log(data))//Ayyappa
  }

}
