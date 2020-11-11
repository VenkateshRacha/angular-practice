import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    
})
export class AppComponent {
    //Events, button method
    msg()
    {
        console.log("Hello !!")
    }
    m1()
    {
        alert("Hello !!")
    }
    // for 
    //strings

    names : string[] = ["a","b","c","d","e"];
    namesMethod()
    {
        this.names = ["1","2","3","4",]
    }
   
    //Objects

    employee =[
        {"id":101, "Name": "A"},
        {"id":102, "Name": "B"},
        {"id":103, "Name": "C"},
        {"id":104, "Name": "D"}
    ]

    next()
    {
        this.employee = [
            {"id":1, "Name": "W"},
            {"id":2, "Name": "X"},
            {"id":3, "Name": "Y"},
            {"id":4, "Name": "Z"}
        ]
    }

    //If
    //Variables
    display: boolean = true;
    show()
    {
        this.display = true;
    }
    hide()
    {
        this.display = false;
    }
    next2()
    {
        this.employee= [];
    }
}


