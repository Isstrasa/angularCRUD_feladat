import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from 'src/app/_models/product';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-update-product-page',
  templateUrl: './update-product-page.component.html',
  styleUrls: ['./update-product-page.component.css']
})
export class UpdateProductPageComponent implements OnInit{

  products: Product[] = [];
  productForm = new FormGroup({
    productId: new FormControl<number>(1),
    name: new FormControl<string>(''),
    price: new FormControl<number>(0),
    size: new FormControl<number>(0),
    is_available: new FormControl<boolean>(true)
  })
  log:string = ""

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.getProducts();
    this.productId.valueChanges.subscribe(id=>{
      this.getProductById(id!);
    });
  }

  getProductById(id: number){
    this.productService.getProductById(id!).subscribe((product: Product)=>{
      this.productForm.controls['name'].setValue(product.name);
      this.productForm.controls['price'].setValue(product.price);
      this.productForm.controls['size'].setValue(product.size!);
      this.productForm.controls['is_available'].setValue(product.is_available!);
    });
  }

  getProducts(){
    this.productService.getAllProducts().subscribe((products: Product[])=>{
        this.products = products;
    })
  }

  updateProduct(){
    let id = this.productId.value!;
    let product: Product = this.productForm.value as Product;
    this.productService.updateProduct(id,product).subscribe(res=>{
      this.log = res.message;
      this.getProducts();
    })
  }

  get productId(){
    return this.productForm.controls['productId'];
  }

}
