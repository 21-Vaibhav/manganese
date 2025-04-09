import { useNavigate } from "react-router-dom";
import Container from "../components/Container";

const Developer = () => {  
    const navigate = useNavigate();
    
    return (
      <Container>
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <h1 className="text-4xl font-bold">Developer</h1>
          <p className="mt-4 text-lg">This is the Developer page.</p>
          <button onClick={() => navigate("/")}>Go back home</button>
        </div>
      </Container>
    );
    }

export default Developer;