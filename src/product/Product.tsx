import { useNavigate } from "react-router-dom";


const Product = () => { 

    const navigate = useNavigate();
    return (

      <div className="product-root">
        <h1>Product Page</h1>
        <p>This is the product page.</p>
        <button
         onClick={() => navigate("/")}>Go back home</button>
      </div>
    );
    }

    export default Product;