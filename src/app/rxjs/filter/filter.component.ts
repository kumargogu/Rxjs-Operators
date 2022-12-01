import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }
  
  Mobiles = [
    { brand: 'Nokia', price: 10000, model: 2000 },
    { brand: 'Apple', price: 50000, model: 2020 },
    { brand: 'iphone', price: 35000, model: 2022 },
    { brand: 'samsung', price: 20000, model: 2015 }
    
  ];
  
 

  ngOnInit(): void {
    /////////////////////////////////
    let a = ['aa', 'bb', 'cc'];
    console.log(a.includes('aa'));//true
    
    let newMobile = [];
  /*   for (let product of this.Mobiles) {
        if (product.price >= 35000) {
          newMobile.push(product);
        }
    }
    console.log(newMobile); */


    newMobile = this.Mobiles.filter(res => res.price >= 35000);
    console.log(newMobile)
   ///////////////////////////////////////////
    let arr = [2, 4, 6, 3, 7, 3, 7, 4, 7, 8, 9, 99];
    let res = arr.filter(x => x > 6);
    console.log(new Set(res));
    /////////////////////////////////

  }

}
