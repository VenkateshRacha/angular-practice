import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{Student} from './Student'

@Component({
    selector: 'studentInsert',
    templateUrl: './studentInsert.html',
})
export class studentInsertComponent{
    s = new Student();
    constructor(private hc:HttpClient, private router:Router){

    }
    save(){
        this.hc.post("https://basicstudentapp.herokuapp.com/students/insertStudent",this.s).subscribe(
            (data) => {
                alert("Insertion successfull.");
                this.router.navigate(['./studentList'])
            }
        );
    }

}