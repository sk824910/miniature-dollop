import { Component, OnInit } from "@angular/core";
import { PrimeNGConfig } from "primeng/api";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {}

  title = "minidollop-ui";
  ngOnInit() {
    this.primengConfig.ripple = true;
    inputStyle: "outlined"; //default style for input elements
    menuMode: "static"; //layout mode of the menu, valid values are "static" and "overlay"
    colorScheme: "light"; //color scheme of the template, valid values are "light" and "dark"
    theme: "lara-light-indigo"; //default component theme for PrimeNG
    scale: 14;
  }

  log() {
    console.log("here is some log");
  }
}
