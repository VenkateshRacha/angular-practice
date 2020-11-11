import { s2Service } from './s2.service';
import { Service1 } from './s1.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'c2',
    templateUrl: './c2.component.html',
})
export class c2Component {
    constructor(private s2:s2Service, s1:Service1) {
        console.log("I am in constructor 2");
     }

    }
