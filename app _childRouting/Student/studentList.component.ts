import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'studentList',
    templateUrl: './studentList.component.html',
})
export class studentListComponent {
    students = [];
    constructor(private hc:HttpClient ){
        this.hc.get("https://basicstudentapp.herokuapp.com/students/getAllStudents").subscribe(
            (data:any[])=> {
                this.students = data;
            }
        )
    }

}