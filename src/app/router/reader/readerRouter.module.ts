import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComModule } from '../../components/com.module';
import { CommonModule } from '@angular/common';

import { ShowcomComponent } from './showcom/showcom.component'
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'showcom' ,pathMatch:'full'},
      {path: 'showcom', component: ShowcomComponent}
    ]),
    ComModule
  ],
  declarations: [ShowcomComponent],
  exports: []
})
export class ReaderModule { }