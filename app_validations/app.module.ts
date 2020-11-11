import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from "@angular/forms"
@NgModule({
    declarations: [AppComponent],
    imports: [ BrowserModule,FormsModule ],
    bootstrap:[AppComponent],
    exports: [],
    providers: [],
})
export class AppModule {}