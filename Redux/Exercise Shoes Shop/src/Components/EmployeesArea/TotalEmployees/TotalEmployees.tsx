import { useEffect, useState } from "react";
import "./TotalEmployees.css";
import { EmployeesStore } from "../../../Redux/EmployeesState";

function TotalEmployees(): JSX.Element {

    const [count, setCount] = useState<number>();

    useEffect(() => {
        setCount(EmployeesStore.getState().employees.length);
        
        const unsubscribe = EmployeesStore.subscribe(() => {
            setCount(EmployeesStore.getState().employees.length);
        });

        return () => unsubscribe();
    },[]);

    if(count === 0) return null;

    return (
        <div className="TotalEmployees">
			<span>Total Employees: {count} </span>
        </div>
    );
}

export default TotalEmployees;
