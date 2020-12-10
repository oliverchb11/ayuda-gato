import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemMenuComponent } from './UI/components/item-menu/item-menu.component';
import { SharedRoutingModule } from './shared-routing.module';
import { PaginatorTableComponent } from './UI/components/paginator-table/paginator-table.component';
import { UsersListComponent } from './UI/components/users-list/users-list.component';




@NgModule({
  declarations: [ItemMenuComponent, PaginatorTableComponent, UsersListComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [ItemMenuComponent, PaginatorTableComponent]
})
export class SharedModule { }
