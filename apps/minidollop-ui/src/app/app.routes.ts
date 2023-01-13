import { Route } from "@angular/router";
import { MenuComponent } from "./components/menu/menu.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found-component.component";
import { AboutComponent } from "./pages/about/about.component";
import { HomepageComponent } from "./pages/homepage/homepage.component";
import { PortfolioComponent } from "./pages/portfolio/portfolio.component";

export const appRoutes: Route[] = [
  {
    component: HomepageComponent,
    path: "",
  },
  {
    component: PortfolioComponent,
    path: "portfolio",
  },
  {
    component: AboutComponent,
    path: "about",
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  }, // Wildcard route for a 404 page
];
