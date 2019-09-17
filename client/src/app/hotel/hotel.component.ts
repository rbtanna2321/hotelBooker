import { Component, OnInit , ViewChild } from '@angular/core';
import { HotelService } from '../hotel.service';
import { Router } from '@angular/router';
import { AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  
  headElements = ['name', 'address', 'facilities', 'action'];
  constructor(private router: Router, private hotelService: HotelService, private auth: AuthenticationService) { }
  hotels: any;
 
 
  ngOnInit() {
    this.getVenderHotels();
  }

  getVenderHotels() {
  this.hotelService.get().subscribe(res => {
    this.hotels = res;
    console.log(this.hotels);
  },
  err => {
    console.error(err);
  });
}
}

