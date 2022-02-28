import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviedbService } from "../../services/moviedb.service";

@Component({
  selector: 'app-carrousell',
  templateUrl: './carrousell.component.html',
  styleUrls: ['./carrousell.component.css']
})
export class CarrousellComponent  {


  @Input() items: any[3] = [];
  constructor(private router: Router) {
   }
   verPelicula(item: any) {

    let peliculaId;

    peliculaId = item.id;
    /* let artistaId;

    if (item.type === "album") {
      artistaId = item.id;
    } else {
      artistaId = item.albums[0].id;
    } */

    this.router.navigate(["/pelicula", peliculaId]);
  }


}
