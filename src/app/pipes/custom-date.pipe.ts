import { DatePipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'customDatePipe'
})
export class customDatePipe extends DatePipe implements PipeTransform{
    transform(value: string): any{
        if (value) {
            return super.transform(value, 'MMMM-dd-yyyy');
          }
    }
}