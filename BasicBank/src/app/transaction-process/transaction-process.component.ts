import { TransferService } from './../Services/transfer.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../Shared/Users';
import { Transfer } from '../Shared/transfer';

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
  public transactions?:Transfer[];
  getUsers(){
       this.transactions = [];
        this.trans.GetTransactions().subscribe(data=>{
         this.transactions = data;
         console.log(this.transactions);
      });
    }
}
