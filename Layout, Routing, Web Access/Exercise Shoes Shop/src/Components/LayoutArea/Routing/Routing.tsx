import { Navigate, Route, Routes } from "react-router-dom";
import "./Routing.css";
import Home from "../../HomeArea/Home/Home";
import Products from "../../ProductsArea/Products/Products";
import SuccessStories from "../../SuccessStoriesArea/SuccessStories/SuccessStories";
import About from "../../AboutArea/About/About";
import Page404 from "../Page404/Page404";
import Users from "../../UsersArea/Users/Users";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                {/* Home Route */}
                <Route path="/home" element={<Home/>}/>

                {/* Products Route */}
                <Route path="/products" element={<Products/>} />

                {/* Success Stories Route */}
                <Route path="/success-stories" element={<SuccessStories/>} />

                {/* About Route */}
                <Route path="/about" element={<About/>} />

                {/* Users Route */}
                <Route path="/users" element={<Users/>} />

                {/* Default Route: */}
                {/* <Route path="/" element={<Home/>}/> */}
                <Route path="/" element={<Navigate to="/home"/>}/>

                {/* Page 404 Route: */}
                <Route path="/*" element={<Page404/>}/>
            </Routes>
        </div>
    );
}

export default Routing;
