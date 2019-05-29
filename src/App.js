import React from "react";
import { Container } from "reactstrap";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Perks from "./components/Perks";
import "./App.scss";

function App() {
  return (
    <Container className="App">
      <Navigation />
      <Header />
      <Perks />
    </Container>
  );
}

export default App;
