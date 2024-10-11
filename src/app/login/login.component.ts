import { Component } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular'
import { Page } from '@nativescript/core'
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private page: Page,
    private routerExtensions: RouterExtensions,
    private authService: AuthService
  ) {
    this.page.actionBarHidden = true
  }

  login() {
    this.authService.login().then(() => {
      this.routerExtensions.navigate(['/onboarding'], { clearHistory: true })
    }).catch(error => {
      console.error('Login error:', error)
    })
  }

  forgotPassword() {
    // Implement forgot password functionality
    console.log('Forgot password')
  }
}