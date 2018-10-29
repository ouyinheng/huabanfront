import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'o-input',
  templateUrl: './oinput.component.html',
  styleUrls: ['./oinput.component.scss']
})
export class OinputComponent implements OnInit {
  constructor() { }
  @Input()size:string;
  @Input()type:string='text';
  @Input()value:string;
  sw:string = '200px'

  @Output() sendValue = new EventEmitter();
  send() {
    this.sendValue.emit();
  }
  ngOnInit() {
    switch (this.size) {
      case 'mini':
        this.sw = '200px';
        break;
      case 'middle':
        this.sw = '300px';
        break;
      case 'large':
        this.sw = '400px';
        break;
      default:
        this.sw = '200px';
        break;
    }
  }

}
