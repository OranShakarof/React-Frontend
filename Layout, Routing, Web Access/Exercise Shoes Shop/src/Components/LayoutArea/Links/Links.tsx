import { NavLink } from "react-router-dom";
import "./Links.css";

function Links(): JSX.Element {
    return (
        <div className="Links">
			<h2>תפריט</h2>
            <NavLink to={"/home"}>דף בית</NavLink>
            <br/> <br/>
            <NavLink to={"/products"}>מוצרים</NavLink>
            <br/><br/>
            <NavLink to={"/success-stories"}>סיפורי הצלחה שלנו</NavLink>
            <br/><br/>
            <NavLink to={"/users"}>המשתמשים שלנו</NavLink>
            <br/><br/>
            <NavLink to={"/about"}>מי אנחנו</NavLink>
            <br/><br/>
        </div>
    );
}

export default Links;
