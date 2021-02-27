import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'ifNullOrEmptyPipe',
})
export class ifNullOrEmptyPipe implements PipeTransform{
    transform(value: string, defaultString: string = 'N/A'){
        if (!value) {
            return defaultString;
          } else {
            return value;
          }
    }
}