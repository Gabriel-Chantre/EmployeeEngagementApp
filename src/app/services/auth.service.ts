import { Injectable } from '@angular/core'
import { TnsOAuthClient, ITnsOAuthTokenResult } from '@nativescript/oauth2'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private client: TnsOAuthClient

  constructor() {
    this.client = new TnsOAuthClient('microsoft')
  }

  login(): Promise<ITnsOAuthTokenResult> {
    return this.client.loginWithCompletion((tokenResult: ITnsOAuthTokenResult, error) => {
      if (error) {
        console.error('LoginError', error)
      } else {
        console.log('Logged in successfully', tokenResult)
      }
    })
  }

  logout(): Promise<any> {
    return this.client.logout()
  }
}