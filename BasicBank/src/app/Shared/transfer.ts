import { User } from './Users';
export interface Transfer{
  sender:User,
  reciever:User,
  amount:Number
}
