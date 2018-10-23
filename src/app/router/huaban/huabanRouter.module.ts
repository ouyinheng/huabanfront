import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComModule } from '../../components/com.module';

import { HomeComponent } from './home/home.component';
import { AnthorComponent } from './anthor/anthor.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: HomeComponent},
      {path: 'anthor/:type/:urlname', component: AnthorComponent}

    ]),
    ComModule
  ],
  declarations: [ HomeComponent, AnthorComponent ],
  exports: [ RouterModule ]
})
export class HuabanModule { }