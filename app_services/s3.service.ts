import { s5Service } from './s5.service';
import { s4Service } from './s4.service';
import { Injectable } from '@angular/core';

@Injectable()
export class s3Service {
    constructor(private s5:s5Service, private s4:s4Service,  )
    {
        console.log("I am i Service3")
    }
}