import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  lstRecipe: RecipeModel[] = [
    new RecipeModel('Mango Pickle Recipe', 'Raw mango, green chili, mustard oil, fennel seeds, chili', 'https://www.dishesguru.com/uploads/recipe/avakaya-pachadi2041095708-810.jpg'),
    new RecipeModel('Lemon Pickle Recipe' , 'Lemon Pickle Recipe gives you sweet and tangling flavor to your tongue.','https://i0.wp.com/www.indianrecipeinfo.com/wp-content/uploads/2017/01/Lemon-Pickle.jpg')
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
