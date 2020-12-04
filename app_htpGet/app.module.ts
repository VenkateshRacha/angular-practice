import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    declarations: [AppComponent],
    imports: [ BrowserModule,HttpClientModule],
    bootstrap:[AppComponent]
})
export class AppModule {}