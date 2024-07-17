import { Routes } from '@angular/router';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { TeasingPageComponent } from './teasing-page/teasing-page.component';

export const routes: Routes = [
  {path: ``, component: TeasingPageComponent},
  {path: `**`, component: PageNotFoundComponentComponent}
];
