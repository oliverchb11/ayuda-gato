import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.scss']
})
export class ItemMenuComponent implements OnInit {
@Input()  route = 'home';
@Input()  text = 'menuHijo';
@Input()  class = '';
@Input()  icon = '';
  constructor() { }

  ngOnInit(): void {
  }

}
