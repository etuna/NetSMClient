import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {Constants} from '../shared/Constants';
import {Stock} from '../model/Stock';
import {BuyRequest} from '../model/BuyRequest';
import {SellRequest} from '../model/SellRequest';  // Firebase modules for Database, Data list and Single object


@Injectable()
export class StockService {
  constructor(private http: HttpClient,
              private router: Router) {
  }

  /**
   * Admin
   */

  public addStock(stock: Stock) {
    const url = Constants.ADD_STOCK;
    const data = new FormData();
    data.append('code', stock.code);
    data.append('name', stock.name);
    return this.http.post<any>(url, data).toPromise().then(data => {
      return window.alert(data.description);
    });
  }

  public delStock(stockId) {
    const url = Constants.DEL_STOCK;
    return this.http.get<any>(url).toPromise().then(data => {
      return window.alert(data.description);
    });
  }

  public getStocks() {
    const url = Constants.ALL_STOCK;
    return this.http.get<any>(url).toPromise().then(data => {
      return data;
    });
  }

  /**
   * User
   *
   */
  public getStock(id) {
    const url = Constants.GET_STOCK + '/' + id;
    return this.http.get<any>(url).toPromise().then(data => {
      return data;
    });
  }

  public getStocksByUserId(id) {
    const url = Constants.ALL_STOCKS_USER + '/' + id;
    return this.http.get<any>(url).toPromise().then(data => {
      return data;
    });
  }

  public buyStock(buyRequest: BuyRequest) {
    const url = Constants.BUY_STOCK;
    const data = new FormData();
    data.append('userId', buyRequest.userId);
    data.append('stockCode', buyRequest.stockCode);
    data.append('price', buyRequest.price.toString());
    data.append('quantity', buyRequest.quantity.toString());
    return this.http.post<any>(url, data).toPromise().then(data => {
      return window.alert(data.description);
    });
  }

  public sellStock(sellRequest: SellRequest) {
    const url = Constants.SELL_STOCK;
    const data = new FormData();
    data.append('userId', sellRequest.userId);
    data.append('stockCode', sellRequest.stockCode);
    data.append('price', sellRequest.price.toString());
    data.append('quantity', sellRequest.quantity.toString());
    return this.http.post<any>(url, data).toPromise().then(data => {
      return window.alert(data.description);
    });
  }


}
