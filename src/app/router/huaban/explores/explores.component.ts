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
  objArr:any[] = [];
  list:any[] = [];;

  getInfo(params:any) {
    this.http.getAnthorInfo(params).subscribe((res:any) => {
      if(res.result) {
        this.list = JSON.parse(res.result)
        console.log(this.list)
        this.list.map((item:any, index:number) => {
          let scale:number = item.file.height/item.file.width;
          let width:number = 236;
          let height:number = scale*width;
          let col = parseInt(index/4+'');
          let row = parseInt(index%4+'');
          let top = 20;
          let left = 236*row + 50*row;
          this.objArr.map((items:any, index:number) => {
            if(col > items.col && row == items.row) {
              top += items.height + 140
            }
          })
          this.objArr.push({
            item, col, row, top, left, width, height,
          })
        })
      }
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
