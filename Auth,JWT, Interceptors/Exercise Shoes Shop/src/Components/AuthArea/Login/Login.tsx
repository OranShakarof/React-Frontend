import { useForm } from "react-hook-form";
import "./Login.css";
import CredentialsModel from "../../../Model/CredentialsModel";
import { useNavigate } from "react-router-dom";
import authService from "../../../Services/AuthService";

function Login(): JSX.Element {

    const {register, handleSubmit} = useForm<CredentialsModel>();
    const navigate = useNavigate();

    async function send(credentials: CredentialsModel) {
        try{
            await authService.login(credentials);
            alert("You have been successfully logged-in");
            navigate("/home");
        }
        catch(err: any){
            alert(err.message);
        }
    }


    return (
        <div className="Login">
            <h2>Login:</h2>

            <form onSubmit={handleSubmit(send)}>
                <label>Username: </label>
                <input type="text" {...register("username")}/>

                <label>Password:</label>
                <input type="password" {...register("password")}/>

                <button>Login</button>
            </form>
			
        </div>
    );
}

export default Login;
