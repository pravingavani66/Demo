import { Pipe,PipeTransform } from "@angular/core";
import { IProduct } from "../models/product.interface";

@Pipe({
    name: 'searchProductPipe',
    pure: false,
})
export class SearchProductPipe implements PipeTransform{
    private counter :number=0;
    transform(products: IProduct[],searchText:string){
        if(searchText){
         return products.filter((item)=>item.productName.toLowerCase().includes(searchText.toLowerCase()));
        }else{
            return products;
        }
       
    }
}