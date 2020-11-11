import { s3Service } from './s3.service';
import { Injectable } from '@angular/core';

@Injectable()
export class s2Service {
    constructor(private s3:s3Service)
    {
        console.log("I am in srvice 2")
    }
}