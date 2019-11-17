import {Stock} from './Stock';
import {User} from './User';

export class Transaction {
  id: string;
  userId: string;
  stock: string;
  price: number;
  quantity: number;
  operation: string;
}
