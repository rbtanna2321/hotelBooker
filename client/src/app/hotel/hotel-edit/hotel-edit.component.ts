import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from '../../hotel.service';
import { AuthenticationService} from '../../authentication.service';

@Component({
  selector: 'app-hotel-edit',
  templateUrl: './hotel-edit.component.html',
  styleUrls: ['./hotel-edit.component.css']
})
export class HotelEditComponent implements OnInit {
  hotel: Hotel =  new Hotel();
  errorMsg: ErrorMsg = new ErrorMsg();
  hotels: any;
  editHotels: any;
  id = {id: ''};


  constructor(private router: Router, private hotelService: HotelService , private auth: AuthenticationService ) { }

  ngOnInit() {

  }

  editHotel() {
    this.errorMsg.hotel_name = this.errorMsg.facilieties = '';
    !this.hotel.hotel_name ? this.errorMsg.hotel_name = 'Name is required' : '' ;
    !this.hotel.editress ? this.errorMsg.editress = " Address is Required" : '';
    if (!this.hotel.hotel_name || !this.hotel.editress) {
      return;
    }
    var data = {
      hotel_name: this.hotel.hotel_name,
      editress: this.hotel.editress,
      facilieties: this.hotel.facilieties,
      vender: this.auth.getUserDetails()._id
    };

    this.hotelService.post(data).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/hotel');
    },
    err => {
      console.error(err);
    });
  }
}
class Hotel {
  hotel_name: String;
  editress: String;
  vender: [];
  facilieties: String;
}
class ErrorMsg {
  hotel_name: String;
  editress: String;
  facilieties: String;
}
