import { useNavigate } from "react-router-dom";

const Enterprise = () => {

    const navigate = useNavigate();
    return (
      <div>
        <h1>Enterprise</h1>
        <p>Enterprise page content goes here.</p>
        <button onClick={() => navigate("/")}>Go back home</button>{" "}
      </div>
    );
}

export default Enterprise;