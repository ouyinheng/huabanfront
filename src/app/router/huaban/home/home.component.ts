import { Component, OnInit } from '@angular/core';
import { HuabanService } from '../../../request/huaban.request'
import {Router,ActivatedRoute} from '@angular/router';
import {imgHost} from '../../../config/config';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private http:HuabanService,
    private router:Router
  ) { }
  imgList:any[] = []
  imgHost:string = '';
  page:number = 1;
  ngOnInit() {
    this.imgHost = imgHost;
    this.http.getHuabanHome(1).subscribe((res:any) => {
      if(res.result)this.imgList = JSON.parse(res.result);
      console.log('this.imgList:----->',this.imgList)
    }, (err:any) => {
      console.log('err:----->',err)
    })
  }
  getHomeImage(page:number) {
    this.http.getHuabanHome(page).subscribe((res:any) => {
      if(res.result)this.imgList.push(...JSON.parse(res.result).recommends)
    }, (err:any) => {
      console.log('err:----->',err)
    })
  }
  navTo(type:string, urlname:string, board_id:string) {
    if(type=='users') return;
    if(type=='boards')window.open(`/huaban/anthor/${type}/${board_id}`)
    else window.open(`/huaban/anthor/${type}/${urlname}`)
  }
  loadMore() {
    this.getHomeImage(++this.page)
  }
}
