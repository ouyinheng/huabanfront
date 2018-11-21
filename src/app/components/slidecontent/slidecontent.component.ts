import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'slide-content',
  templateUrl: './slidecontent.component.html',
  styleUrls: ['./slidecontent.component.scss']
})
export class SlidecontentComponent implements OnInit {
  @Input()tab:number;
  width:number = 0;
  constructor() { }

  ngOnInit() {
    this.width = document.body.clientWidth;
  }

}
