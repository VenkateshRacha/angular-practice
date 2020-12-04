import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'studentList',
    templateUrl: './studentList.component.html',
})
export class studentListComponent {
    students = [];
    constructor(private hc:HttpClient, private router:Router ){
        this.hc.get("https://basicstudentapp.herokuapp.com/students/getAllStudents").subscribe(
            (data:any[])=> {
                this.students = data;
            }
        )
    }
    goToUpdate(studentId){
        this.router.navigate(['/studentUpdate',studentId]);
    }

    delete(studentId){
        this.hc.delete("https://basicstudentapp.herokuapp.com/students/deleteStudent/"+studentId).subscribe((data:any[])=>{
            alert("Delete success");
            let index = this.students.findIndex((data)=>{
                if(data["id"]==studentId)
                    return true;
            })
            this.students.splice(index,1);
        })
    }
}