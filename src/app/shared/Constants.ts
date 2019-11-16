import {environment} from '../../environments/environment';

export class AppConstants {
  public static API_ENDPOINT = environment.APIEndpoint;
  public static AUTHENTICATE = AppConstants.API_ENDPOINT + 'netsm/auth';
}
