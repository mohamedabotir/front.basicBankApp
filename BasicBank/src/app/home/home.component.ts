import { ToastrService } from 'ngx-toastr';
import { Transfer } from './../Shared/transfer';
import { TransferService } from './../Services/transfer.service';
import { AfterContentInit, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { User } from '../Shared/Users';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  form = this.fb.group({
    "senderEmail":['',Validators.required],
    "receiverEmail":['',Validators.required],
    "money":['',Validators.required]
  });
  loading?:Boolean;

 transfer!:Transfer;
  constructor(private trans:TransferService,private fb:FormBuilder,private toast:ToastrService) {

  }
  public users?:User[];
  getUsers(){
        this.users = [];
         this.trans.getAllUsers().subscribe(data=>{
          this.users = data;
       });
     }

  ngOnInit(): void {
   this.getUsers();
  }
  print(){
    console.log(this.form.value);
  }

  postTransfer(){
    if(this.form.status =="VALID")
    this.trans.postTransfer(this.form.value).subscribe(data=>{
      console.log(data);
    });
    else
    this.toast.warning("Enter Required Fields");
  }



}
