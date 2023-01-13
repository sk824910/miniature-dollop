import { Component } from "@angular/core";
import { ThemePalette } from "@angular/material/core";
import { appRoutes } from "../../app.routes";
import { Link } from "../../shared/interfaces";

@Component({
  selector: "app-navbar",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"],
})
export class NavComponent {
  appRoutes = appRoutes;
  links: Link[] = [
    { name: "Home", path: "" },
    { name: "Portfolio", path: "portfolio" },
    { name: "About", path: "about" },
    { name: "random", path: "random" },
  ];

  background: ThemePalette = undefined;

  toggleBackground() {
    console.log(this.background);
    this.background = this.background ? undefined : "primary";
    console.log(this.background);
  }
}
