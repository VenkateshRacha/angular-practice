import  { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
   Id : number =100
   Name : string ="Surya"
   isEmployee : Boolean = true;
   Qualification : string[] = ["M.tech", "B.Tech"]

   //Attribute Binding
   imageURL: string = "/assets/surya.png";
   url: string ="https://en.wikipedia.org/wiki/Suriya"

   //Property Binding
   comment : string = "Surya is nice person"

}
