import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  @Output() featureSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  
  //spara valen och skicka över data till recipes, inuti recipes görs api requesten


  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }

}
