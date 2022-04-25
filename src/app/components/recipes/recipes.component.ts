import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from './../../models/recipe.model'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  @Input() recipe: Recipe;
  
  constructor() { }

  ngOnInit(): void {
  }

}
