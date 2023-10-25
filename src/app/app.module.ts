import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';

/* Um módulo, no Angular, abriga importações de outros módulos, services e abriga outros
* componentes. */

/* Basicamente, é uma forma de combinarmos componentes, diretivas, pipes e serviços que podem ser combinados. */

/* Poderemos ter um "ProfileModule", por exemplo. */

/* Fazendo um paralelo com o Spring, precisamos declarar o componente como um Component do Spring para que o Angular rastreie esse componente. */
@NgModule({
  declarations: [ //Estamos declarando os componentes desse módulo. Se quisermos pegar um componente de outro módulo, precisaremos importá-lo. Poderíamos ter, por exemplo, o HomeModule e o ProfileModule.
    AppComponent, MyComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
