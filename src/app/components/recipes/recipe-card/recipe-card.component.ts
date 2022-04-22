import { Component, OnInit } from '@angular/core';

import { Recipe } from './../../../models/recipe.model'

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('my recipe', 3, 30, 'imgurl', 'summary', 'instructions', ['sallad, sallad']),
    new Recipe('my recipe', 3, 30, 'imgurl', 'summary', 'instructions', ['sallad, sallad']),
    new Recipe('my recipe', 3, 30, 'imgurl', 'summary', 'instructions', ['sallad, sallad']),
    new Recipe('my recipe', 3, 30, 'imgurl', 'summary', 'instructions', ['sallad, sallad'])
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
