import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {


  birthYear = [2000, 2007, 2010, 2014, 2017, 2019, 2020];
  constructor() { }

  ngOnInit(): void {
  var ages=  this.birthYear.map((element,index,arr) => {
   //let age = 2022 - element;
    
    console.log(element);
    console.log(index);
    console.log(arr);
    
    return 2022-element;
  })
    console.table(this.birthYear);
    console.table(ages);

    ///////////////////////////////////set
   let  num = [2, 3, 3, 4, 3, 5, 6];

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
    
  }




}
