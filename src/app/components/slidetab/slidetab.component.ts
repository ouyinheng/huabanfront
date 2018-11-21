import { Component, OnInit, Input } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'slide-tab',
  templateUrl: './slidetab.component.html',
  styleUrls: ['./slidetab.component.scss']
})
export class SlidetabComponent implements OnInit {

  @Input()tabs:any;
  left:number = 0;
  constructor(
    private router:Router,
    private route:ActivatedRoute
  ) { }
  now:number = 0;
  move(i:number) {
    this.left = i * 40;
    this.now = i;
    this.saveIndex(i);
  }
  saveIndex(i:number) {
    this.router.navigate(['./'], {
      relativeTo: this.route,
      queryParams: {
        tab: i
      },
      replaceUrl:true
    })
  }
  ngOnInit() {
    this.saveIndex(this.now);
    this.now = this.route.snapshot.queryParams.tab
    this.move(this.now);
    // console.log(this.route.snapshot.queryParams.tab)
  }
}
