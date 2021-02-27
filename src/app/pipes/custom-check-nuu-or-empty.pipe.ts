import { Pipe, PipeTransform } from "@angular/core";
import { ifNullOrEmptyPipe } from "./if-null-or-empty.pipe";

@Pipe({
    name:'customCheckNullOrEmptyPipe'
})
export class CustomCheckNullOrEmptyPipe extends ifNullOrEmptyPipe implements PipeTransform{
    transform(value:string,defaultString:string):any{
      
           super.transform(value, defaultString= 'N/A')
                if (!value) {
                    return defaultString;
                  } else {
                    return value;
                  }
          
    }
}