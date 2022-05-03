import { environment } from '../../../../environments/environment';

export class GlobalConstants {

    public static APP_SERVER_URL = environment.SERVER_URL;

    public static API_BASE_URL = GlobalConstants.APP_SERVER_URL + '/api/';

    public static USER_SIGNUP = GlobalConstants.API_BASE_URL + 'user/signup';

    public static USER_LOGIN = GlobalConstants.API_BASE_URL + 'user/login';

    public static USER_SEND_OTP = GlobalConstants.API_BASE_URL + 'auth/sendOTP';

    public static USER_VERIFY_OTP = GlobalConstants.API_BASE_URL + 'auth/verifyOTP';

    public static USER_RESET_PASSWORD = GlobalConstants.API_BASE_URL + 'user/resetPassword';

}