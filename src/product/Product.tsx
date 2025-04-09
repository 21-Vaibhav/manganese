import { useNavigate } from "react-router-dom";
import Container from "../components/Container";


const Product = () => { 

    const navigate = useNavigate();
    return (
      <Container>
        <div className="product-root">
          <h1>Product Page</h1>
          <p>This is the product page.</p>
          <button onClick={() => navigate("/")}>Go back home</button>
        </div>
      </Container>
    );
    }

    export default Product;