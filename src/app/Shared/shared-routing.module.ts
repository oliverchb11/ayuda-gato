import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemMenuComponent} from './UI/components/item-menu/item-menu.component';
import {PaginatorTableComponent} from './UI/components/paginator-table/paginator-table.component';
import { UsersListComponent } from './UI/components/users-list/users-list.component';
const routes: Routes = [
                       {
                         path : 'home',
                         component: ItemMenuComponent,
                       },
{
  path: 'About',
  component: ItemMenuComponent,
},
{
  path : 'Paginator/:1',
  component: PaginatorTableComponent,
},
{
  path : 'Users',
  component: UsersListComponent,
}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class SharedRoutingModule { }