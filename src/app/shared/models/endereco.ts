export class Endereco {
    // Declaração das propriedades do endereço com valores padrão
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
  
    // Construtor da classe para inicializar as propriedades
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
      // Inicializa as propriedades
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
  