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
      <table>
        <tbody>
            <tr>
                <td> <img src={imageSource1} /> </td>
                <td> <img src={imageSource2} /> </td>
                <td> <img src={imageSource3} /> </td>
            </tr>
            <tr>
                <td> <img src={imageSource4} /> </td>
                <td> <img src={imageSource5} /> </td>
                <td> <img src={imageSource6} /> </td>
           </tr>
        </tbody>  
      </table>
    </div>
  );
}

export default Products;
