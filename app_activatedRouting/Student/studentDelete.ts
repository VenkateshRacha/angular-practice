import { Component, OnInit } from '@angular/core';
import { Student } from './Student';
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
        this.hc.delete("https://basicstudentapp.herokuapp.com/students/deleteStudent/"+this.s.id).subscribe(
            (data: any[])=> {
                alert("Student Deletion is Successfull !! ")
            }
        )
    }
}