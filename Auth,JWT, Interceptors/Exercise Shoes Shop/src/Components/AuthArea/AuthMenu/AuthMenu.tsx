import { NavLink } from "react-router-dom";
import "./AuthMenu.css";
import UsersModel from "../../../Model/UserModel";
import { useEffect, useState } from "react";
import { authStore } from "../../../Redux/AuthState";
import authService from "../../../Services/AuthService";

function AuthMenu(): JSX.Element {

    const [user,setUser] = useState<UsersModel>();

    useEffect(() => {
        setUser(authStore.getState().user);
        const unsubscribe = authStore.subscribe(() => setUser(authStore.getState().user));

        return unsubscribe;
    },[]);

    function logoutMe():void{
        authService.logout();
        alert("Bye Bye....")
    }

    return (
        <div className="AuthMenu">
            {!user && 
                <div>
                    <span>שלום אורח! | </span>
                    <NavLink to="/login">להתחבר</NavLink>
                    <span> | </span>
                    <NavLink to="/register">להרשמה</NavLink>
                 </div>
            }

            {user &&
                <div>
                    <span>שלום {user.firstName} {user.lastName} </span>
                    <br/>
                    <NavLink to="/home" onClick={logoutMe}>Logout</NavLink>
                </div> 
            }

        </div>
    );
}

export default AuthMenu;
