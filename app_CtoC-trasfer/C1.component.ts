import { S1Service } from './s1.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'c1',
    templateUrl: './C1.component.html'
})
export class C1Component {
    i:number =100;

    constructor(private ss:S1Service){

    }

    // m1()
    // {
    //     this.i =this.i+2;
    //     //c to c trnsfr
    //     this.ss.setData(this.i);
    // }

    m3(newValue)
    {
        this.i = newValue;
    }

    m1(){
        this.i = this.i + 2;
        this.ss.sendData(this.i);
    }
}