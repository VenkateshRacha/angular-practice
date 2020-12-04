import { Student } from './student';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'StudentDelete',
    templateUrl: './StudentDelete.component.html',
    
})
export class StudentDeleteComponent {

    s = new Student;
    constructor( private hc:HttpClient)
    {
        
    }
    delete()
    {
        this.hc.delete("https://basicstudentapp.herokuapp.com/students/deleteStudent/"+this.s.id).subscribe(
            (data: any[])=> {
                alert("Student Deletion is Successfull !! "+this.s.name)
            }
        )
    }
    
}
