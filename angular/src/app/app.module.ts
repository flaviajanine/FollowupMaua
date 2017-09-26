import { ErrorHandler }                     from '@angular/core';
import { BrowserModule }                    from '@angular/platform-browser';
import { RouterModule }                     from '@angular/router';
import { NgModule }                         from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule }                       from '@angular/http';
import { BrowserAnimationsModule }          from '@angular/platform-browser/animations';
// até aqui, são módulos do angular de qqr projeto
// depois são coisas que são criadas de acordo com a criação

// rotas e módulos
import { routes, AppRoutingModule }         from './app-routing.module';
import { AppComponent }                     from './app.component';
import { UIModule }                         from './ui/ui.module';
import { NiComponentsModule }               from './ni-components/ni-components.module';
import { PagesModule }                      from './pages/pages.module';

// components
import { DefaultLayoutComponent }           from './layouts/default/default.component';
import { BoxedLayoutComponent }             from './layouts/boxed/boxed.component';
import { DefaultCLayoutComponent }          from './layouts/default-c/default-c.component';
import { BoxedCLayoutComponent }            from './layouts/boxed-c/boxed-c.component';
import { ExtraLayoutComponent }             from './layouts/extra/extra.component';

// services
import { CadastroService } from './services/cadastro.service';
import { LoginService } from './services/login.service';


// tratamento de erro

@NgModule({
  declarations : [
    // toda vez que criamos um novo component
    // ele cria aqui dentro de declarations
    AppComponent,
    DefaultLayoutComponent,
    BoxedLayoutComponent,
    DefaultCLayoutComponent,
    BoxedCLayoutComponent,
    ExtraLayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    AppRoutingModule,
    UIModule,
    NiComponentsModule,
    PagesModule
  ],
  providers: [ 
     LoginService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
