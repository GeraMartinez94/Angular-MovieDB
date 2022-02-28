import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/search/search.component";
import { PeliculaComponent } from "./components/pelicula/pelicula.component";
import { CarrousellComponent } from "./components/carrousell/carrousell.component";

export const ROUTES: Routes = [
  { path: "home", component: HomeComponent },
  {path: "carrousell", component: CarrousellComponent},
  { path: "search", component: SearchComponent },
  { path: "pelicula/:id", component: PeliculaComponent },
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];
