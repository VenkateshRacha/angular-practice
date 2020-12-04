import { Student } from './student';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'StudentUpdate',
    templateUrl: './StudentUpdate.component.html',
    
})
export class StudentUpdateComponent {

    s = new Student;
    constructor( private hc:HttpClient)
    {
        
    }
    update()
    {
        this.hc.put("https://basicstudentapp.herokuapp.com/students/updateStudent",this.s).subscribe(
            (data: any[])=> {
                alert("Student Updation is Successfull !! "+this.s.name)
            }
        )
    }
    
}
