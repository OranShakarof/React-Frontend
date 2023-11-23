import { stringify } from "querystring";
import "./Footer.css";

function Footer(): JSX.Element {
    const date = new Date().getFullYear(); 
    
    function displayFullName(): void {
        alert("אורן שקרוף")
    }

    return (
        <div className="Footer">
			<p onClick={displayFullName}>כל הזכויות שמורות - אורן אתרים | {date}</p>
        </div>
    );
}

export default Footer;
