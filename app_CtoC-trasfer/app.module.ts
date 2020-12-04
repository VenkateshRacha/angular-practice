import { S1Service } from './s1.service';
import { C2Component } from './C2.component';
import { C1Component } from './C1.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [AppComponent, C1Component, C2Component],
    imports: [ CommonModule,BrowserModule ],
    exports: [],
    providers: [S1Service],
    bootstrap: [AppComponent]
})
export class AppModule {

}