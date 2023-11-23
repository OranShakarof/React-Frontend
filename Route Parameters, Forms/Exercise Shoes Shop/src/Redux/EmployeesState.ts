import { create } from "domain";
import EmployeeModel from "../Model/EmployeeModel";
import { createStore } from "redux";


export class EmployeesState {
    public employees: EmployeeModel[] = []; 
}

export enum EmployeesActionType{
    SetEmployees = "SetEmployees",
    AddEmployee = "AddEmployee",
    UpdateEmployee = "UpdateEmployee",
    DeleteEmployee = "DeleteEmployee"
}

export interface EmployeesAction {
    type: EmployeesActionType;
    payload?: any;
}

export function EmployeeReducer(currentState = new EmployeesState(), action: EmployeesAction): EmployeesState{
    
    const newState = {...currentState};
    
    switch(action.type){
        case EmployeesActionType.SetEmployees:
            newState.employees = action.payload;
            break;

        case EmployeesActionType.AddEmployee:
            newState.employees.push(action.payload);
            break;

        case EmployeesActionType.UpdateEmployee:
            const indexToUpdate = newState.employees.findIndex(p => p.id === action.payload.id);
            if(indexToUpdate >= 0) newState.employees[indexToUpdate] = action.payload;
            break;

        case EmployeesActionType.DeleteEmployee:
            const indexToDelete = newState.employees.findIndex(p => p.id === action.payload);
            if(indexToDelete >= 0) newState.employees.splice(indexToDelete,1);
            break;
    } 
    
    return newState;
}

export const EmployeesStore = createStore(EmployeeReducer);