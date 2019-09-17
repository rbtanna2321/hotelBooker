import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, TokenPayload } from '../../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  credentials: TokenPayload = {
    _id: '',
    first_name: '',
    last_name: '',
    user_name: '',
    password: ''

  };

  constructor(private auth: AuthenticationService , private router: Router) { }

  login() {
    this.auth.login(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/admin/profile');
    },
    err => {
      console.error(err);
    });
  }

}
