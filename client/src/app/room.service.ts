import { Injectable } from '@angular/core';
import {HttpClient , HttpErrorResponse} from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient , private auth: AuthenticationService) { }
  post(data) {
    return this.http.post(this.baseUrl + '/rooms/room/add', data);
  }
  get() {
    let data = {
      id: this.auth.getUserDetails()._id
    };
    return this.http.post(this.baseUrl + '/rooms/room/', data);
  }
}
