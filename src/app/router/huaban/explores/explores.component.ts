import { Component, OnInit, Input } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { HuabanService } from '../../../request/huaban.request'
import {imgHost} from '../../../config/config';
@Component({
  selector: 'app-explores',
  templateUrl: './explores.component.html',
  styleUrls: ['./explores.component.scss']
})
export class ExploresComponent implements OnInit {

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private http:HuabanService
  ) { }

  type:string = ''
  urlname:string = ''
  imgHost:string = '';
  @Input()list:any[];
  ngOnInit() {
    this.imgHost = imgHost;
  }

}
