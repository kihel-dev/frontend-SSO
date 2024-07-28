import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService) { }

  loginWithGoogle(): void {
    this.authService.loginWithGoogle(); 
  }

  loginWithGithub(): void {
    this.authService.loginWithGithub(); 
  }
}
