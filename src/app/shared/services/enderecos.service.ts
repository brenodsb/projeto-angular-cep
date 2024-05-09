import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Endereco } from '../interfaces/endereco.interfaces';

@Injectable({
  providedIn: 'root'
})
export class EnderecosService {

  httpClient = inject(HttpClient);

  getAll() {
    return this.httpClient.get<Endereco[]>('/api/enderecos')
  }
  
}
