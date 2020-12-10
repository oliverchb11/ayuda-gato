import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginator-table',
  templateUrl: './paginator-table.component.html',
  styleUrls: ['./paginator-table.component.scss']
})
export class PaginatorTableComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('page') page: number;
  public   totalPages: number;
  public qtdPaginacao = 3;
  public arrayPages: number[];
  @Output() mudouPagina = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  public listaPaginas(): void{
    this.arrayPages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      this.arrayPages.push(i);
    }
  }

  @Input('totalPages')
  set updateTotalPagesValue(totalPages: number) {
    this.totalPages = totalPages;
    this.listaPaginas();
  }

 public mudaPag(pag: number): void{
    this.mudouPagina.emit({ valor: pag });
  }

  public proxPagina(): void{
    if (this.page < this.totalPages) {
      this.mudaPag(this.page + 1);
    }
  }

  public paginaAnt(): void{
    if (this.page > 1) {
      this.mudaPag(this.page - 1);
    }
  }

  public primeiraPag(): void{
    this.mudaPag(1);
  }

  public ultimaPag(): void{
    this.mudaPag(this.totalPages);
  }

  public diminuiPaginacao(pags): any {
    const metadePgs = Math.ceil(this.qtdPaginacao / 2);
    let i = this.page - metadePgs;
    if (i < 0) {
      i = 0;
    }
    let f = i + this.qtdPaginacao;
    if (f > pags.length) {
      f = pags.length;
      i = f - this.qtdPaginacao;
      if (i < 0) {
        i = 0;
      }
    }
    return pags.slice(i, f);
  }
}
