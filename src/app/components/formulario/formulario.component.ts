import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

    enderecos: any[] = [];

    httpClient = inject(HttpClient);

    ngOnInit() {
      this.httpClient.get<any>('/api/enderecos').subscribe((enderecos) => {
        this.enderecos = enderecos;
    });
  }

}
