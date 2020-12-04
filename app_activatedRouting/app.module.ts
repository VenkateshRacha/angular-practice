import { StudentModule } from './Student/student.module';
import { HomeComponent } from './home.component';
import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { cantactComponent } from './cantact.component';
import { RouterModule, Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

let rules=[
    {
        path : "r1",
        component : HomeComponent 
    },
    {
        path : "r2",
        component : cantactComponent 
    },
    {
        path : "",
        component : HomeComponent 
    },
    
]

@NgModule({
    declarations: [AppComponent, HomeComponent, cantactComponent],
    imports: [BrowserModule,StudentModule, RouterModule, RouterModule.forRoot(rules) ],
    exports: [],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}