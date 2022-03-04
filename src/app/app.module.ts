import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component'; //vem quando importa o home component lá em baixo
import { RouterModule } from '@angular/router'; //vem do que colocamos la em baixo
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NumbersComponent } from './numbers/numbers.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent }, //passa os parametros caminho e o componente
      { path: 'about', component: AboutComponent },
      { path: 'numbers', component: NumbersComponent },
    ]), //configura as rotas a partir da raiz
  ],
  declarations: [AppComponent, HelloComponent, HomeComponent, AboutComponent,NumbersComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

// fica todas as declarações que vamos usar na pasta app
