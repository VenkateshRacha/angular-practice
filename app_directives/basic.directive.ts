import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[basic]',
})
export class BasicDirective { 
   @Input("basic")
   colorValue : string;

   constructor(private er:ElementRef) {
       console.log("I am in directive")
   }

    @HostListener("click")
    m1()
    {
        this.er.nativeElement.style.backgroundColor =this.colorValue;
    }
}