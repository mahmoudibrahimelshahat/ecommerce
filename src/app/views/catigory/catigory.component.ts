import { Component, OnInit } from '@angular/core';
interface feature {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-catigory',
  templateUrl: './catigory.component.html',
  styleUrls: ['./catigory.component.css']
})
export class CatigoryComponent implements OnInit {

  Features: feature[] = [
    {value: 'all', viewValue: 'Featured'},
    {value: 'f1', viewValue: 'Featured A'},
    {value: 'f2', viewValue: 'Featured B'},
    {value: 'f3', viewValue: 'Featured c'},
  ];
  val: number;
  items = [];
  selectedKey = 'ALL';
  constructor() { }

  ngOnInit() {
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
        rate: 4,
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
