import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'Cfilter'})
export class CfilterPipe implements PipeTransform {
    transform(values: any[], param1, param2): any {
        if(values && param1)
        { 
            let neparam;
            let newValues = values.filter(data => {
            if(data["id"] >= param1)
                return true;
            else
                return false;
        })
        if(values && param1&&param2)
        {
             neparam = newValues.filter(dt =>{
                if(dt["name"] == param2)
                    return true;
                else
                    return false;
            }
                )
        }
        if(values && param1&&param2)
         return neparam ;
        else
            return newValues;

        }
        if(values && param2)
        {
            let nvalues = values.filter(
                dt => {
                    if(dt["name"] == param2)
                        return true;
                    else 
                        return false;
                }
            )
            return nvalues;
        }
    }
}