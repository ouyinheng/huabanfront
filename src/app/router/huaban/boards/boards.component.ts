import { Component, OnInit, Input, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {imgHost} from '../../../config/config';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {

  title:string = null;
  host:string = null;
  visibleDialog:boolean = false;
  @Input()infos:any;
  constructor(
    private titleService: Title
  ) { 
  }
  showDialog(index:string) {
    this.visibleDialog = true;
  }
  close() {
    this.visibleDialog = false;
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
