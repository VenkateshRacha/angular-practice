import { s5Service } from './s5.service';
import { s4Service } from './s4.service';
import { s3Service } from './s3.service';
import { s2Service } from './s2.service';
import { c2Component } from './c2.component';
import { c1Component } from './c1.component';
import { BrowserModule } from '@angular/platform-browser';
import { Service1 } from './s1.service';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [AppComponent,c1Component,c2Component],
    imports: [ BrowserModule],
    exports: [],
    providers: [Service1,s2Service,s3Service,s4Service,s5Service],
    bootstrap:[AppComponent]
})
export class AppModule {}