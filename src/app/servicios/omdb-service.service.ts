import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OmdbServiceService {
  URL = 'http://www.omdbapi.com/';
  API = 'fd23c108'; 
  constructor(private _httpClient: HttpClient) { }

  searchMovies(title: string): Observable<any> {
    return this._httpClient.get(this.URL + "?s=" + title + "&apikey=" + this.API);
  }

  getDetails(id) {
    return this._httpClient.get(this.URL + "?i=$" + id + "&plot=full&apikey=$" + this.API);
  }
}
