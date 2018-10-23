import { Component, OnInit } from '@angular/core';
import { PictureService } from '../../../request/picture.service'

@Component({
  selector: 'app-huaban',
  templateUrl: './huaban.component.html',
  styleUrls: ['./huaban.component.scss']
})
export class HuabanComponent implements OnInit {

  constructor(
    private hHttp:PictureService
  ) { }
  imgList:any[] = []
  ngOnInit() {
    this.hHttp.getHuBanImg().subscribe((res:any) => {
      let obj = JSON.parse(res.result)
      console.log(obj)
      this.imgList = obj.pins
    }, (err:any) => {
        console.log("err---->", err)
    })
  }

}
