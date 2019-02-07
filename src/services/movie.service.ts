import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

export enum SearchType {
    movie = 'movie',
    series = 'tv',
    episode = 'episode'
}
@Injectable({
  providedIn: 'root'
})
export class MovieService {
    private URL = 'https://api.themoviedb.org/';
    private apiKey = '44313eca34da29f04c1e9db7fa1e6326';

    constructor(private http: HttpClient) { }

    public getMovies(title: string, type: SearchType): Observable<any> {
        return this.http.get(`${this.URL}3/search/${type}?api_key=${this.apiKey}&query=${title}`)
        .pipe(map(data => {console.log(data);
        console.log(data);
          return data['results'];
        }));
    }

    public getMovieDetails(id: string, type: string) {
        return this.http.get(`${this.URL}3/${type}/${id}?api_key=${this.apiKey}`);
    }
}
