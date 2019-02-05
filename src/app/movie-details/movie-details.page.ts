import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  private movieDetails: any;
  private genres: any = [];
  private languages: any = [];

  constructor(private ar: ActivatedRoute,
              private movieService: MovieService) { }

  ngOnInit() {
    const movieID = this.ar.snapshot.paramMap.get('id');

    this.movieService.getMovieDetails(movieID).subscribe(data => {
      this.movieDetails = data;

      this.movieDetails.genres.forEach((genre) => {
        this.genres.push(genre.name);
      });

      this.movieDetails.spoken_languages.forEach((language) => {
        this.languages.push(language.name);
      });
    });

  }

}
