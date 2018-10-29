import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { PictureComponent } from './picture/picture.component';
import { OinputComponent } from './oinput/oinput.component';
import { SearchlistComponent } from './searchlist/searchlist.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    PictureComponent,
    OinputComponent,
    SearchlistComponent,
    DialogComponent
  ],
  exports: [
    ReactiveFormsModule,
    PictureComponent,
    OinputComponent,
    SearchlistComponent,
    DialogComponent
  ]
})
export class ComModule {

}
