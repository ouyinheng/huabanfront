import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComModule } from '../../components/com.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: HomeComponent}

    ]),
    ComModule,
    FormsModule
  ],
  declarations: [  HomeComponent],
  exports: [ RouterModule ]
})
export class ComdisModule { }