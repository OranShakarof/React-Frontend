import RandomBrand from "../RandomBrand/RandomBrand";
import YouTube from "../YouTube/YouTube";
import "./Home.css";

function Home(): JSX.Element {
    const date = new Date().getDate();
    const brands = [
        {id: 1, brand: "Adidas"},
        {id: 2, brand: "Nike"},
        {id: 3, brand: "Air Jordan"},
        {id: 4, brand: "Dior"},
        {id: 5, brand: "Puma"},
    ];

    function displayRandomBrand(): void{
        const num = Math.floor(Math.random() * 5);
        console.log(num);
        
        alert(brands[num].brand)
    }
    return (
        <div className="Home">
			{date === 1 && <h2> מבצע מיוחד לתחילת החודש 30% הנחה על כלל הנעליים בחנות </h2>}
            <YouTube/>
            <br/>
            <ul>
                {brands.map(b => <li key={b.id}>{b.brand}</li>)}
            </ul>
            <br/>
            <RandomBrand/>
        </div>
    );
}

export default Home;
