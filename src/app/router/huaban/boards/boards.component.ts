import { Component, OnInit, Input } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Title } from '@angular/platform-browser';
import { HuabanService } from '../../../request/huaban.request'
import {imgHost} from '../../../config/config';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {

  title:string = null;
  host:string = null;
  objArr:any[] = [];
  infos:any = null;
  isShow:boolean = true
  type:string = null;
  urlname:string = null;
  isLoading:boolean = true;
  constructor(
    private titleService: Title,
    private router:Router,
    private route:ActivatedRoute,
    private http:HuabanService
  ) { 
  }
  getInfo(params:any) {
    this.http.getAnthorInfo(params).subscribe((res:any) => {
      if(res.result) {
        this.infos = JSON.parse(res.result)
        this.titleService.setTitle(this.infos.title);
        console.log(this.infos.pins)
        this.changeValue()
      }
    }, (err:any) => {
      console.log('err', err)
    })
  }
  changeValue() {
    this.objArr = []
    this.infos.pins.map((item:any, index:number) => {
      let scale:number = item.file.height/item.file.width;
      let width:number = 236;
      let height:number = scale*width;
      let col = parseInt(index/4+'');
      let row = parseInt(index%4+'');
      let top = 20;
      let left = 236*row + 50*row;
      this.objArr.map((items:any, index:number) => {
        if(col > items.col && row == items.row) {
          top += items.height + 50
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
    this.host = imgHost
    this.route.params.subscribe((params:any) => {
      this.type = params.type
      this.urlname = params.urlname
      this.getInfo(params)
    })
    document.getElementsByClassName('boards-out')[0].addEventListener('scroll',(e:any)=>{
      let nodes = document.getElementsByClassName('boards-out')[0];
      let top = nodes.scrollTop;
      let height = nodes.scrollHeight-500;
      if(height-top<=0 && this.isLoading) {
        this.isLoading = false;
        this.http.boardsMore({
          max: this.infos.pins[this.infos.pins.length-1].pin_id,
          id: this.urlname,
          limit: 20
        }).subscribe((res:any) => {
          if(res.result) {
            this.isLoading = true;
            this.infos.pins.push(...res.result.pins)
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
