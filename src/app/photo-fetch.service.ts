import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface PhotoResponse {
  urls: {
    regular: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotoFetchService {

  constructor(
    private http: HttpClient
  ) { }


  randomPic() {
    return this.http.get<PhotoResponse>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID HNuDlO8y99_oB-dKdbDazfg4783gjhBvRfie0NSAS58'
      }
    });
  }
}
