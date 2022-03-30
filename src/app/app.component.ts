import { Component } from '@angular/core';
import {MENU_ITEMS} from "./pages/pages-menu";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'writeo';
  menu = MENU_ITEMS;
}
