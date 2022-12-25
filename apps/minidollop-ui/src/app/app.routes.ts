import { Route } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found-component.component';

export const appRoutes: Route[] = [
  {
    component: MenuComponent,
    path: '',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }, // Wildcard route for a 404 page
];
