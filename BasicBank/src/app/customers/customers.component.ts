import { TransferService } from './../Services/transfer.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../Shared/Users';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private user:TransferService) { }
  customers!:User[];
  ngOnInit(): void {
    this.getCustomers();
  }
 getCustomers(){
this.user.getAllUsers().subscribe(data=>{
  this.customers = data;
});
 }
}
