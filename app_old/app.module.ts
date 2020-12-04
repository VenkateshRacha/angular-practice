import { HomeComponent } from './Home.component';
import { StudentDeleteComponent } from './StudentDelete.component';
import { StudentUpdateComponent } from './StudentUpdate.component';
import { StudentInsertComponent } from './StudentInsert.component';
import { StudentListComponent } from './StudentList.component';
import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router'

let rules =[
    {
        path: "r1",
        Component: HomeComponent
    },
    {
        path : "r2",
        Component: StudentListComponent
    }
]

@NgModule({
    declarations: [AppComponent,
    StudentListComponent,
    StudentInsertComponent,
    StudentUpdateComponent,
    StudentDeleteComponent
],
    imports: [BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(rules),RouterModule ],
    exports: [],
    providers: [],
    bootstrap : [AppComponent]
})
export class AppModule {}