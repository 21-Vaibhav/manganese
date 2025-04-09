import { useNavigate } from "react-router-dom";

const Pricing = () => {

  const navigate = useNavigate();

  return (
    <div className="pricing-root">
      <h1>Pricing</h1>

      <p>Pricing page content goes here.</p>
      <button onClick={() => navigate("/")}>Go back home</button>
    </div>
  );
};
export default Pricing;
