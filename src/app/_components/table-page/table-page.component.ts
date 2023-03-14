import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.css']
})
export class TablePageComponent implements OnInit {

  products: Product[] = [];
  log: string = "";

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.getAllProducts();
  }
  
  getAllProducts(){
    this.productService.getAllProducts().subscribe((products: Product[])=>{
      this.products = products;
    });
  }

  findById(id: number): number{
    let i = -1
    this.products.forEach((product: Product, index: number)=>{
      if(product.id == id){
        i = index
      }
    })
    return i;
  }

  deleteProduct(id: number){
    let index = this.findById(id);
    this.productService.deleteProductById(id).subscribe((res)=>{
      if(index != -1){
        this.products.splice(index,1);
        }
      this.log = res.message
    });
  }



}
