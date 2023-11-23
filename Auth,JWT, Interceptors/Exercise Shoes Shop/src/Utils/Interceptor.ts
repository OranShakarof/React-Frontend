import axios from "axios";
import { request } from "http";
import { authStore } from "../Redux/AuthState";

class Interceptors {

    public create(): void {
        axios.interceptors.request.use(requestObject => {
            if(authStore.getState().token){
                requestObject.headers.Authorization = "Bearer " + authStore.getState().token;
            }

            return requestObject;
        });
    }

}

const interceptor = new Interceptors();

export default interceptor;