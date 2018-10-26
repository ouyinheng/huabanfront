import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
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
    private router:Router,
    private titleService: Title
  ) { }
  imgList:any[] = []
  imgHost:string = '';
  page:number = 1;
  tpCls:string = null;
  btnCls:string = null;
  login:string = null
  menu:any = null;
  banner:any = null;
  host:string = 'http://hbfile.b0.upaiyun.com/img/home/banner/'
  bannerImg:string = '';
  visibleMenu:boolean = false;
  favorite:any = null;
  searchValue:string = ''
  ngOnInit() {
    window.addEventListener('scroll',(e:any)=>{
      let top = document.documentElement.scrollTop;
      this.tpCls = top >= 100?'tpCls':''
      this.btnCls = top >= 100?'btnCls':''
      this.login = top >= 100?'my-btn-g':''
    })
    this.imgHost = imgHost;
    this.http.getHuabanHome(1).subscribe((res:any) => {
      if(res.result) {
        let that = this;
        let result = res.result;
        this.imgList = JSON.parse(result.recom);
        this.titleService.setTitle(result.title);
        this.menu = JSON.parse(result.menu);
        this.menu.categories = this.menu.categories.slice(0,9)
        this.favorite = JSON.parse(result.menu).categories;
        console.log(this.menu)
        this.banner = JSON.parse(result.banner)
        let i:number = (Math.random()*5)
        i = parseInt(i.toString());
        this.bannerImg = this.host+this.banner[i].cover.key
      }
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
  showMenu() {
    this.visibleMenu = true;
  }
  search() {
    this.http.searchAuto({q:this.searchValue,size:6}).subscribe((res:any) => {
      console.log('值',res)
    }, (err:any) => {
      console.log('错误',err)
    })
  }
  enter(val:string) {
    console.log(val)
    this.http.search({q:val}).subscribe((res:any) => {
      console.log('值',res)
    }, (err:any) => {
      console.log('错误',err)
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
