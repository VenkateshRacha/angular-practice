import { Student } from './Student';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'studentUpdate',
    templateUrl: './studentUpdate.html',
    
})
export class studentUpdateComponent {
    s = new Student();

    constructor(private hc:HttpClient,private router:Router, private ar:ActivatedRoute){
            let id = this.ar.snapshot.params["id"];
            this.hc.get("https://basicstudentapp.herokuapp.com/students/getStudentById/"+id).subscribe((data:any[])=>{
            alert("Updation")   
            this.s = data[0];
            })
    }

    update(){
        this.hc.put("https://basicstudentapp.herokuapp.com/students/updateStudent",this.s).subscribe((data)=>{
            alert("Upd success");
            this.router.navigate(['/studentList']);
        });
    }
    
}
