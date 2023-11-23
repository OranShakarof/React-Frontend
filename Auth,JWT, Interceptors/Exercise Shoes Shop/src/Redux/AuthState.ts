import jwtDecode from "jwt-decode";
import UsersModel from "../Model/UserModel";
import { createStore } from "redux";

// 1. Global State

export class AuthState {
    public token: string = null; // JWT
    public user: UsersModel = null; // The User

    public constructor(){
        this.token = localStorage.getItem("token");
        if(this.token){
            this.user = jwtDecode<{user: UsersModel}>(this.token).user;
        }
    }

}

// 2. Action type

export enum AuthActionType {
    Register = "Register",
    Login = "Login",
    Logout = "Logout"
}

// 3. Action:
export interface AuthAction {
    type: AuthActionType;
    payload?: string;  
}

// 4 Reducer (invoked by redux library):
export function authReducer(currentState = new AuthState(), action: AuthAction): AuthState{
    const newState = {...currentState};

    switch(action.type){
        case AuthActionType.Register:
        case AuthActionType.Login:
            newState.token = action.payload;
            newState.user = jwtDecode<{user: UsersModel}>(newState.token).user;
            localStorage.setItem("token",newState.token);
            break;
        case AuthActionType.Logout:
            newState.token = null;
            newState.user = null;
            localStorage.removeItem("token");
            break;
    }

    return newState;
}

// 5 Store:
export const authStore = createStore(authReducer);