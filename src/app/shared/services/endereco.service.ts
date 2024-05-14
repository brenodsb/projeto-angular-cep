import { Injectable } from '@angular/core';
import { Endereco } from '../models/endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {
    constructor() { }

  // Método para obter o endereço com base no CEP
  getEndereco(cep: string): Promise<Endereco> {
    // Faz uma requisição à API ViaCEP para obter os dados do endereço
    return fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => response.json()) // Converte a resposta para JSON
      .then((data) => {
        // Cria e retorna uma nova instância da classe Endereco com os dados recebidos
        return new Endereco(
          data.cep,
          data.logradouro,
          data.complemento,
          data.bairro,
          data.localidade,
          data.uf,
          data.ibge,
          data.gia,
          data.ddd,
          data.siafi,
        );
      }
    );
  }
}
