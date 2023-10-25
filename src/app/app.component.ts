import { Component } from '@angular/core';

/* Dentro desse arquivo, temos a classe que declara o componente. */

/* O decorator "@Component" enxerga a classe como um componente. */

/* No Angular, utilizamos decorators para definirmos o que cada classe representa na aplicação. */
@Component({
  selector: 'app-root', //O "selector" é a forma que selecionaremos esse componente.
  templateUrl: './app.component.html', //O "templateUrl" é o arquivo HTML que será renderizado.
  styleUrls: ['./app.component.scss'] //O "styleUrls" é o arquivo CSS que será renderizado.
})
export class AppComponent {
  title = 'angular-live';
}
