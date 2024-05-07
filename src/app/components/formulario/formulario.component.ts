import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { EnderecosService } from '../../services/enderecos/enderecos.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

    enderecos: any[] = [];

    enderecosService = inject(EnderecosService);

    ngOnInit() {
      this.enderecosService.getAll().subscribe((enderecos) => {
        this.enderecos = enderecos;
    });
  }

}
