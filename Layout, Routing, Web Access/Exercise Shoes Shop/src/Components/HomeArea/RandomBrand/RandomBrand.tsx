import { useState } from "react";
import "./RandomBrand.css";
import { log } from "console";

function RandomBrand(): JSX.Element {
    
    const brands = ["Adidas","Air Jordan","Nike","Dior","Gucci"];
    const [randomBrand,setRandomBrand] = useState<string>("");
    
    function displayRandomBrand(): void {
        const num = Math.floor(Math.random() * 5);
        const brand = brands[num]
        setRandomBrand(brand);
    }
    
    return (
        <div className="RandomBrand">
            <button onClick={displayRandomBrand}>מותג רדומנלי</button>
            <br/>
            <span>{randomBrand}</span>
        </div>
    );
}

export default RandomBrand;
