import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {

  public autor: Entry<any>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contentfulService: ContentfulService
  ) { }

  ngOnInit() {
    const autorId = this.route.snapshot.paramMap.get('id');
    console.log("El autor es", autorId);
    
    this.contentfulService.getAutor(autorId)
    .then((autor) => {
      this.autor = autor;
    });
  }
  
  goToHome() {
    this.router.navigate(['/']);
  }

}
