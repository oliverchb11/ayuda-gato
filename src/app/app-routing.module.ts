import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './backofice/auth/UI/mainpage/mainpage.component';

const routes: Routes = [
  {
    path: 'Home',
    component: MainpageComponent
  },
  {
    path: 'Maps',
    component: MainpageComponent
  },
  {
    path: 'Contact',
    component: MainpageComponent
  },
  {
    path: 'Description',
    component: MainpageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
