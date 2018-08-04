import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ContentfulService } from '../contentful.service';

import { Entry } from 'contentful';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  public libro: Entry<any>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contentfulService: ContentfulService 
  ) { }

  ngOnInit() {
    const libroId = this.route.snapshot.paramMap.get('id');
    console.log("El libro es", libroId);

    this.contentfulService.getLibro(libroId)
      .then((libro) => {
        this.libro = libro;
    });
  }
}
