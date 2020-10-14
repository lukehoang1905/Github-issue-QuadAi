import React from "react";
import { Col, Dropdown, DropdownButton, Navbar, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { issueActions } from "../../redux/actions/issue.actions";

const PublicNavbar = () => {
  const selectionHistory = useSelector((state) => state.selectionHistory);
  const notificationIsSeen = useSelector((state) => state.notificationIsSeen);

  const dispatch = useDispatch();
  const handleViewNotification = () => {
    dispatch(issueActions.resetNotification(0));
  };

  return (
    <div>
      <Navbar bg="dark" sticky="top" variant="dark" style={{ width: "100%" }}>
        <Navbar.Brand
          id="logo"
          className="mr-auto"
          style={{ paddingRight: "30px" }}
        >
          {" "}
          GitHub Issue
        </Navbar.Brand>
        <DropdownButton
          onClick={() => handleViewNotification()}
          alignRight
          variant="info"
          title={notificationIsSeen > 5 ? `5+` : notificationIsSeen}
          id="dropdown-menu-align-right"
        >
          {selectionHistory.length ? (
            selectionHistory.map((selection, idx) => (
              <Dropdown.Item eventKey={idx}>
                <Row className="d-flex justify-content-between">
                  <Col sx={12}>
                    {selection.title.slice(0, selection.title.indexOf(" "))}
                  </Col>
                  <Col sx={12}>Id: {selection.id}</Col>
                </Row>
                <Dropdown.Divider />
              </Dropdown.Item>
            ))
          ) : (
            <p style={{ textAlign: "center" }}>No issue selected</p>
          )}
        </DropdownButton>
      </Navbar>
    </div>
  );
};

export default PublicNavbar;
