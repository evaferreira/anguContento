// home.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Traigo el service
import { ContentfulService } from '../contentful.service';
// Traigo Entry
import { Entry } from 'contentful';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
	// Dependency injection
	private contentfulService: ContentfulService,
	private router: Router
  ) { }
  
  // Creamos un array para guardar los autores
  private autores: Entry<any>[] = [];
  private libros: Entry<any>[] = [];
  
  ngOnInit() {
    this.contentfulService.getAutores()
	.then(autores => this.autores = autores);
	
    this.contentfulService.getLibros()
	.then(libros => this.libros = libros);
	
	//libros => this.libros = libros
  }
  
  // Las funciones se crean por fuera de ngOnInit
  goToDetails(autorId) {
	this.router.navigate(['/autor', autorId]);
  }

  

}








