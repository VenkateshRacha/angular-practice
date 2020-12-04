import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class SecurityGuard implements CanActivate {
    canActivate(){
        return false;
    }
}
