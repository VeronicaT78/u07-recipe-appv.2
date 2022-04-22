import { Component, OnInit } from '@angular/core';

import { Favourite } from '../../../models/favourites.model';

@Component({
  selector: 'app-favourite-list',
  templateUrl: './favourite-list.component.html',
  styleUrls: ['./favourite-list.component.css']
})
export class FavouriteListComponent implements OnInit {
  favourites: Favourite[] = [
    new Favourite(5, 'mittsparaderecept', 'urlforpicture'),
    new Favourite(4, 'mittsparaderecept', 'urlforpicture'),
    new Favourite(3, 'mittsparaderecept', 'urlforpicture')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
