import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private autores: Entry<any>[] = [];

  constructor(
    private router: Router,
    private contentfulService: ContentfulService
  ) { }
  
  ngOnInit() {
    this.contentfulService.getAutores()
    .then(autores => this.autores = autores)
  }

  goToDetails(autorId) {
    this.router.navigate(['/autor', autorId]);
  }

}
