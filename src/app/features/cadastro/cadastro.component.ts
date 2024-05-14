import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators, AbstractControl, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Endereco } from '../../shared/models/endereco';
import { EnderecoService } from '../../shared/services/endereco.service';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { CommonModule } from '@angular/common';
import { debug } from 'console';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, NgxMaskDirective, NgxMaskPipe, CommonModule],
  providers: [ provideNgxMask() ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})

export class CadastroComponent {
  enderecoForm: FormGroup;

  constructor(private fb: FormBuilder, private enderecoService: EnderecoService) {
    this.enderecoForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      data_de_nascimento: ['', [Validators.required, this.validarDataDeNascimento]],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{11}$/), this.validarCPF]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.pattern(/^\d{10,11}$/)]],
      cep: ['', [Validators.required]],
      logradouro: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: [''],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      uf: ['', [Validators.required, Validators.pattern(/^[A-Z]{2}$/)]],
      ibge: ['', Validators.required],
      gia: [''],
      ddd: ['', Validators.required],
      siafi: ['', Validators.required]
    });
  }

  onCepChange(): void {
    const cep = this.enderecoForm.get('cep')?.value;
    if (cep && cep.length === 8) {
      const endereco = this.enderecoService.getEndereco(cep).then((endereco: Endereco) => {
        this.enderecoForm.patchValue(endereco);
      });
    }
  }

  private validarDataDeNascimento(control: AbstractControl): { [key: string]: boolean } | null {
    let value = control.value;
    value = value.replace(/[^\d]+/g, '');
  
    const regex = /^\d{8}$/;
  
    if (value && !regex.test(value)) {
      return { 'invalidDate': true };
    }
  
    const day = Number(value.substr(0, 2));
    const month = Number(value.substr(2, 2));
    const year = Number(value.substr(4, 4));
  
    const date = new Date(year, month - 1, day);
  
    if (isNaN(date.getTime()) || date.getDate() !== day || date.getMonth() + 1 !== month || date.getFullYear() !== year) {
      return { 'invalidDate': true };
    }
        return null;
  }

  private validarCPF(control: AbstractControl): { [key: string]: boolean } | null {
    let cpf = control.value;
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos
  
    if (cpf.length !== 11 || cpf === '00000000000' || cpf === '11111111111' ||
        cpf === '22222222222' || cpf === '33333333333' || cpf === '44444444444' ||
        cpf === '55555555555' || cpf === '66666666666' || cpf === '77777777777' ||
        cpf === '88888888888' || cpf === '99999999999') {
      return { 'invalidCPF': true };
    }
  
    let soma = 0;
    let resto;
  
    for (let i = 1; i <= 9; i++) {
      soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
  
    resto = (soma * 10) % 11;
  
    if ((resto === 10) || (resto === 11)) {
      resto = 0;
    }
  
    if (resto !== parseInt(cpf.substring(9, 10))) {
      return { 'invalidCPF': true };
    }
  
    soma = 0;
    for (let i = 1; i <= 10; i++) {
      soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
  
    resto = (soma * 10) % 11;
  
    if ((resto === 10) || (resto === 11)) {
      resto = 0;
    }
  
    if (resto !== parseInt(cpf.substring(10, 11))) {
      return { 'invalidCPF': true };
    }
  
    return null;
  }
  
}