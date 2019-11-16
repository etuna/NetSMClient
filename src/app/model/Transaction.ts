import {Stock} from './Stock';
import {User} from './User';

export class Transaction {
  user: User;
  stock: Stock;
  quantity: number;
}
