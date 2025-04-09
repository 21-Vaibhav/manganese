import { useNavigate } from "react-router-dom";
import Container from "../components/Container";

const Pricing = () => {

  const navigate = useNavigate();

  return (
    <Container>
      <div className="pricing-root">
        <h1>Pricing</h1>
        <p>Pricing page content goes here.</p>
        <button onClick={() => navigate("/")}>Go back home</button>
      </div>
    </Container>
  );
};
export default Pricing;
