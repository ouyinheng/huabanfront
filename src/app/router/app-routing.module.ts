import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'picture', loadChildren: './picture/pictureRouter.module#PictureModule' },
  { path: 'huaban', loadChildren: './huaban/huabanRouter.module#HuabanModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
