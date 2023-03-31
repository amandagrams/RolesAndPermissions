import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
// import { AuthService } from '../AuthService';
import { SessionStorageService } from 'angular-web-storage';
import { PermissionService } from 'src/app/Services/permission.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  constructor(private _router: Router,
              private sessionStorageService: SessionStorageService,
              private routes: ActivatedRoute,
              private permissionService: PermissionService) {
  }
  //feature em cinza
  async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    this.sessionStorageService.set("previousUrl", state.url);
    if (this.sessionStorageService.get('UserRoleId') === null) {
      this._router.navigate(['EPN']);
      return true;
    }

      if(this.permissionService.checkPermission(next.data.AccountDetails,next.data.feature, next.data.permission)){
        return true;
      }

    else {
      this._router.navigate(['EPN/unauthorized']);
    }
  }
}

