import { Routes } from '@angular/router';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { TeasingPageComponent } from './teasing-page/teasing-page.component';

export const routes: Routes = [
  {path: `welcome`, component: TeasingPageComponent},
  {path: ``, redirectTo: `welcome`, pathMatch: `full`},
  {path: `**`, component: PageNotFoundComponentComponent}
];
