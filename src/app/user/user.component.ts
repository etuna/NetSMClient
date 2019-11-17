import {Component, OnInit} from '@angular/core';
import {Stock} from '../model/Stock';
import {StockService} from '../services/Stock.service';
import {Transaction} from '../model/Transaction';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public username;
  public id;
  public transactions: Transaction[] = [];

  constructor(private stockService: StockService) {
  }

  ngOnInit() {
    this.username = localStorage.getItem('currentUserName');
    this.id = localStorage.getItem('currentUserId');
    this.getTransactions();
  }

  getTransactions() {
    return this.stockService.getTransactions(this.id).toPromise().then(data => {
      this.transactions = data;
    });
  }
}
