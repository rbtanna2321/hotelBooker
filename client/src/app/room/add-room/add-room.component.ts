import { Component, OnInit, Renderer2, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { RoomService } from '../../room.service';
import { AuthenticationService} from '../../authentication.service';
@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {
  room: Room =  new Room();
  errorMsg: ErrorMsg = new ErrorMsg();
  uploadError: string;
  @ViewChild('image') private image: ElementRef;
  @Output() close = new EventEmitter();

  constructor(private router: Router, private roomService: RoomService , private auth: AuthenticationService) { }
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
  
  addRoom() {
    this.errorMsg.room_name = this.errorMsg.facilieties = '';
    !this.room.room_name ? this.errorMsg.room_name = 'Name is required' : '' ;
    !this.room.address ? this.errorMsg.address = " Address is Required" : '';
    if (!this.room.room_name || !this.room.address) {
      return;
    }
    var data = {
      room_name: this.room.room_name,
      address: this.room.address,
      facilieties: this.room.facilieties,
      images: [{
        url: this.url,
        files: this.files
      }],
      vender: this.auth.getUserDetails()._id
    };
    console.log(data)
    this.roomService.post(data).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/admin/room');
    },
    err => {
      console.error(err);
    });
  }
  ngOnInit() {
  }

}
class Room {
  room_name: String;
  address: String;
  vender: [];
  images:[];
  facilieties: String;
}
class ErrorMsg {
  room_name: String;
  address: String;
  facilieties: String;
}

