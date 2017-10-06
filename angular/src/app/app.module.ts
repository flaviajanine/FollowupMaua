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
import { ApiService }                       from './services/api.service';
import { LoginService }                     from './services/login.service';
import { LogoutService }                    from './services/logout.service';
import { AuthGuard }                        from './services/auth-guard/auth-guard.service';
import { AuthAluno }                        from './services/auth-guard/auth-aluno.service';
import { AuthProf }                         from './services/auth-guard/auth-prof.service';
import { AuthAdmin }                        from './services/auth-guard/auth-admin.service';

@NgModule({

  declarations : [
    // toda vez que criamos um novo component
    // ele cria aqui dentro de declarations
    AppComponent,
    DefaultLayoutComponent,
    BoxedLayoutComponent,
    DefaultCLayoutComponent,
    BoxedCLayoutComponent,
    ExtraLayoutComponent,
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
     LoginService,
     LogoutService,
     ApiService,
     AuthGuard,
     AuthAdmin,
     AuthAluno,
     AuthProf,
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
