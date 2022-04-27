import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  amount: number = 0;
  constructor() { }

  ngOnInit(): void {

  }
  addItem() {
    if (this.amount < 5)
      this.amount = this.amount + 1;
    else
      console.log('NOT allowed')
  }

  removeItem() {
    if (this.amount > 0)
      this.amount = this.amount - 1;
    else
      console.log('NOT allwed larger')
  }

}
