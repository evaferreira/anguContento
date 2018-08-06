import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// import the router modules and the types for routes
import { RouterModule, Routes }   from '@angular/router';
import { ContentfulService } from './contentful.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AutorComponent } from './autor/autor.component';
import { LibroComponent } from './libro/libro.component';

// define the available routes
const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'autor/:id', component: AutorComponent, pathMatch: 'full'},
  { path: 'libro/:id', component: LibroComponent, pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AutorComponent,
    LibroComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ContentfulService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
