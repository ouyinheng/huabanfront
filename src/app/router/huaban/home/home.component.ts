import { Component, OnInit } from '@angular/core';
import { HuabanService } from '../../../request/huaban.request'
import {Router,ActivatedRoute} from '@angular/router';

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
  host:string = '//img.hb.aicdn.com/'
  imgList:any[] = []
  ngOnInit() {
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
