import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewProductPageComponent } from './_components/new-product-page/new-product-page.component';
import { TablePageComponent } from './_components/table-page/table-page.component';
import { UpdateProductPageComponent } from './_components/update-product-page/update-product-page.component';

const routes: Routes = [
  {path: '', component: TablePageComponent},
  {path: 'add', component: NewProductPageComponent},
  {path: 'update', component: UpdateProductPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
