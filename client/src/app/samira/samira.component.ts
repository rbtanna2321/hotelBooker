import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from '../hotel.service';
import { AuthenticationService} from '../authentication.service';
import * as env from '../globals/env';
@Component({
  selector: 'app-samira',
  templateUrl: './samira.component.html',
  styleUrls: ['./samira.component.css']
})
export class SamiraComponent implements OnInit {

  title = 'OwlCarousel2 in Angular7 with Custom Navigation Arrows';
 
  carouselOptions = {
    margin: 0,
    nav: true,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 1,
        nav: true,
        loop: false
      },
      1500: {
        items: 1,
        nav: true,
        loop: false
      }
    }
  }
 
  images = [
    {
      text: "Everfresh Flowers",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/1.jpg"
    },
    {
      text: "Festive Deer",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/2.jpg"
    },
    {
      text: "Morning Greens",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/3.jpg"
    },
    {
      text: "Bunch of Love",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/4.jpg"
    },
    {
      text: "Blue Clear",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/5.jpg"
    },
    {
      text: "Evening Clouds",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/7.jpg"
    },
    {
      text: "Fontains in Shadows",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/8.jpg"
    },
    {
      text: "Kites in the Sky",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/9.jpg"
    },
    {
      text: "Sun Streak",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/10.jpg"
    }
  ];

  hotels: any;
  imageRoot = env.IMAGE_PATH;
  // images = [
  //   {
  //     text: "Everfresh Flowers",
  //     image: "{{imageRoot}}/home_slider_1.jpg"
  //   },
  //   {
  //     text: "Festive Deer",
  //     image: "{{imageRoot}}/home_slider_2.jpg"
  //   },
  //   {
  //     text: "Morning Greens",
  //     image: "{{imageRoot}}/home_slider_3.jpg"
  //   }
  // ]
  constructor(private router: Router, private hotelService: HotelService, private auth: AuthenticationService) { }
  ngOnInit() {
    this.getAllHotels();
  }

  getAllHotels() {
    this.hotelService.getAll().subscribe(res => {
      this.hotels = res;
    },
    err => {
      console.error(err);
    });
  }


}
