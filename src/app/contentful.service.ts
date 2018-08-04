import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';

const CONFIG = {
  space: '0oexzniaxsyn',
  accessToken: '89cc7382aa807fdb565007ab53423da8731a34ddc2aabf07d45fcc8a19e63c0c',

  contentTypeIds: {
    autor: 'autor'
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
}
