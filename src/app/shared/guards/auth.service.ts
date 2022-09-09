import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable, of} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {
  private _authenticated: boolean = false;

  /**
   * Constructor
   */
  constructor(
    private _httpClient: HttpClient,
  ) {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * Setter & getter for access token
   */
  get accessToken(): string {
    return (
      localStorage.getItem('token') ??
      ''
    );
  }

  set accessToken(token: string) {
    this._authenticated = !!token;
    if (!!token) {
      localStorage.setItem(
        'token',
        token
      );
    } else {
      localStorage.removeItem(
       'token'
      );
    }
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------


  /**
   * Sign out
   */
  signOut() {

    this.removeLocalToken();

    if (this._authenticated) {
      // Set the authenticated flag to false
      this._authenticated = false;
      return true;
    } else {
      // Return the observable
      return false;
    }

  }


  /**
   * Check the authentication status
   */
  check(): Observable<boolean> {
    // Check if the user is logged in
    if (this._authenticated) {
      return of(true);
    }

    // Check the access token availability
    if (!this.accessToken) {
      return of(false);
    }

    return of(true);
    // If the access token exists and it didn't expire, sign in using it
    // return this.signInUsingToken();
  }

  removeLocalToken(): void {
    localStorage.removeItem('token');
  }
}
