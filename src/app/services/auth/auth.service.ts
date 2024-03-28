import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userJson: any;
  loggedinuser: any;
  constructor(private http: HttpClient, private router: Router) {}

  getUsersList(): Observable<any> {
    return this.http.get('http://localhost:3000/users');
  }
  getAdminsList(): Observable<any> {
    return this.http.get('http://localhost:3000/admin');
  }

  setLoggedInUser(user: any): void {
    localStorage.setItem('LoggedInUser', JSON.stringify(user));
  }

  getLoggedInUser(): Observable<any> | any | null {
    this.loggedinuser = localStorage.getItem('LoggedInUser');
    // console.log(JSON.parse(this.loggedinuser));
    return JSON.parse(this.loggedinuser);
  }

  // login({ userName, password }: any, usersList: any) {
  //   for (let i = 0; i < usersList?.length; i++) {
  //     if (
  //       userName === usersList[i]?.userName &&
  //       password === usersList[i]?.password
  //     ) {
  //       this.setLoggedInUser(usersList[i]);
  //       // console.log(usersList[i]);
  //       return of(usersList[i]);
  //     }
  //   }
  //   return throwError(() => new Error('Failed to Login.!')).pipe(
  //     catchError((error) => {
  //       // Handle the error or log it if needed
  //       console.error(error);
  //       // Rethrow the error to propagate it further
  //       throw error;
  //     })
  //   );
  // }

  login(userData: any): Observable<any> {
    return this.http.post('https://localhost:7095/api/Users/login', userData);
  }

  isLoggedIn() {
    return this.getLoggedInUser() != null;
  }

  logout() {
    localStorage.removeItem('LoggedInUser');
    this.router.navigate(['/login']);
  }

  userSignUp(userD: any) {
    return this.http.post('https://localhost:7095/api/Users/addUser', userD, {
      responseType: 'text',
    });
  }

  // addUsers(data: any): Observable<any> {
  //   return this.http.post('http://localhost:3000/users', data);
  // }
}
