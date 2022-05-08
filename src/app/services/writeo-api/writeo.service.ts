import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WriteoApiService {
  getHeaders(includeToken?: boolean): HttpHeaders {
    if (includeToken) {
      const t = localStorage.getItem('token');
      if (!t) {
        throw new Error('Unauthenticated, please user again!');
      }
      return new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${t}`
      });
    }

    return new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    });
  }

  getAuthApiUrl(): string {
    return 'http://localhost:3066';
  }
  getArticleApiUrl(): string {
    return 'http://localhost:3067';
  }
  getCommentsApiUrl(): string {
    return 'http://localhost:3068';  }
  getFollowingApiUrl(): string {
    return 'http://localhost:3069';  }
}
