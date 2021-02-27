import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/product.interface';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title = "product-list";
  products: IProduct[];
  allProducts:IProduct[];
  showImages: boolean =false;
  searchText : string;
  constructor() { 
   this.products
   =[
    {
      productName: 'Hero Honda CD 100',
      description: 'Most popular Bike of India',
      releaseDate: '10-08-1990',
      price: 100,
      isActive: true,
      imageUrl: 'https://via.placeholder.com/150?text=CD100SS',
    },
    {
      productName: 'Honda Hornet',
      description: 'A sports Bike',
      releaseDate: '10-08-2010',
      price: 200,
      isActive: true,
      imageUrl: 'https://via.placeholder.com/150?text=Hornet',
    },
    {
      productName: 'Super splendor',
      description: 'A Bike that the nation trusts',
      releaseDate: '10-08-1980',
      price: 75,
      isActive: true,
      imageUrl: 'https://via.placeholder.com/150?text=Splendor',
    },
    {
      productName: 'Yamaha RX 100',
      description: 'Nostalgic !',
      releaseDate: '10-08-1987',
      price: 122,
      isActive: false,
      imageUrl: 'https://via.placeholder.com/150?text=RX100',
    }];
    this.allProducts = [...this.products];
}
refreshData() {
  console.log('Refreshing !!');
  this.products =[
    {
      productName: 'Hero Honda CD 100',
      description: 'Most popular Bike of India',
      releaseDate: '10-08-1990',
      price: 100,
      isActive: true,
      imageUrl: 'https://via.placeholder.com/150?text=CD100SS',
    },
    {
      productName: 'Honda Hornet',
      description: 'A sports Bike',
      releaseDate: '10-08-2010',
      price: 200,
      isActive: true,
      imageUrl: 'https://via.placeholder.com/150?text=Hornet',
    },
    {
      productName: 'Super splendor',
      description: 'A Bike that the nation trusts',
      releaseDate: '10-08-1980',
      price: 75,
      isActive: true,
      imageUrl: 'https://via.placeholder.com/150?text=Splendor',
    },
    {
      productName: 'Yamaha RX 100',
      description: 'Nostalgic !',
      releaseDate: '10-08-1987',
      price: 122,
      isActive: false,
      imageUrl: 'https://via.placeholder.com/150?text=RX100',
    }];
  // products: IProduct[] = null;

}
trackByName(index: number, product: IProduct) {
  return product.productName;
}
  ngOnInit(): void {
  }
  getProductStyles(products:IProduct){
    if(products.price==200){
      return {
        color: 'red',
        fontWeight: 'bolder',
      };
    } else {
      return {};
    }
  }
  toggleImage(){
    this.showImages = !this.showImages;
  }
  buyProduct(product: IProduct) {
    console.log('Buying initiated for ' + product.productName);
    console.log('Value of Search Text', this.searchText);
  }
  filterData(){
console.log('filtering data', this.searchText);
this.products=this.allProducts.filter((item)=>item.productName.toLowerCase().includes(this.searchText.toLowerCase()));
  }
}
