import { useForm } from "react-hook-form";
import "./AddEmployee.css";
import EmployeeModel from "../../../Model/EmployeeModel";
import employeesService from "../../../Services/EmployeesService";
import { useNavigate } from "react-router-dom";

function AddEmployee(): JSX.Element {
    
    const { register, handleSubmit } = useForm<EmployeeModel>();

    const navigate = useNavigate();

    async function send(employee: EmployeeModel) {
        try{
            employee.image = (employee.image as unknown as FileList)[0];
            await employeesService.addEmployee(employee);
            alert("Employee Has Been Added Successfully!");
            navigate("/employees");
        }
        catch(err: any){
            alert(err.message);
        }
    }


    return (
        <div className="AddEmployee">
            <h2>Add Employee</h2>

            <form onSubmit={handleSubmit(send)}>
                <label>First Name:</label>
                <input type="text" {...register("firstName")} required minLength={2} maxLength={30}/>

                <label>Last Name:</label>
                <input type="text" {...register("lastName")} required minLength={2} maxLength={30} />

                <label>Title:</label>
                <input type="text" {...register("title")} required minLength={5} maxLength={20} />
                
                <label>Country:</label>
                <input type="text" {...register("country")} required minLength={3} maxLength={30} />
                
                <label>City:</label>
                <input type="text" {...register("city")} required minLength={3} maxLength={30} />

                <label>Birth Date:</label>
                <input type="date" {...register("birthDate")} />

                <label>Image:</label>
                <input type="file" accept="image/*" {...register("image")} />

                <button>Add</button>

            </form>
        </div>
    );
}

export default AddEmployee;
