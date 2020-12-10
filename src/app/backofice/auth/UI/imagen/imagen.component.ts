import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.scss']
})
export class ImagenComponent implements OnInit {
  @Input() imagenDesdeOtroComponente:string 
 
  ngOnInit(): void {
  }

}
