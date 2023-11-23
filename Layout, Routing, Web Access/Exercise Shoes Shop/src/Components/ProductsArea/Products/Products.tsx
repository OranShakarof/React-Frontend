import "./Products.css";
import imageSource1 from "../../../Assets/Images/shoes1.jpeg";
import imageSource2 from "../../../Assets/Images/shoes2.jpeg";
import imageSource3 from "../../../Assets/Images/shoes3.jpeg";
import imageSource4 from "../../../Assets/Images/shoes4.jpeg";
import imageSource5 from "../../../Assets/Images/shoes5.jpeg";
import imageSource6 from "../../../Assets/Images/shoes6.jpeg";

function Products(): JSX.Element {
  return (
    <div className="Products">
      <div className="images">
        <div>
            <img src={imageSource1} />
            <img src={imageSource2} />
            <img src={imageSource3} />
        </div>
        <div>
            <img src={imageSource4} />
            <img src={imageSource6} />
            <img src={imageSource5} />
        </div>
      </div>
    </div>
  );
}

export default Products;
