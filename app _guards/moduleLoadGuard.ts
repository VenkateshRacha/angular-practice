import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';


@Injectable()
export class moduleLoadGuard implements CanLoad {
    canLoad(){
        return true;
    }
}
