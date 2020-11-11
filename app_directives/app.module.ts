import { BasicDirective } from './basic.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
@NgModule({
    imports:[BrowserModule],
    declarations:[AppComponent,BasicDirective],
    bootstrap:[AppComponent]
})
export class AppModule{

}