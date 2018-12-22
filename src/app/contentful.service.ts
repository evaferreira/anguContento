import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';

@Injectable({
  providedIn: 'root'
})

const CONFIG = {
  space: '0oexzniaxsyn',
  accessToken: 'a7442a80aabd7c7ca77347429871c76fd4d81ecb389cb3e2f76bacfefb0558ca'
}


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
}








