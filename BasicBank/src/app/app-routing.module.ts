import { TransactionProcessComponent } from './transaction-process/transaction-process.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"transaction",component:TransactionProcessComponent},
  {path:"customers",component:CustomersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
