import { Component, OnInit } from '@angular/core';
import { PictureService } from '../../../request/picture.service'
@Component({
  selector: 'app-showimage',
  templateUrl: './showimage.component.html',
  styleUrls: ['./showimage.component.scss']
})
export class ShowimageComponent implements OnInit {

  constructor(
    private pHttp:PictureService
  ) { }
  imgList:any[] = []
  ngOnInit() {
    this.pHttp.getImageList(1)
    .subscribe((res:any) => {
      if(res.result)this.imgList = res.result;
      console.log('res:----->',res)
    }, (err:any) => {
      console.log('err:----->',err)
    })
  }

}
