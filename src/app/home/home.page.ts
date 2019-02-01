import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MovieService } from '../movie.service';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

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
                private router: Router,
                private movieService: MovieService) {
        /*this.movieList = this.movieService.getMovies();*/
        this.movieList = this.getMovies();
        this.movieList.subscribe(data => {
            console.log(data);
        });
    }

    public getMovies(): Observable<any> {
        return this.http.get(`${this.URL}3/movie/550?api_key=${this.apiKey}`)
            .pipe(map(data => {}));
    }

    private seeDetails(id) {
      this.router.navigate(['/detail']);
    }
}
