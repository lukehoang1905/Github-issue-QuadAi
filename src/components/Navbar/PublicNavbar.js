import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const PublicNavbar = () => {
  const selectedIssues = useSelector((state) => state.issue.selectedIssues);
  return (
    <div>
      <Navbar bg="dark" sticky="top" variant="dark" style={{ width: "100%" }}>
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
          <span className="fa-stack fa-2x">
            <i className="fa fa-circle fa-stack-1x"></i>
            <i className="fa-stack-1x " style={{ color: "red" }}>
              {selectedIssues.length}
            </i>
          </span>
        </Nav.Link>
      </Navbar>
    </div>
  );
};

export default PublicNavbar;
