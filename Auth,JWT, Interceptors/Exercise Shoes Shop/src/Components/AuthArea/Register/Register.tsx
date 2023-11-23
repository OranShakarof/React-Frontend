import { useActionData, useNavigate } from "react-router-dom";
import "./Register.css";
import { useForm } from "react-hook-form";
import UsersModel from "../../../Model/UserModel";
import authService from "../../../Services/AuthService";

function Register(): JSX.Element {

    const {register,handleSubmit} = useForm<UsersModel>();
    const navigate = useNavigate();

    async function send(user: UsersModel) {
        try{
            await authService.register(user);
            alert("You have been successfully registered");
            navigate("/home");
        }
        catch(err : any){
            alert(err.message);
        }
        
    }




    return (
        <div className="Register">
			<h2>Register:</h2>

            <form onSubmit={handleSubmit(send)}>
                <label>First Name:</label>
                <input type="text" {...register("firstName")}/>
            
                
                <label>Last Name:</label>
                <input type="text" {...register("lastName")} />

                <label>Username:</label>
                <input type="text" {...register("username")}/>

                
                <label>Password:</label>
                <input type="password" {...register("password")}/>

                <button>Register</button>

            </form>
        </div>
    );
}

export default Register;
