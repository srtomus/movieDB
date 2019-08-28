import { Component, OnInit } from '@angular/core';
import { OmdbServiceService } from '../servicios/omdb-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.page.html',
  styleUrls: ['./movies-list.page.scss'],
})
export class MoviesListPage implements OnInit {

  constructor(private _omdbService: OmdbServiceService) { }

  ngOnInit() {
  }

  public items;
  public title;

  onSubmit(searchForm: NgForm) {
    this.title = searchForm.value.title;
    this._omdbService.searchMovies(this.title).subscribe(
      response => {
        console.log(this.items);
      },
      error => {
        console.log(error);
      }
    )
  }
}
