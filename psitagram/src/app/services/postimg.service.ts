import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})

export class PostimgService {
  
  constructor(private httpClient: HttpClient) { }
  getImages(selected: string){
    return this.httpClient.get(`https://dog.ceo/api/breed/${selected}/images/random`);
  }
}
