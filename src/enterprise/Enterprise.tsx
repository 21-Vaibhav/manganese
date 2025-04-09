import { useNavigate } from "react-router-dom";
import Container from "../components/Container";

const Enterprise = () => {

    const navigate = useNavigate();
    return (
      <Container>
        <div>
          <h1>Enterprise</h1>
          <p>Enterprise page content goes here.</p>
          <button onClick={() => navigate("/")}>Go back home</button>{" "}
        </div>
      </Container>
    );
}

export default Enterprise;