import { Component, OnInit } from '@angular/core';
import { filter, from, map } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {


  birthYear = [2000, 2007, 2010, 2014, 2017, 2019, 2020];
  constructor() { }

  ngOnInit(): void {
    var ages = this.birthYear.map((element, index, arr) => {
      //let age = 2022 - element;
    
      console.log(element);
      console.log(index);
      console.log(arr);
    
      return 2022 - element;
    })
    console.table(this.birthYear);
    console.table(ages);

    ///////////////////////////////////set
    let num = [2, 3, 3, 4, 3, 5, 6];

    let res = new Set(num);
    console.warn(res.values());
    ////////////////////////////// forEach
    let display;
    let fruits = ['Apple', 'Mango', 'Banana', 'Apple', 'Banana'];
    let unique_fruits = new Set(fruits);
    //console.log(unique_fruits);
    unique_fruits.forEach(value => {
      display = value;
    })
    console.log(unique_fruits);
    /////////////////////////////////////////////////////
    //mul by 5 for each element --> example

    let arr1 = [2, 5, 6, 3, 9];

    let myObservable = from(arr1);

    let transformObservable = myObservable.pipe(map((val) => {
      return val * 5;
    }));

    transformObservable.subscribe(
      (v) => { console.log(v) },
      (error) => { console.warn(error.message) },
      ()=>{console.log("This Observable has complete emitting all values")}
    )


     /* let transformObservable = myObservable.pipe(map((val) => {
      return val * 5;
     }),
     filter((res) => {
      return res>=30
    })
     );  */

 
    /////////////////////////////

    let newFilteredobs=transformObservable.pipe(filter((res) => {
      return res>=30
    }))
    newFilteredobs.subscribe(res => console.log(res));

    
  }//ngOnInit() end




}
