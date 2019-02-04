import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
    private URL = 'https://api.themoviedb.org/';
    private apiKey = '44313eca34da29f04c1e9db7fa1e6326';

    constructor(private http: HttpClient) { }

    public getMovies(): Observable<any> {
        return this.http.get(`${this.URL}3/search/movie?api_key=${this.apiKey}&query=Harry+Potter`)
        .pipe(map(data => {
          return data['results'];
        }));
    }

    public getMovieDetails(id) {
        return this.http.get(`${this.URL}3/movie/${id}?api_key=${this.apiKey}`);
    }
}
