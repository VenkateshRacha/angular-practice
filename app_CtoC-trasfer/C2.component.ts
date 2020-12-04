import { S1Service } from './s1.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'c2',
    templateUrl: './C2.component.html'
})
export class C2Component {

    k:number;
    // @Input()
    // j:number;
    
    // @Output()
    // sendData= new EventEmitter();

    constructor(private s1:S1Service){
        this.s1.registerDataTansfer().subscribe((data:number)=>{
            this.k = data;
        })
    }

    // m2()
    // {
    //     this.j = this.j+2;
    //     this.sendData.emit(this.j);
    // }

    // c2c()
    // {
    //     this.j = this.ss.getData();
    // }


}