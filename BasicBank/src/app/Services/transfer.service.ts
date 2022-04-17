import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Shared/Users';
import { Transfer } from '../Shared/transfer';
@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor(private client:HttpClient) { }
   api = "https://localhost:44327/Account/";
  getAllUsers(){
    return this.client.get<User[]>(this.api+"getAllUsers");
  }

  postTransfer(transfer:Transfer):Observable<string>{
   return this.client.post<string>(this.api+"Transfer",transfer);
  }
}
