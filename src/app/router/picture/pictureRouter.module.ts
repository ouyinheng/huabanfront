import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComModule } from '../../components/com.module';
import { CommonModule } from '@angular/common';

import { ShowimageComponent } from './showimage/showimage.component';
import { HuabanComponent } from './huaban/huaban.component';
import { HomeComponent } from './huaban/home/home.component'
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'home' ,pathMatch:'full'},
      {path: 'home', component: ShowimageComponent},
      {path: 'huaban', component: HuabanComponent}
    ]),
    ComModule
  ],
  declarations: [ShowimageComponent, HuabanComponent, HomeComponent],
  exports: []
})
export class PictureModule { }