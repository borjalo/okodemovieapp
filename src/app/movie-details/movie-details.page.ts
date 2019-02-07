import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  private movieDetails = null;
  private genres: any = [];
  private languages: any = [];
  private imageURL = 'https://image.tmdb.org/t/p/w500';
  private type: string;

  constructor(private ar: ActivatedRoute,
              private movieService: MovieService) { }

  ngOnInit() {
    const movieID = this.ar.snapshot.paramMap.get('id');
    this.type = this.ar.snapshot.paramMap.get('type');

    this.movieService.getMovieDetails(movieID, this.type).subscribe(data => {
      this.movieDetails = data;

      if (this.type === 'movie') {
        this.movieDetails.genres.forEach((genre) => {
          this.genres.push(genre.name);
        });

        this.movieDetails.spoken_languages.forEach((language) => {
          this.languages.push(language.name);
        });
      }
    });

  }

  openWeb() {
    window.open(this.movieDetails.homepage, ' _blank');
  }

}
