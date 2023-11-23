import axios from "axios";
import UsersModel from "../Model/UserModel";
import appConfig from "../Utils/Appconfig";
import { AuthAction, AuthActionType, authStore } from "../Redux/AuthState";
import CredentialsModel from "../Model/CredentialsModel";

class AuthService {

    public async register(user: UsersModel): Promise<void> {
        const response = await axios.post<string>(appConfig.registerUrl, user);

        const token = response.data;

        // Send token to global state:
        const action: AuthAction = {
            type:AuthActionType.Register,
            payload: token,
        };
        authStore.dispatch(action);
    }

    public async login(credentials: CredentialsModel): Promise<void>{
        const response = await axios.post<string>(appConfig.loginUrl, credentials);

        const token = response.data;

        const action: AuthAction = {type: AuthActionType.Login, payload: token};
        authStore.dispatch(action);
    }

    public logout(): void{
        const action: AuthAction = { type: AuthActionType.Logout};
        authStore.dispatch(action);
    }

}

const authService = new AuthService();

export default authService;