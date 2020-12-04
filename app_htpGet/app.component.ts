import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    users =[];
    constructor(private hc:HttpClient) { 
        // this is to verify
        // this.hc.get("url").subscribe(Suc => {
        //     console.log("This is Success");
        // },Err =>{
        //     console.log("This is Error");
        //     alert("Got Error");
        // }
        //     )

        // to get data from url

        
        this.hc.get("https://jsonplaceholder.typicode.com/users").subscribe(
            (suc :any[])=>{
                this.users = suc;
            } 
        , Err => {
            console.log("This is error from service");
            alert("Error from Service");
        }
        )
    }

    
}
