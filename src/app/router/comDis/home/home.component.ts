import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  items:any[] = [1,2,3,4,5];
  value:string = 's';
  ngOnInit() {
  }
  test() {
    console.log(this.value)
  }
}
