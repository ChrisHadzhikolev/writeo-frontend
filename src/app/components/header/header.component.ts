import {Component, Input, OnInit} from '@angular/core';
import { NbSidebarService, NbMenuService, NbMenuBag } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()
  title: string | undefined;

  imageUrl: string | undefined;

  mobile: boolean | undefined;

  userMenu = [
    { title: 'Subscription' },
    { title: 'Profile' },
    { title: 'Settings' },
    { title: 'Log Out' }
  ];
  user: any;


  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private router: Router,
  ) {

    menuService.onItemClick().subscribe((item: NbMenuBag) => {
      switch (item.item.title) {
        case 'Subscription':
          //TODO create subscription page and routing to it
          this.router.navigate(['/subscription']);
          break;
        case 'Profile':
          //TODO create profile page and routing to it
          this.router.navigate(['/profile']);
          break;
        case 'Settings':
          //TODO create settings page and routing to it
          this.router.navigate(['/settings']);
          break;
        case 'Log Out':
          //TODO after implementing authentication
          //this.router.navigate(['/']);
          break;
        default:
          break;
      }
    });
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  async ngOnInit(): Promise<void> {
    // TODO get user data
    this.user = "John Doe" //will remove it once authentication is done
  }

  onResize(event: any): void {
    if (event.target.innerWidth < 467) {
      this.mobile = true;
    } else {
      this.mobile = false;
    }
  }
}
