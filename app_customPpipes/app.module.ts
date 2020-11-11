import { CfilterPipe } from './Cfilter.pipe';
import { ReversePipe } from './reverse.pipe';
import { BasicPipe } from './basic.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { FormsModule } from "@angular/forms";
@NgModule({
    declarations: [ AppComponent, BasicPipe,ReversePipe, CfilterPipe],//BasicPipe,ReversePipe,ContentFilterPipe ],
    imports: [ BrowserModule,FormsModule],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}