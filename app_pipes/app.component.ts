import { Employee } from './employee';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    
})
export class AppComponent  {
    EId : Number;
    EName:String = "Venkatesh";
    Email: String;
    percentage : Number = 72.55/100;
    fee : number = 60000;
    pi: Number =22/7;
    today = new Date();

    students = [
        { "id":1,"name":"s1" },
        { "id":2,"name":"s2" },
        { "id":3,"name":"s3" },
        { "id":4,"name":"s4" },
        { "id":5,"name":"s5" },
        { "id":6,"name":"s6" }        
    ];

}
