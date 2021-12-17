import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  objs: any[] = [
    {id: 1, title: "ABC", count: 8},
    {id: 2, title: "DEF", count: 20},
    {id: 3, title: "GHI", count: 34},
    {id: 6, title: "xzy", count: 4},
    {id: 7, title: "stv", count: 7},
    {id: 4, title: "JKL", count: 10},
    {id: 5, title: "MNO", count: 99}
  ];
  search: string = "";

  aBool: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
