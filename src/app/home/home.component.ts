// home.component.ts

import { Component, OnInit } from '@angular/core';

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
	private contentfulService: ContentfulService
  ) { }
  
  // Creamos un array para guardar los autores
  private autores: Entry<any>[] = [];

  ngOnInit() {
  }

}






