import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
    selector: 'StudentList',
    templateUrl: './StudentList.component.html',
})
export class StudentListComponent {
    students =[];
    constructor(private hc: HttpClient  )
    {
        this.hc.get("https://basicstudentapp.herokuapp.com/students/getAllStudents").subscribe(
            (data: any[]) => {
                this.students = data;
            }
        )
    }

}
