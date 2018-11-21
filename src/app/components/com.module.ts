import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { PictureComponent } from './picture/picture.component';
import { OinputComponent } from './oinput/oinput.component';
import { SearchlistComponent } from './searchlist/searchlist.component';
import { DialogComponent } from './dialog/dialog.component';
import { SlidetabComponent } from './slidetab/slidetab.component';
import { SlidecontentComponent } from './slidecontent/slidecontent.component';

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
    DialogComponent,
    SlidetabComponent,
    SlidecontentComponent
  ],
  exports: [
    ReactiveFormsModule,
    PictureComponent,
    OinputComponent,
    SearchlistComponent,
    DialogComponent,
    SlidetabComponent,
    SlidecontentComponent
  ]
})
export class ComModule {

}
