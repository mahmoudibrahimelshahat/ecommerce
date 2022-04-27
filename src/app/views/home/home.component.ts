import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  val: number;
  // items= [1,2,3,4,5,6,7]
  items = [];
  selectedKey = 'ALL';
  constructor() { }

  ngOnInit() {
     AOS.init();
    this.items = [
      // {
      //   id: 1,
      //   title: "Green Dress with details ",
      //   image: 'assets/11.png',
      //   type: 'NEW',
      //   rate: 4,
      //   desc: 'Lorem lipsum ....'
      // },
      {
        id: 1,
        title: "Green Dress with details ",
        image: 'assets/11.png',
        type: 'NEW',
      },
      {
        id: 2,
        title: "Green Dress with details ",
        image: 'assets/22.png',
        type: 'FEATURED',
        rate: 4,
      },
      {
        id: 3,
        title: "Green Dress with details ",
        image: 'assets/33.png',
        type: 'OFFER',
        rate: 4,
      },
      {
        id: 4,
        title: "Green Dress with details ",
        image: 'assets/yo.png',
        type: 'NEW',
        rate: 4,
      },
      {
        id: 5,
        title: "Green Dress with details ",
        image: 'assets/55.png',
        type: 'FEATURED',
        rate: 4,
      },
      {
        id: 6,
        title: "Green Dress with details ",
        image: 'assets/yoo.png',
        type: 'OFFER',
        rate: 4,
      },
      
    ]
  }
}

