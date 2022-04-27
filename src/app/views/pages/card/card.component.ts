import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  amount:number = 0;
  amo:number = 0;
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
  add() {
    if (this.amo < 5)
      this.amo = this.amo + 1;
    else
      console.log('NOT allowed')
  }

  remove() {
    if (this.amo > 0)
      this.amo = this.amo - 1;
    else
      console.log('NOT allwed larger')
  }
}
