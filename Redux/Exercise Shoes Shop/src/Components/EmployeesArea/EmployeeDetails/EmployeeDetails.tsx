import { useEffect, useState } from "react";
import "./EmployeeDetails.css";
import EmployeeModel from "../../../Model/EmployeeModel";
import employeesService from "../../../Services/EmployeesService";
import { useNavigate, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Details(): JSX.Element {
  const params = useParams();
  const id = +params.empId;

  const navigate = useNavigate();

  const [frontendEmployee, setFrontendEmployee] = useState<EmployeeModel>();

  useEffect(() => {
    employeesService
      .getOneEmployee(id)
      .then((backendEmployee) => setFrontendEmployee(backendEmployee))
      .catch((err) => alert(err.message));
  }, []);

  async function deleteMe(): Promise<void> {
    try{
        const ok = window.confirm("Are You Sure?");
        if(!ok) return;
        await employeesService.deleteEmployee(id);
        alert("Employee Has Been Deleted Successfully!");
        navigate("/employees");
    }
    catch(err: any){
        alert(err.message);
    }
  }
  
  return (
        <div className="Details">
            <h2>Employee Details</h2>

            <h3>Name: {frontendEmployee?.firstName + " " + frontendEmployee?.lastName}</h3>
            <h3>Title: {frontendEmployee?.title}</h3>
            <h3>Country: {frontendEmployee?.country}</h3>
            <h3>City: {frontendEmployee?.city}</h3>
            <h3>Birth Date: {frontendEmployee?.birthDate}</h3>

            <img src={"http://localhost:3030/api/employees/images/"+frontendEmployee?.imageName}/>
            <br/>
            <NavLink to={"/employees"}>Back</NavLink>

            <span> | </span>

            <NavLink to="#" onClick={deleteMe}>Delete</NavLink>

        </div>);
}

export default Details;
