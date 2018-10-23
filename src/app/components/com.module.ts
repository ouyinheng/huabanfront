import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { PictureComponent } from './picture/picture.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    PictureComponent
  ],
  exports: [
    ReactiveFormsModule,
    PictureComponent
  ]
})
export class ComModule {

}
