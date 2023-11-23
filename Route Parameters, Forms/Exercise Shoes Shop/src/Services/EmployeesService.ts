import axios from "axios";
import EmployeeModel from "../Model/EmployeeModel";
import { EmployeesAction, EmployeesActionType, EmployeesStore } from "../Redux/EmployeesState";
import appConfig from "../Utils/Appconfig";

class EmployeesService {
    // Get all employees from the backend
    public async getAllEmployees(): Promise<EmployeeModel[]> {

        let employees = EmployeesStore.getState().employees;

        if(employees.length === 0){

            // Get all the employees to response
            const response = await axios.get<EmployeeModel[]>(appConfig.employeesUrl);
            
            // Extract the employees from the response:
            employees = response.data;

            // Update the global state:
            const action: EmployeesAction = {type: EmployeesActionType.SetEmployees, payload: employees};
            EmployeesStore.dispatch(action);
        }
        
        // Return Employees
        return employees;
    }

    public async getOneEmployee(id: number): Promise<EmployeeModel> {

        let employees = EmployeesStore.getState().employees 

        let employee = employees.find(e => e.id === id);

        if(!employee){

            // Get all the employees to response
            const response = await axios.get<EmployeeModel>(appConfig.employeesUrl + id);
            
            // Extract the employees from the response:
             employee = response.data;
        }

        // Return Employees
        return employee;
    }

    public async addEmployee(employee: EmployeeModel): Promise<void>{
        const options = {
            headers : {"Content-Type" : "multipart/form-data"} // Include files in the request.    
        };

        const response = await axios.post<EmployeeModel>(appConfig.employeesUrl, employee,options);

        const addedEmployee = response.data;
        
        const action: EmployeesAction = {type: EmployeesActionType.AddEmployee, payload: addedEmployee};
        EmployeesStore.dispatch(action);
    }

    public async updateEmployee(employee: EmployeeModel): Promise<void> {

        const options = {
            headers : {"Content-Type" : "multipart/form-data"} // Include files in the request.    
        };

        const response = await axios.put<EmployeeModel>(appConfig.employeesUrl + employee.id, employee,options);

        const updatedEmployee = response.data;

        const action: EmployeesAction = {type: EmployeesActionType.UpdateEmployee, payload: updatedEmployee};
        EmployeesStore.dispatch(action);

    }

    public async deleteEmployee(id: number): Promise<void>{
        await axios.delete(appConfig.employeesUrl + id);

        const action: EmployeesAction = {type: EmployeesActionType.DeleteEmployee, payload: id};
        EmployeesStore.dispatch(action);
    }
}

const employeesService = new EmployeesService();

export default employeesService;