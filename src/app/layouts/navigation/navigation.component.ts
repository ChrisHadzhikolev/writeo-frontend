import { Component, OnInit } from '@angular/core';
import {MENU_ITEMS} from "../../pages/pages-menu";

@Component({
  selector: 'app-default',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  menu = MENU_ITEMS;

}
