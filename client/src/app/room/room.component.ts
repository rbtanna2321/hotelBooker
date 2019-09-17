import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';
import { RoomService } from '../room.service';
import { Router } from '@angular/router';
import { AuthenticationService} from '../authentication.service';
@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  headElements = ['name', 'address', 'facilities', 'action'];
  constructor(private router: Router, private hotelService: HotelService, private roomService: RoomService) { }

  hotels: any;
  rooms: any;

  ngOnInit() {
    // this.getVenderHotels();
    this.getVenderRooms();
  }

//   getVenderHotels() {
//   this.hotelService.get().subscribe(res => {
//     this.hotels = res;
//     console.log(this.hotels);
//   },
//   err => {
//     console.error(err);
//   });
// }

getVenderRooms() {
  this.roomService.get().subscribe(res => {
    this.rooms = res;
    console.log(this.rooms);
  },
  err => {
    console.error(err);
  });
}

}