import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatTabsModule } from "@angular/material/tabs";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./app.routes";
import { MenuComponent } from "./components/menu/menu.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found-component.component";
import { NavComponent } from "./components/nav/nav.component";
import { PortfolioComponent } from "./pages/portfolio/portfolio.component";
import { AboutComponent } from "./pages/about/about.component";
import { AppLayoutModule } from "./primelayout/app.layout.module";
import { SignupComponent } from "./pages/signup/signup.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PageNotFoundComponent,
    NavComponent,
    PortfolioComponent,
    AboutComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: "enabledBlocking" }),
    MatTabsModule,
    AppLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
