import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const PublicNavbar = () => {
  return (
    <div>
      <Navbar style={{ width: "100%" }}>
        <Navbar.Brand
          as={Link}
          to="/"
          id="logo"
          className="mr-auto"
          style={{ paddingRight: "30px" }}
        >
          {" "}
          GitHub Issue
        </Navbar.Brand>
        <Nav.Link as={Link} to="/feed">
          <i className="fas fa-sign-in-alt" /> News Feed
        </Nav.Link>
      </Navbar>
    </div>
  );
};

export default PublicNavbar;
