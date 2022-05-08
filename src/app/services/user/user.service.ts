// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import jwt_decode from 'jwt-decode';
// // @ts-ignore
// import { reject } from 'lodash'
// import {WriteoApiService} from "../writeo-api/writeo.service";
// import {AuthUser} from "../../models/user/user.interface";
// import {NbToastrService} from "@nebular/theme";
//
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthenticationService{
//   constructor(
//     private router: Router,
//     private http: HttpClient,
//     private WriteoAPI: WriteoApiService,) {}
//
//   async getUserId(): Promise<string> {
//     return new Promise((resolve) => {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         reject('Unauthenticated, please user again!');
//       }
//
//       if (typeof token === "string") {
//         const decoded: any = jwt_decode(token);
//         resolve(decoded.user.id);
//       }
//     });
//   }
// }
