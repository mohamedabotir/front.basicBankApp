import { TransferService } from './../Services/transfer.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../Shared/Users';

@Component({
  selector: 'app-transaction-process',
  templateUrl: './transaction-process.component.html',
  styleUrls: ['./transaction-process.component.css']
})
export class TransactionProcessComponent implements OnInit {

  constructor(private trans:TransferService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  public users?:User[];
  getUsers(){
       this.users = [];
        this.trans.getAllUsers().subscribe(data=>{
         this.users = data;
      });
    }
}
