import { Component, OnInit } from "@angular/core";
import { Breakpoints, BreakpointObserver } from "@angular/cdk/layout";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit {
  hideSideMenu = false;

  constructor(private responsive: BreakpointObserver) {}

  ngOnInit(): void {
    // this.responsive
    //   .observe(Breakpoints.HandsetLandscape)
    //   .subscribe((result) => {
    //     if (result.matches) {
    //       console.log("screens matches HandsetLandscape");
    //     }
    //   });

    this.responsive
      .observe([Breakpoints.HandsetLandscape, Breakpoints.TabletLandscape])
      .subscribe((result) => {
        this.hideSideMenu = false;

        if (result.matches) {
          this.hideSideMenu = true;
        }
      });
  }
}
