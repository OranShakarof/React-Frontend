import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeModel from "../../../Model/EmployeeModel";
import employeesService from "../../../Services/EmployeesService";
import "./UpdateEmployee.css";
import { useEffect } from "react";


function UpdateEmployee(): JSX.Element {

    const { register, handleSubmit, setValue } = useForm<EmployeeModel>();
    const navigate = useNavigate();
    const params = useParams();
    const id = +params.empId;

    useEffect(() => {
        employeesService.getOneEmployee(id)
        .then(employee => {
            setValue("firstName", employee.firstName);
            setValue("lastName", employee.lastName);
            setValue("title", employee.title);
            setValue("country", employee.country);
            setValue("city", employee.city);
            setValue("birthDate", employee.birthDate);
        })
        .catch(err => alert(err.message));
    },[])



    async function send(employee: EmployeeModel) {
        try{
            employee.id = id;
            employee.image = (employee.image as unknown as FileList)[0];
            await employeesService.updateEmployee(employee);
            alert("Employee Has Been updated Successfully!");
            navigate("/employees");
        }
        catch(err: any){
            alert(err.message);
        }
    }
    
    
    return (
        <div className="UpdateEmployee">

            <h2>Edit Employee</h2>

            <form onSubmit={handleSubmit(send)}>
                <label>First Name:</label>
                <input type="text" {...register("firstName")} required minLength={2} maxLength={30}/>

                <label>Last Name:</label>
                <input type="text" {...register("lastName")} required minLength={2} maxLength={30} />

                <label>Title:</label>
                <input type="text" {...register("title")} required minLength={5} maxLength={25} />

                <label>Country:</label>
                <input type="text" {...register("country")} required minLength={3} maxLength={30} />

                <label>City:</label>
                <input type="text" {...register("city")} required minLength={3} maxLength={30} />

                <label>Birth Date:</label>
                <input type="date" {...register("birthDate")} />

                <label>Image:</label>
                <input type="file" accept="image/*" {...register("image")} />

                <button>Update</button>

            </form>
			
        </div>
    );
}

export default UpdateEmployee;
