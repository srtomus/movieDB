import { Component, OnInit } from '@angular/core';
import { OmdbServiceService } from '../servicios/omdb-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {

  constructor(
    private _omdbService: OmdbServiceService,
    private _activatedRoute: ActivatedRoute
    ) { }

  public details;

  ngOnInit() {
    let id = this._activatedRoute.snapshot.paramMap.get('id');

    this._omdbService.getDetails(id).subscribe(
      response => {
        this.details = response;
      }
    )
  }

  openWebsite() {
    window.open(this.details.Website, '_blank');
  }

}
