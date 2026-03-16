import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  type: string = '';
  id: number | undefined;
  url = '';
  fetchedMovies: any;
  fetchedMovie: any;
  //Creating the form
  ratingForm = new FormGroup({
    movieName: new FormControl(null),
    rating: new FormControl(null, [Validators.min(0), Validators.max(5), Validators.required]),
    review: new FormControl(null)
  })

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.type = this.route.snapshot.params['type'];
    this.id = +this.route.snapshot.params['id'];  //Changing the data type from string to number. Because when fetching from URL we receive a string
    if (this.type === 'trending') {
      this.url = 'http://localhost:4200/assets/data/trending-movies.json';
    } else if (this.type === 'theatre') {
      this.url = 'http://localhost:4200/assets/data/theatre-movies.json'
    } else {
      this.url = 'http://localhost:4200/assets/data/popular-movies.json'
    }
    this.getMovie();


  }

  getMovie() {
    this.http.get(this.url).subscribe((movieResult) => {
      this.fetchedMovies = movieResult;
      let ind = this.fetchedMovies.findIndex(
        (movie: { id: number; }) => movie.id === this.id
      );
      if (ind > -1) {
        this.fetchedMovie = this.fetchedMovies[ind]
      };

    })
  }

  onSubmit() {

  }



}
