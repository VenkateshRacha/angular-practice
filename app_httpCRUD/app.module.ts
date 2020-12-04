import { StudentDeleteComponent } from './StudentDelete.component';
import { StudentUpdateComponent } from './StudentUpdate.component';
import { StudentInsertComponent } from './StudentInsert.component';
import { StudentListComponent } from './StudentList.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [AppComponent,
    StudentListComponent,
    StudentInsertComponent,
    StudentUpdateComponent,
    StudentDeleteComponent
],
    imports: [BrowserModule, HttpClientModule, FormsModule ],
    exports: [],
    providers: [],
    bootstrap : [AppComponent]
})
export class AppModule {}