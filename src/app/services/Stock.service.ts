import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';  // Firebase modules for Database, Data list and Single object


@Injectable()
export class StockService {
  constructor(private http: HttpClient,
              private router: Router) {
  }

  /**
   * Admin
   */

  public addStock(stock) {

  }

  public delStock(stockId) {

  }

  public getStocks() {

  }

  /**
   * User
   *
   */
  public getStock(id) {

  }

  public getStocksByUserId(id) {

  }

  public buyStock(userId, stockId, price, quantity) {

  }

  public sellStock(userId, stockId, price, quantity) {

  }


}
