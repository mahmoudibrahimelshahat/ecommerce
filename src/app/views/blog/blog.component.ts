import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  items=[];
  constructor() { }

  ngOnInit(): void {
    this.items=[
      {
        img:'assets/b1.png'
      },
      {
        img:'assets/b2.png'
      },
      {
        img:'assets/b3.png'
      },
      {
        img:'assets/b4.png'
      },  {
        img:'assets/b5.png'
      },

    ]
  }

}
