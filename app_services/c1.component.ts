import { Service1 } from './s1.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'c1',
    templateUrl: './c1.component.html',
})
export class c1Component {
    constructor(private s1:Service1) {
        console.log("I am in constructor 1");
     }

    }
