import { Component, OnInit } from '@angular/core';
import { filter, from } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /*  ------------------------------ */
    //frrom will take single element and itrable element 
    from([2, 4, 6, 2,4,5,6,3, 5, 8, 9]).subscribe(data => {
      console.log(data);
    })
    /* ---------------------------------------- */
    
    from("Kumar swamy").subscribe(data => console.log(data));//it will execute single lettrrs
    /* ------------------------------------------------------ */
    
    from(['Rama', 'Krishna', 'Ayyappa']).subscribe(data => console.log(data))//It will execute names
    /* ------------------------------------------------------ */
    let cars = [
      { brand: 'Honda', price: 600000 },
      { brand: 'shift', price: 400000 },
      { brand: 'Maruthi', price: 200000 }
      
    ];
    let newcar=cars.filter(data=>data.price>400000)
    from(newcar).subscribe(data => {
      console.log(data)// { brand: 'Honda', price: 600000 },
    });// same objects
    
    /* ------------------------------------------------------ */
    
  }

  
  
}
