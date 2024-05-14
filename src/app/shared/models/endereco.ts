export class Endereco {
    cep: string = '';
    logradouro: string = '';
    complemento: string = '';
    bairro: string = '';
    cidade: string = '';
    uf: string = '';
    ibge: string = '';
    gia: string = '';
    ddd: string = '';
    siafi: string = '';
  
    constructor(
      cep: string,
      logradouro: string,
      complemento: string,
      bairro: string,
      cidade: string,
      uf: string,
      ibge: string,
      gia: string,
      ddd: string,
      siafi: string
    ) {
      this.cep = cep;
      this.logradouro = logradouro;
      this.complemento = complemento;
      this.bairro = bairro;
      this.cidade = cidade;
      this.uf = uf;
      this.ibge = ibge;
      this.gia = gia;
      this.ddd = ddd;
      this.siafi = siafi;
    }
  }
  