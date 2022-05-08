import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  constructor(private router: Router) { }

  loggedIn = false;
  register = false;

  ngOnInit(): void {
    //TODO check if user is logged in
    this.register = this.router.url === '/auth/register';
  }

}
