import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './comDis/comdisRouter.module#ComdisModule' },
  { path: 'picture', loadChildren: './picture/pictureRouter.module#PictureModule' },
  { path: 'huaban', loadChildren: './huaban/huabanRouter.module#HuabanModule' },
  { path: 'reader', loadChildren: './reader/readerRouter.module#ReaderModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
