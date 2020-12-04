import { Student } from './student';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'StudentInsert',
    templateUrl: './StudentInsert.component.html',
    
})
export class StudentInsertComponent {

    s = new Student;
    constructor( private hc:HttpClient)
    {
        
    }
    insert()
    {
        this.hc.post("https://basicstudentapp.herokuapp.com/students/insertStudent",this.s).subscribe(
            (data: any[])=> {
                alert("Student inserion is Successfull !! "+this.s.name)
            }
        )
    }
    
}
