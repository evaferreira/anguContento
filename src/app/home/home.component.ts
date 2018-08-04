import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private autores: Entry<any>[] = [];
  private libros: Entry<any>[] = [];

  constructor(
    // Dependency injection
    private contentfulService: ContentfulService
  ) { }

  ngOnInit() {
    this.contentfulService.getAutores()
    .then(autores => this.autores = autores);
    
    this.contentfulService.getLibros()
    .then(libros => this.libros = libros);
  }

}
