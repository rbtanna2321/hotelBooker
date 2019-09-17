import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, TokenPayload } from '../authentication.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  credentials: TokenPayload = {
    _id: '',
    first_name: '',
    last_name: '',
    user_name: '',
    password: ''

  };

  constructor(private auth: AuthenticationService , private router: Router) { }

  register() {
    this.auth.register(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/admin/profile');
    },
    err => {
      console.error(err);
    });
  }
  ngOnInit() {
  }

}
