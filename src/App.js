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
import { Helmet } from "react-helmet";
import logo from "./logo.png";

function App() {
  return (
    <Container className="App">
      <Helmet>
        <meta property="twitter:image" content={logo} />
        <meta property="og:image" content={logo} />
      </Helmet>
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
