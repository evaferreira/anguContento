import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Entry } from 'contentful';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private contentfulService: ContentfulService  
  ) { }
  
  public autor: Entry<any>;

  ngOnInit() {
    const autorId = this.route.snapshot.paramMap.get('id');
    console.log("El autor es...", autorId);
    
    this.contentfulService.getAutor(autorId)
      .then((autor) => {
        this.autor = autor;
    });
  }
}
