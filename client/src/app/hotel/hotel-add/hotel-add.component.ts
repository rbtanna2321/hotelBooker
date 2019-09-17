import { Component, OnInit, Renderer2, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from '../../hotel.service';
import { AuthenticationService} from '../../authentication.service';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

@Component({
  selector: 'app-hotel-add',
  templateUrl: './hotel-add.component.html',
  styleUrls: ['./hotel-add.component.css']
})
export class HotelAddComponent implements OnInit {
  hotel: Hotel =  new Hotel();
  errorMsg: ErrorMsg = new ErrorMsg();
  uploadError: string;
  @ViewChild('image') private image: ElementRef;
  @Output() close = new EventEmitter();

  constructor(private router: Router, private hotelService: HotelService , private auth: AuthenticationService) { }
  files: {};
  url: string;
  onSelectFile(event) { // called each time file input changes
      if (event.target.files && event.target.files[0]) {
        this.files = event.target.files;
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]); // read file as data url
        reader.onload = (event) => { // called once readAsDataURL is completed
          this.url = event.target.result;
        }
      }
  }

  addHotel() {
    this.errorMsg.hotel_name = this.errorMsg.facilieties = '';
    !this.hotel.hotel_name ? this.errorMsg.hotel_name = 'Name is required' : '' ;
    !this.hotel.address ? this.errorMsg.address = " Address is Required" : '';
    if (!this.hotel.hotel_name || !this.hotel.address) {
      return;
    }
    var data = {
      hotel_name: this.hotel.hotel_name,
      address: this.hotel.address,
      facilieties: this.hotel.facilieties,
      images: [{
        url: this.url,
        files: this.files
      }],
      vender: this.auth.getUserDetails()._id
    };
    this.hotelService.post(data).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/admin/hotel');
    },
    err => {
      console.error(err);
    });
  }
  ngOnInit() {
  }

}
class Hotel {
  hotel_name: String;
  address: String;
  vender: [];
  images:[];
  facilieties: String;
}
class ErrorMsg {
  hotel_name: String;
  address: String;
  facilieties: String;
}
