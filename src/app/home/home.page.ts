import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MovieService, SearchType} from '../../services/movie.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    private movieList: Observable<any>;
    private search = '';
    private type: SearchType = SearchType.movie;
    private imageURL = 'https://image.tmdb.org/t/p/w500';

    constructor(private http: HttpClient,
                private movieService: MovieService) {
    }

    public getMovies() {
        this.movieList = this.movieService.getMovies(this.search, this.type);
    }
}
