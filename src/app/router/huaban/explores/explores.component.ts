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
  isLoading:boolean = true;
  name:string = null;
  des:string = null;
  getInfo(params:any) {
    this.http.getAnthorInfo(params).subscribe((res:any) => {
      if(res.result) {
        this.list = res.result.info
        this.name = res.result.name;
        this.des = res.result.description;
        this.changeValue();
      }
    })
  }
  changeValue() {
    this.objArr = []
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
  createMsg(err) {
    const div = document.createElement('div');
    div.setAttribute('class', 'o-msg');
    div.innerText = err;
    document.body.appendChild(div);
  }
  ngOnInit() {
    this.imgHost = imgHost;
    this.route.params.subscribe((params:any) => {
      this.type = params.type
      this.urlname = params.urlname
      this.getInfo(params)
    })
    document.getElementsByClassName('author-out')[0].addEventListener('scroll',(e:any)=>{
      let nodes = document.getElementsByClassName('author-out')[0];
      let top = nodes.scrollTop;
      let height = nodes.scrollHeight-500;
      if(height-top<=100 && this.isLoading) {
        this.isLoading = false;
        this.http.exploreMore({
          max: this.list[this.list.length-1].pin_id,
          id: this.urlname,
          limit: 20
        }).subscribe((res:any) => {
          if(res.result) {
            this.isLoading = true;
            this.list.push(...res.result)
          } else {
            this.createMsg('没有更多了');
          }
          this.changeValue()
        }, (err:any) => {
          console.log(err)
          this.isLoading = true;
        })
      }
  })
}
}
