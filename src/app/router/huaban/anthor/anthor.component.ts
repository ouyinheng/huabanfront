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
  type:string = ''
  urlname:string = ''
  getInfo(params:any) {
    this.http.getAnthorInfo(params).subscribe((res:any) => {
      console.log('数据:---->', res)
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
