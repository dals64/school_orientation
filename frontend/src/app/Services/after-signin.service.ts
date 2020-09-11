import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { TokenService } from './token.service';


@Injectable({
    providedIn: 'root',
})
export class AfterSignin implements CanActivate {

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | 
    import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean |
     import("@angular/router").UrlTree> {
        console.log('test')
        return this.Token.loggedIn();
    }

    constructor(private Token : TokenService){

    }

}