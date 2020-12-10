import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pruebas-juli';
  texts = 'Menu Padre';
  rutas = 'home';



public prueba(ruta): void{
  if (ruta === 'home'){
    this.rutas = '';
  }else if (ruta === ''){

    this.rutas = 'home';
  }
}




}
