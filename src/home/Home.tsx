import React from "react";
import NavigationBar from "../components/NavigationBar";
import "./Home.css";
import Container from "../components/Container";
import BearCounter from "../components/counter/Counter";

const Home = (): React.ReactNode => {
  return (
    <div className="home-root">
      <NavigationBar />

      <Container>
        <BearCounter/>
      </Container>
    </div>
  );
};

export default Home;
