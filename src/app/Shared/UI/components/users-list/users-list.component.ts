import { Component, OnInit } from '@angular/core';
import { UsersListService } from 'src/app/core/services/users-list.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  public usuarios: any[];
  public page: number;
  public perPage: number;
  public total: number;
  public totalPages: number;
  constructor(private userService: UsersListService) {
    this.page = 1;
   }

  ngOnInit(): void {
    this.getUsersComp(this.page);
  }


 public getUsersComp(page: number): void{
    this.userService.getUsers$(page).subscribe((data: any) => {
      console.log(data);
      this.usuarios = data.data;
      this.page = data.page;
      this.total = data.total;
      this.totalPages = data.total_pages;
    });
  }

 public mudouPagina(evento): void{
    this.getUsersComp(evento.valor);
  }
}
