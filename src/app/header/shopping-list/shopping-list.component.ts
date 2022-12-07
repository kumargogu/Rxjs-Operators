import { Component, OnInit } from '@angular/core';
import { IngredientsModel } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  lstIngredients: IngredientsModel[] = [
    new IngredientsModel('Mangos', 25),
    new IngredientsModel('Leman', 5),
    new IngredientsModel('Red Chelli',200)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
