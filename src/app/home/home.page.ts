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

    constructor(private http: HttpClient,
                private movieService: MovieService) {
    }

    public getMovies() {
        this.movieList = this.movieService.getMovies();
    }
}
