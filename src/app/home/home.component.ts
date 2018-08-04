import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Router } from '@angular/router';

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
    private router: Router,
    private contentfulService: ContentfulService  
  ) { }

  ngOnInit() {
    this.contentfulService.getAutores()
    .then(autores => this.autores = autores);
    
    this.contentfulService.getLibros()
    .then(libros => this.libros = libros);
  }

  goToAutor(autorId) {
    this.router.navigate(['/autor', autorId]);
  }

  goToLibro(libroId) {
    this.router.navigate(['/libro', libroId]);
  }

}
