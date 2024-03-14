import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  getUsersList(): Observable<any> {
    return this.http.get('http://localhost:3000/users');
  }
  getAdminsList(): Observable<any> {
    return this.http.get('http://localhost:3000/admin');
  }

  setLoggedInUser(user: any): void {
    localStorage.setItem('LoggedInUser', user);
  }

  getLoggedInUser(): any | null {
    return localStorage.getItem('LoggedInUser');
  }

  login({ userName, password }: any, usersList: any) {
    for (let i = 0; i < usersList?.length; i++) {
      if (
        userName === usersList[i]?.userName &&
        password === usersList[i]?.password
      ) {
        this.setLoggedInUser(usersList[i]);
        // console.log(usersList[i]);
        return of(usersList[i]);
      }
    }
    return throwError(() => new Error('Failed to Login.!')).pipe(
      catchError((error) => {
        // Handle the error or log it if needed
        console.error(error);
        // Rethrow the error to propagate it further
        throw error;
      })
    );
  }

  isLoggedIn() {
    return this.getLoggedInUser() != null;
  }

  logout() {
    localStorage.removeItem('LoggedInUser');
    this.router.navigate(['/login']);
  }

  // addUsers(data: any): Observable<any> {
  //   return this.http.post('http://localhost:3000/users', data);
  // }
}
