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
  searchValue:string = '';
  searchList:any = [];
  explores:any[] = [];
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
        this.imgList = result.recom;
        this.titleService.setTitle(result.title);
        this.menu = JSON.parse(JSON.stringify(result.menu));
        this.menu.categories = this.menu.categories.slice(0,9)
        this.favorite = result.menu.categories;
        this.banner = result.banner
        this.explores = result.explores
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
      if(res.result)this.imgList.push(...res.result.recommends)
    }, (err:any) => {
      console.log('err:----->',err)
    })
  }
  showMenu() {
    this.visibleMenu = true;
  }
  search() {
    if(!this.searchValue)this.searchList=[];
    this.http.searchAuto({q:this.searchValue,size:6}).subscribe((res:any) => {
      this.searchList = res.result.list
    }, (err:any) => {
      console.log('错误',err)
    })
  }
  enter(val:string) {
    if(val)this.searchValue = val;
    this.http.search({q:this.searchValue}).subscribe((res:any) => {

    }, (err:any) => {
      console.log('错误',err)
    })
  }
  navTo(type:string, urlname:string, board_id:string) {
    if(type=='users') return;
    if(type=='boards')window.open(`/anthor/${type}/${board_id}`)
    else window.open(`/anthor/${type}/${urlname}`)
  }
  loadMore() {
    this.getHomeImage(++this.page)
  }
}
