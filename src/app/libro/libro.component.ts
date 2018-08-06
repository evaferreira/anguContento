import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Entry } from 'contentful';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private contentfulService: ContentfulService 
  ) { }

  public libro: Entry<any>;

  ngOnInit() {
    const libroId = this.route.snapshot.paramMap.get('id');
    console.log("El libro es", libroId);

    this.contentfulService.getLibro(libroId)
      .then((libro) => {
        this.libro = libro;
    });
  }

}
