import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import jwt_decode from 'jwt-decode';
// @ts-ignore
import { reject } from 'lodash'
import {WriteoApiService} from "../writeo-api/writeo.service";
import {AuthUser} from "../../models/user/user.interface";
import {NbToastrService} from "@nebular/theme";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService{
  constructor(
    private router: Router,
    private http: HttpClient,
    private WriteoAPI: WriteoApiService,) {}

  async getUserId(): Promise<string> {
    return new Promise((resolve) => {
      const token = localStorage.getItem('token');
      if (!token) {
        reject('Unauthenticated, please user again!');
      }

      if (typeof token === "string") {
        const decoded: any = jwt_decode(token);
        resolve(decoded.user.id);
      }
    });
  }

  async getUser(): Promise<string> {
    return new Promise((resolve) => {
      const token = localStorage.getItem('token');
      if (!token) {
        reject('Unauthenticated, please user again!');
      }

      if (typeof token === "string") {
        const decoded: any = jwt_decode(token);
        resolve(decoded.user);
      }
    });
  }


  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }

  async register(
    email: string,
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    confirmPassword: string
  ): Promise<any> {
    if (password !== confirmPassword) {
      throw new Error(`Passwords doesn't match`);
    }

    // Make call to users service for register!
    const headers: HttpHeaders = this.WriteoAPI.getHeaders();
    const url = this.WriteoAPI.getAuthApiUrl() + `/user/`;

    const user: AuthUser = {
      email,
      firstName,
      lastName,
      username,
      password
    };

    await this.http.post(url, user, {headers}).subscribe((res: any) => {
      if (res) {
        console.log('Successfully got the user', res);
        return res;
      } else {
        throw new Error('failed to authenticate')
      }
    });
  }

  async login(email: string, password: string): Promise<any>{
    // return new Promise<any>(async (resolve, rejectLogin) => {
    const headers: HttpHeaders = this.WriteoAPI.getHeaders();
    const url = this.WriteoAPI.getAuthApiUrl() + `/user/login`;

    const user = {
      email,
      password
    };

    await this.http.post(url, user, {headers}).subscribe((res: any) => {
      if (res) {
        console.log('Successfully got the token', res);
        localStorage.setItem('token', res.data.token);
        return true;
      } else {
        throw new Error('failed to authenticate')
      }
    });
    //   return this.http.post(url, user, {headers}).subscribe((res: any) => {
    //     if (res) {
    //       console.log('Successfully got the token', res);
    //       localStorage.setItem('token', res.access_token);
    //       return resolve(true);
    //     }
    //     return rejectLogin('Invalid credentials');
    //   });
    // });
  }
}
