import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs";
import {NbToastrService} from "@nebular/theme";
import {AuthenticationService} from '../../../services/auth/authentication.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //@ts-ignore
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private toastrService: NbToastrService,
    private authenticationService: AuthenticationService,
  ) {
    if (localStorage.getItem('token')) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { // @ts-ignore
    return this.loginForm.controls; }

  async onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    // @ts-ignore
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    await this.authenticationService
      .login(this.f['email'].value, this.f['password'].value)
      .then(async () => {
        if (!await localStorage.getItem('token')) {
          this.toastrService.show('Wrong Credentials, please try again', `Failed to login`, {
            status: 'danger'
          });
          this.loading = false;
        } else {
          await this.router.navigate(['/']);
        }
      })
  }
}
