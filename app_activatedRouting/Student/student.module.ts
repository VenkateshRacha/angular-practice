import { studentDeleteComponent } from './studentDelete';
import { studentUpdateComponent } from './studentUpdate';
import { RouterModule } from '@angular/router';
import { studentListComponent } from './studentList.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { studentInsertComponent } from './studentInsert';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

let rules =[
    {
        path: "studentList",
        component : studentListComponent
    },
    {
        path: "studntInsertion",
        component:studentInsertComponent
    },
    {
        path: "studentUpdate",
        component: studentUpdateComponent
    },
    {
        path: "studentDelete",
        component: studentDeleteComponent
    },
    {
        path: "studentUpdate/:id",
        component: studentUpdateComponent
    }
]
@NgModule({
    declarations: [studentListComponent,studentInsertComponent, studentUpdateComponent, studentDeleteComponent],
    imports: [ CommonModule, FormsModule,HttpClientModule, RouterModule.forChild(rules) ],
    exports: [],
    providers: [],
})
export class StudentModule {}