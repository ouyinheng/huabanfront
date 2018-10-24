import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComModule } from '../../components/com.module';

import { HomeComponent } from './home/home.component';
import { AnthorComponent } from './anthor/anthor.component';
import { BoardsComponent } from './boards/boards.component';
import { ExploresComponent } from './explores/explores.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: HomeComponent},
      {path: 'anthor/:type/:urlname', component: AnthorComponent}

    ]),
    ComModule
  ],
  declarations: [ HomeComponent, AnthorComponent, BoardsComponent, ExploresComponent ],
  exports: [ RouterModule ]
})
export class HuabanModule { }