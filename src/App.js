import React from "react";
import { Container } from "reactstrap";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Perks from "./components/Perks";
import Sponsors from "./components/Sponsors";
import Details from "./components/Details";
import "./App.scss";
import Workshops from "./components/Workshops";
import Donations from "./components/Donations";
import Footer from "./components/Footer";

function App() {
  return (
    <Container className="App">
      <Navigation />
      <Header />
      <Perks />
      <Details />
      <Workshops />
      <Sponsors />
      <Donations />
      <Footer />
    </Container>
  );
}

export default App;
