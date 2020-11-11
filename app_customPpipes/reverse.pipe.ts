import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'reverse'})
export class ReversePipe implements PipeTransform {
    transform(value: string) {
        let str = '';
        for(let i = value.length; i>=0; i--)
        {
            str= str+value.charAt(i);
        }
        return str;
    }
}