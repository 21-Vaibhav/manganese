import React from "react";
import NavigationBar from "../components/NavigationBar";
import "./Home.css";

const Home = (): React.ReactNode => {
  return (
    <div className="home-root">
      <NavigationBar />
    </div>
  );
};

export default Home;
