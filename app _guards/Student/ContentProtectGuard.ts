import { studentInsertComponent } from './studentInsert';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';


@Injectable()
export class ContentProtectGuard implements CanDeactivate<studentInsertComponent> {
    canDeactivate() {
            let result = confirm("Do you want to leave the page? ");
            return result;
    }
}