import { useEffect, useState } from "react";
import "./EmployeeList.css";
import employeesService from "../../../Services/EmployeesService";
import EmployeeModel from "../../../Model/EmployeeModel";
import { NavLink } from "react-router-dom";

function EmployeeList(): JSX.Element {
    

    const [frontendEmployees, setFrontendEmployees] = useState<EmployeeModel[]>([]);  
    
    useEffect(() => {
        employeesService.getAllEmployees()
        .then(backendEmployees => setFrontendEmployees(backendEmployees))
        .catch(err => alert(err.message));

    });
    
    return (
        <div className="EmployeeList">
            <table>
                <thead>
                    <tr>
                        <th>Update:</th>
                        <th>First Name:</th>
                        <th>Last Name:</th>
                        <th>Title:</th>
                        <th>Country:</th>
                        <th>City:</th>
                        <th>Birth Date:</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {frontendEmployees.map(e => 
                    <tr key={e.id}>
                        <td>
                            <NavLink to={"/employees/update/" + e.id}> ✏️ </NavLink>   
                        </td>
                        <td>{e.firstName}</td>
                        <td>{e.lastName}</td>
                        <td>{e.title}</td>
                        <td>{e.country}</td>
                        <td>{e.city}</td>
                        <td>{e.birthDate}</td>
                        <td> 
                            <NavLink to={"/employees/details/" + e.id}>
                                <img src={"http://localhost:3030/api/employees/images/"+e.imageName}/>
                            </NavLink>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
            <br/>
            <NavLink to={"/employees/new"}>🆕</NavLink>
        </div>
    );
}

export default EmployeeList;
