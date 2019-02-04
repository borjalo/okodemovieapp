import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieService } from '../../services/movie.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    private movieList: Observable<any>;
    private URL = 'https://api.themoviedb.org/';
    private apiKey = '44313eca34da29f04c1e9db7fa1e6326';

    constructor(private http: HttpClient,
                private movieService: MovieService) {

        /*this.movieList = this.getMovies();
        this.movieList.subscribe(data => {
            console.log(data);
        });*/
    }

    public getMovies() {
        /*return this.http.get(`${this.URL}3/movie/550?api_key=${this.apiKey}`)
            .pipe(map(data => {}));*/
        this.movieList = this.movieService.getMovies();
        /*this.movieList.subscribe(data => {
           this.movieList = data;
        });*/
    }
}
