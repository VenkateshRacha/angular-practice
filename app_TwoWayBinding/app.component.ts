import { Employee } from './employee';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    
})
export class AppComponent  {
    EId : Number = 1236;
    EName:String = "ABC";

    register()  
    {
        alert(this.EId);
    }

    E = new Employee();
    registerObjects()
    {
        alert(this.E.EName+ "  " +this.E.Email);
    }

}
