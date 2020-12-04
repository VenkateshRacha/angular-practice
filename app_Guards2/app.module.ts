import { moduleLoadGuard } from './moduleLoadGuard';
import { ContentProtectGuard } from './Student/ContentProtectGuard';
import { StudentModule } from './Student/student.module';
import { HomeComponent } from './home.component';
import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { cantactComponent } from './cantact.component';
import { RouterModule, Router, CanActivate } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {SecurityGuard} from './security.guard';

let rules=[
    {
        path : "r1",
        component : HomeComponent 
    },
    {
        path : "r2",
        component : cantactComponent ,
        canActivate : [SecurityGuard]
    },
    {
        path : "student",
        loadChildren : "./student/student.module#StudentModule",
        canLoad : [moduleLoadGuard] 
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
    providers: [SecurityGuard,moduleLoadGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}