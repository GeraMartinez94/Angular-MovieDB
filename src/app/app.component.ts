import { Component } from "@angular/core";
import { MoviedbService } from "./services/moviedb.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Angular-MovieDB-API";
  showMe: boolean=false;
  constructor(public _ms: MoviedbService) {
    this._ms.getDiscoverMovies().subscribe(data => console.log(data));
    this.showMe=!this.showMe
  }

  toggleTag(){

    this.showMe =!this.showMe;
  }
}
