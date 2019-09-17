import { Injectable } from '@angular/core';
import {HttpClient , HttpErrorResponse} from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
 
  baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient , private auth: AuthenticationService) { }
  post(data) {
    return this.http.post(this.baseUrl + '/hotels/hotel/add', data);
  }
  get() {
    let data = {
      id: this.auth.getUserDetails()._id
    };
    return this.http.post(this.baseUrl + '/hotels/hotel/', data);
  }
  getAll() {
    return this.http.get(this.baseUrl + '/hotels/hotel/');
  }
}
