import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {

  constructor() { }
  @Input() imgList:any[];
  items:any[] = [1,3,4,4,5,6]
  ngOnInit() {
  }

}
