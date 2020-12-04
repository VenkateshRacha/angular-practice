import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()

export class S1Service {
    //Component to Compnent
    data = null;

    getData(){
        return this.data;
    }

    setData(newValue){
        this.data = newValue;
    }

    //auto
    dataTransfer = new Subject()
    registerDataTansfer(){
        return this.dataTransfer.asObservable();
    }

    sendData(newValue2){
        this.dataTransfer.next(newValue2);
    }
}