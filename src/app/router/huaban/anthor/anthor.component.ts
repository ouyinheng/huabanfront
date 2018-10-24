import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { HuabanService } from '../../../request/huaban.request'

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
  type:string = null;
  urlname:string = null;
  list:any[] = [];
  infos:any = null
  getInfo(params:any) {
    this.http.getAnthorInfo(params).subscribe((res:any) => {
      if(res.result) {
        this.list = JSON.parse(res.result)
        if(this.type=='boards')this.infos = JSON.parse(res.result)
      }
      // console.log(this.infos)
    }, (err:any) => {
      console.log('err', err)
    })
  }
  ngOnInit() {
    this.route.params.subscribe((params:any) => {
      this.type = params.type
      this.urlname = params.urlname
      this.getInfo(params)
    })
  }

}