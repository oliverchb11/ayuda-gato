import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulariosComponent } from './formularios/formularios.component';
import { ReactiveFormsModule,FormsModule } from "@angular/forms";


@NgModule({
  declarations: [FormulariosComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    FormulariosComponent
  ]
})
export class FormularioModule { }
