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
  ngOnInit() {
    this.imgHost = imgHost;
    this.http.getHuabanHome().subscribe((res:any) => {
      if(res.result)this.imgList = JSON.parse(res.result);
      console.log('this.imgList:----->',this.imgList)
    }, (err:any) => {
      console.log('err:----->',err)
    })
  }
  navTo(type:string, urlname:string) {
    this.router.navigate([`/huaban/anthor/${type}/${urlname}`])
  }
}
