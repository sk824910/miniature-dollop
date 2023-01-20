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
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  log() {
    console.log("here is some log");
  }
}
