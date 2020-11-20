import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {
public cantidadFormularios = [];
public formulario: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre:["",Validators.required],
      apellido:["",Validators.required],
      cedula:["",Validators.required],
      correo:["",Validators.required],
    })
  }


 public cantidadUsuarios(canUsuarios){
   let cantidad = parseInt(canUsuarios.value)
   for(let i = 0; i < cantidad ; i++ ){
    this.cantidadFormularios.push(i)
   }
 }

 public cargarDatos(datosFormulario:FormGroup){
  console.log(datosFormulario.value)
 }
}
