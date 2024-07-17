import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-page-not-found-component',
  standalone: true,
  imports: [],
  templateUrl: './404.component.html',
  styles: ``
})
export class PageNotFoundComponentComponent {
    constructor(private route: ActivatedRoute, private router: Router) { }


    goToWelcomePage() {
    this.router.navigate([``])
  }

}
