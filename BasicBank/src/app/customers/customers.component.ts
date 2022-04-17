import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';
import { TransferService } from './../Services/transfer.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../Shared/Users';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  form = this.fb.group({
    "senderEmail":['',Validators.required],
    "receiverEmail":['',Validators.required],
    "money":['',Validators.required]
  });
  constructor(private user:TransferService,private fb:FormBuilder,private toast:ToastrService) { }
  customers!:User[];
  ngOnInit(): void {
    this.getCustomers();
  }
 getCustomers(){
this.user.getAllUsers().subscribe(data=>{
  this.customers = data;
});
 }
 transfer(){
  if(this.form.status =="VALID"){
 this.user.postTransfer(this.form.value).subscribe(data=>{
 });
}
 else
 this.toast.info("Enter Required Fields")
 }
}
