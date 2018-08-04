import { Injectable } from '@angular/core';
// Importamos lo necesario de Contentful
import { createClient, Entry } from 'contentful';

const CONFIG = {
  space: '0oexzniaxsyn',
  accessToken: '89cc7382aa807fdb565007ab53423da8731a34ddc2aabf07d45fcc8a19e63c0c',
  contentTypeIds: {
    autor: 'autor',
    libro: 'libro'
  }
}


@Injectable({
  providedIn: 'root'
})

export class ContentfulService {
  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() { }
  
  getAutores(query?: object): Promise<Entry<any>[]> {
     return this.cdaClient.getEntries(Object.assign({
       content_type: CONFIG.contentTypeIds.autor
     }, query))
     .then(res => res.items);
  }
  
  getLibros(query?: object): Promise<Entry<any>[]> {
     return this.cdaClient.getEntries(Object.assign({
       content_type: CONFIG.contentTypeIds.libro
     }, query))
     .then(res => res.items);
  }

  // Conseguir data de autor X
  getAutor(slug: string): Promise<Entry<any>> {
    return this.cdaClient.getEntries(Object.assign({
       content_type: CONFIG.contentTypeIds.autor
    }, {'fields.slug': slug}))
    .then(res => res.items[0]);
  }

  // Conseguir data de libro X
  getLibro(slug: string): Promise<Entry<any>> {
    return this.cdaClient.getEntries(Object.assign({
       content_type: CONFIG.contentTypeIds.libro
    }, {'fields.slug': slug}))
    .then(res => res.items[0]);
  }
  
}

