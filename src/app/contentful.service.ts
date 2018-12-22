import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';

const CONFIG = {
  space: '0oexzniaxsyn',
  accessToken: 'a7442a80aabd7c7ca77347429871c76fd4d81ecb389cb3e2f76bacfefb0558ca'
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
       content_type: 'autor'
     }, query))
     .then(res => res.items);
  }
  
	// contentful.service.ts
	// 1. Crear función que consiga libros
	// 2. En archivo home.ts llamar a la función
	// 3. En archivo home.html mostrar los datos que devuelve esa función
	
	
	getLibros(query?: object): Promise<Entry<any>[]> {
     return this.cdaClient.getEntries(Object.assign({
       content_type: 'libro'
     }, query))
     .then(res => res.items);
  }
  
  // Creamos una función que llama a un autor específico por su slug
  getAutor(slug: string): Promise<Entry<any>> {
  return this.cdaClient.getEntries(Object.assign({
     content_type: 'autor'
  }, {'fields.slug': slug}))
  .then(res => res.items[0]);
}

	
}








