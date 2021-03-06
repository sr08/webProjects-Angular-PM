import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class ProductGaurdService implements CanActivate  {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const id = +route.url[1].path;
    if ( isNaN(id) || id < 1) {
        alert('Invalid Route');
        this.router.navigate(['/products']);
        return false;
    }
    return true;
  }


}
