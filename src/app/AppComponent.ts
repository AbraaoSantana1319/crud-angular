import { Component } from '@angular/core';

import { TabelaComponent } from "./tabela/tabela.component";
import { TituloComponent } from "./titulo/titulo.component";


@Component({
  selector: 'app-root',
  imports: [TabelaComponent, TituloComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud-angular';
linguagem: any;
}
//primeiro-projeto
