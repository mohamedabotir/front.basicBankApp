import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Shared/Users';
@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor(private client:HttpClient) { }
   api = "https://localhost:44327/Account/";
  getAllUsers():Observable<User[]>{
    return this.client.get<User[]>(this.api+"getAllUsers");
  }
}
