import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Footer from "./Footer";
import Nav from "react-bootstrap/Nav";
import "./App.css";
import HomePage from "./HomePage";
import About from "./About";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Nick Landreville",
      headerLinks: [
        { title: "Home", path: process.env.PUBLIC_URL + "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: "Nick Landreville Studios",
        subHeading: "Software Engineer and Inclusive Designer",
        text: "View recent projects below(links are tabbable)",
      },
      about: {
        title: "About",
      },
      contact: {
        title: "Contacts",
      },
    };
  }
  render() {
    return (
      <Router basename={`${process.env.PUBLIC_URL}/`}>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand> Nick Landreville</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
                {/*  <Link className="nav-link" to="/contact">
                  Contact
                </Link>
    */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route
            path="/"
            exact
            render={() => (
              <HomePage
                title={this.state.home.title}
                subHeading={this.state.home.subHeading}
                text={this.state.home.text}
              />
            )}
          />
          <Route
            path="/about"
            render={() => <About title={this.state.about.title} />}
          />
          {/*  <Route
            path="/contact"
            render={() => <Contact title={this.state.contact.title} />}
          />
         */}
          <Footer />
        </Container>
      </Router>
    );
  }
}
export default App;
