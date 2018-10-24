import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {imgHost} from '../../../config/config';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {

  title:string = null;
  host:string = null;
  @Input()infos:any;
  constructor(
    private titleService: Title
  ) { 
  }

  ngOnInit() {
    this.host = imgHost
  }
  ngOnChanges() {
    if(this.infos) {
      console.log(this.infos)
      this.titleService.setTitle(this.infos.title)
    }
  }

}
