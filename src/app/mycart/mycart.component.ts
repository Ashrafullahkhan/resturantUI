import { Component, OnInit } from '@angular/core';
export interface Section {
  name: string;
  food: string;
  price: string;
}
@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css'],
})
export class MycartComponent implements OnInit {
  FoodList: Section[] = [
    {
      name: 'Chesse Burger',
      food: 'Burgers',
      price: '2.100 OMR',
    },
    {
      name: 'Dynamite Fries',
      food: 'Fries',
      price: '3.000 OMR',
    },
    {
      name: 'Crunchy',
      food: 'Starters',
      price: '$54.00',
    },
    {
      name: 'Crunchy',
      food: 'Starters',
      price: '$54.00',
    },
    {
      name: 'Crunchy',
      food: 'Starters',
      price: '$54.00',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
