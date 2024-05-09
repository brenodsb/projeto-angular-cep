import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  form = new FormGroup({
    nome: new FormControl<string>("", {
      nonNullable: true,
      validators: Validators.required,
    }),
    data_de_nascimento: new FormControl<string>("", {
      nonNullable: true,
      validators: Validators.required,
    }),
    cpf: new FormControl<string>("", {
      nonNullable: true,
      validators: Validators.required,
    }),
    email: new FormControl<string>("", {
      nonNullable: true,
      validators: Validators.required,
    }),
    telefone: new FormControl<string>("", {
      nonNullable: true,
      validators: Validators.required,
    }),
    cep: new FormControl<string>("", {
      nonNullable: true,
      validators: Validators.required,
    }),
    rua: new FormControl<string>("", {
      nonNullable: true,
      validators: Validators.required,
    }),
    numero: new FormControl<string>("", {
      nonNullable: true,
      validators: Validators.required,
    }),
    complemento: new FormControl<string>("", {
      nonNullable: true,
      validators: Validators.required,
    }),
    bairro: new FormControl<string>("", {
      nonNullable: true,
      validators: Validators.required,
    }),
    cidade: new FormControl<string>("", {
      nonNullable: true,
      validators: Validators.required,
    }),
    estado: new FormControl<string>("", {
      nonNullable: true,
      validators: Validators.required,
    }),
  })

  onSubmit(){}
}
