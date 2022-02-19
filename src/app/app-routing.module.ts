import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarteComponent } from './component/carte/carte.component';
import { ProductComponent } from './component/product/product.component';

const routes: Routes = [
  {path:'', redirectTo:'product',pathMatch:'full'},
  {path:'product', component:ProductComponent},
  {path:'carte', component:CarteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
