import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NbToastrService} from "@nebular/theme";
import {AuthenticationService} from "../../../services/auth/authentication.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  //@ts-ignore
  registerForm: FormGroup;
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
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { // @ts-ignore
    return this.registerForm.controls;
  }

  async onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    // @ts-ignore
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;

    await this.authenticationService
      .register(this.f['email'].value, this.f['firstName'].value, this.f['lastName'].value, this.f['username'].value, this.f['password'].value, this.f['confirmPassword'].value)
      .then((res) => {
        if (!res) {
          this.toastrService.show('Failed to sign up, please try again', `Failed to Sign up`, {
            status: 'danger'
          });
          this.loading = false;
        } else {
          this.router.navigate(['/auth/login']);
        }
      });
  }
}
