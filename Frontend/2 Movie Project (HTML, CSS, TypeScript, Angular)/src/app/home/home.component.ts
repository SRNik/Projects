import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trendingMovies: any;
  theatreMovies: any;
  popularMovies: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getTrendingMovies();
    this.getTheatreMovies();
    this.getPopularMovies()
  }

  getTrendingMovies() {
    this.http.get('http://localhost:4200/assets/data/trending-movies.json')
      .subscribe((movies) => {
        this.trendingMovies = movies;
        console.log(this.trendingMovies)
      })
  }

  getTheatreMovies() {
    this.http.get('http://localhost:4200/assets/data/theatre-movies.json')
      .subscribe((movies) => {
        this.theatreMovies = movies;
        console.log('These are the movies in theatre: ', this.theatreMovies)
      })
  }

  getPopularMovies() {
    this.http.get('http://localhost:4200/assets/data/popular-movies.json')
      .subscribe((movies) => {
        this.popularMovies = movies;
        console.log('Here are the popular movies:\n', this.popularMovies)
      })
  }

  goToMovie(type: string, id: number) {
    this.router.navigate(['/movie', type, id]);  //navigates to localhost:4200/movie
  }

}
