import { useNavigate } from "react-router-dom";

const Developer = () => {  
    const navigate = useNavigate();
    
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold">Developer</h1>
        <p className="mt-4 text-lg">This is the Developer page.</p>
        <button onClick={() => navigate("/")}>Go back home</button>
      </div>
    );
    }

export default Developer;