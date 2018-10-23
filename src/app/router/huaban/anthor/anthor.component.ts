import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { HuabanService } from '../../../request/huaban.request'
import {imgHost} from '../../../config/config';
@Component({
  selector: 'app-anthor',
  templateUrl: './anthor.component.html',
  styleUrls: ['./anthor.component.scss']
})
export class AnthorComponent implements OnInit {

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private http:HuabanService
  ) { }
  type:string = ''
  urlname:string = ''
  imgHost:string = '';
  list:any[] = [];
  getInfo(params:any) {
    this.http.getAnthorInfo(params).subscribe((res:any) => {
      if(res.result) this.list = JSON.parse(res.result)
      console.log(this.list)
    }, (err:any) => {
      console.log('err', err)
    })
  }
  ngOnInit() {
    this.imgHost = imgHost;
    this.route.params.subscribe((params:any) => {
      this.type = params.type
      this.urlname = params.urlname
      this.getInfo(params)
    })
  }

}
