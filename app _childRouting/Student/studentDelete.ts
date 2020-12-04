import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'studentDelete',
    templateUrl: './studentDelete.html',
   
})
export class studentDeleteComponent {
    s = new Student ;
    constructor( private hc:HttpClient)
    {
        
    }
    delete()
    {
        this.hc.delete("https://basicstudentapp.herokuapp.com/students/deleteStudent/"+this.s.Id).subscribe(
            (data: any[])=> {
                alert("Student Deletion is Successfull !! "+this.s.Name)
            }
        )
    }
}