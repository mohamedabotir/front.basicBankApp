import { TransferService } from './../Services/transfer.service';
import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { User } from '../Shared/Users';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users!:Array<User>;
  constructor(private trans:TransferService,private fb:FormBuilder) {
  }
form = this.fb.group({
  "sender":['',Validators.required],
  "reciever":['',Validators.required],
  "money":['',Validators.required]
});

  ngOnInit(): void {
    this.getUsers();
    console.log(this.users);
  }
  print(){
    console.log(this.form.value);
  }
  getUsers(){

      this.trans.getAllUsers().subscribe(data=>{
      this.users = data;
    console.log(this.users);
    });
  }

}
