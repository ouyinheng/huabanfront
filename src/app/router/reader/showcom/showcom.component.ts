import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcom',
  templateUrl: './showcom.component.html',
  styleUrls: ['./showcom.component.scss']
})
export class ShowcomComponent implements OnInit {

  constructor() { }
  tabs:any[] = ['关注', '推荐', '游戏', '娱乐', '直播'];
  ngOnInit() {
  }

}
