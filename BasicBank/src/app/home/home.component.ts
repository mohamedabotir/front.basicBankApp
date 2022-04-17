import { TransferService } from './../Services/transfer.service';
import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { User } from '../Shared/Users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users!:any;
  constructor(private trans:TransferService) {
  }


  ngOnInit(): void {
    this.getUsers();
    console.log(this.users);
  }
  print(id:any){
    console.log(id);
  }
  getUsers(){
    setInterval(()=>{
      this.trans.getAllUsers().subscribe(data=>{
      this.users = data;
    });
    console.log(this.users);
    },200)

  }

}
