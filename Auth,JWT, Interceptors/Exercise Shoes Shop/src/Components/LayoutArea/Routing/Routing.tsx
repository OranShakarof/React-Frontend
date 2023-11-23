import { Navigate, Route, Routes } from "react-router-dom";
import "./Routing.css";
import Home from "../../HomeArea/Home/Home";
import Products from "../../ProductsArea/Products/Products";
import SuccessStories from "../../SuccessStoriesArea/SuccessStories/SuccessStories";
import About from "../../AboutArea/About/About";
import Page404 from "../Page404/Page404";
import Users from "../../UsersArea/Users/Users";
import EmployeeList from "../../EmployeesArea/EmployeeList/EmployeeList";
import Details from "../../EmployeesArea/EmployeeDetails/EmployeeDetails";
import AddEmployee from "../../EmployeesArea/AddEmployee/AddEmployee";
import UpdateEmployee from "../../EmployeesArea/UpdateEmployee/UpdateEmployee";
import Login from "../../AuthArea/Login/Login";
import Register from "../../AuthArea/Register/Register";

function Routing(): JSX.Element {
  return (
    <div className="Routing">
      <Routes>
        {/* Register: */}
        <Route path="/register" element={<Register />} />

        {/* Login: */}
        <Route path="/login" element={<Login />} />
        
        {/* Home Route */}
        <Route path="/home" element={<Home />} />

        {/* Products Route */}
        <Route path="/products" element={<Products />} />

        {/* Success Stories Route */}
        <Route path="/success-stories" element={<SuccessStories />} />

        {/* Employees Route */}
        <Route path="/employees" element={<EmployeeList />} />

        {/* Employees Details */}
        <Route path="/employees/details/:empId" element={<Details />} />

        {/* New Employee */}
        <Route path="/employees/new" element={<AddEmployee />} />

        {/* Update Employee */}
        <Route path="/employees/update/:empId" element={<UpdateEmployee />} />

        {/* Users Route */}
        <Route path="/users" element={<Users />} />

        {/* About Route */}
        <Route path="/about" element={<About />} />

        {/* Default Route: */}
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* Page 404 Route: */}
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default Routing;
