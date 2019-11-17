import {environment} from '../../environments/environment';

export class Constants {
  public static FAIL = 'FAIL';
  public static SUCCESS = 'SUCCESS';

  public static API_ENDPOINT = environment.APIEndpoint;
  public static AUTHENTICATE = Constants.API_ENDPOINT + '/user/authenticate';
  public static ALL_USERS = Constants.API_ENDPOINT + '/user/all';
  public static DEL_USER = Constants.API_ENDPOINT + '/user/delete';
  public static ADD_USER = Constants.API_ENDPOINT + '/user/add';

  public static ADD_STOCK = Constants.API_ENDPOINT + '/stock/add';
  public static DEL_STOCK = Constants.API_ENDPOINT + '/stock/delete';
  public static ALL_STOCK = Constants.API_ENDPOINT + '/stock/all';
  public static ALL_STOCKS_USER = Constants.API_ENDPOINT + '/stock/all';
  public static GET_STOCK = Constants.API_ENDPOINT + '/stock';
  public static BUY_STOCK = Constants.API_ENDPOINT + '/stock/buy';
  public static SELL_STOCK = Constants.API_ENDPOINT + '/stock/sell';
}
