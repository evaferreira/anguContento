// autor.component.ts

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

// Traemos el service de Contentful
import { ContentfulService } from '../contentful.service';
// Traemos Entry de Contentful
import { Entry } from 'contentful';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {

  constructor(
	private contentfulService: ContentfulService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  public autor: Entry<any>;

  ngOnInit() {
    const autorId = this.route.snapshot.paramMap.get('id');
    console.log("El autor es", autorId);
	
	// Llamamos a la función y le enviamos el autor
	this.contentfulService.getAutor(autorId)
    .then((autor) => {
      this.autor = autor;
	});

	
  }

}









