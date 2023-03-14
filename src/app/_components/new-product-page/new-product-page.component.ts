import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/_models/product';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-new-product-page',
  templateUrl: './new-product-page.component.html',
  styleUrls: ['./new-product-page.component.css']
})
export class NewProductPageComponent {

  selectedValue: boolean = true;
  log:string = "";

  constructor(private productService: ProductService){}

  newProductForm = new FormGroup({
    name: new FormControl<string>('',[Validators.required]),
    size: new FormControl<number>(0),
    price: new FormControl<number>(0,[Validators.required]),
    is_available: new FormControl<boolean>(true),
  })

  addNewProduct(){
    let product: Product = this.newProductForm.value! as Product
    this.productService.addNewProduct(product).subscribe((res:any)=>{
      this.log = res.message;
    })
  }

}
