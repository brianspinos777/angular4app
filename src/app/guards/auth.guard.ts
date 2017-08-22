import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router'; // Added

@Injectable()
export class AuthGuard implements CanActivate {

   // Added
  constructor(private router: Router){
    //...
  }	

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

  	// Added
  	this.router.navigate(['/users'])
  	console.log('You are not authenticated!')
    return false;
  }
}
