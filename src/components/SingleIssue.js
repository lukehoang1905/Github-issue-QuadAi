import React, { useState } from "react";
import { Badge, Col, Row } from "react-bootstrap";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { issueActions } from "../redux/actions/issue.actions";
import "./SingleIssue.css";

const SingleIssue = ({ issue }) => {
  const id = issue.id;
  const selectedIssues = useSelector((state) => state.issue.selectedIssues);
  const currentIssue = useSelector((state) => state.issue.currentIssue);
  const dispatch = useDispatch();
  console.log("selc", selectedIssues);
  console.log("current", currentIssue);

  const handleSelectIssue = (id) => {
    if (currentIssue === id) {
      id = "delete";
    }
    dispatch(issueActions.selectIssue(id));
    console.log(selectedIssues);
    console.log("current", currentIssue);
  };

  return (
    <tr>
      <td
        style={{ border: "1px solid red" }}
        className={issue.id === currentIssue ? "highlighted" : ""}
        onClick={() => handleSelectIssue(id)}
      >
        <Row>
          <Col md={1} className="issue-icon-area">
            <i className="fas fa-code-branch"></i>
          </Col>
          <Col md={9} className="issue-title-area">
            <h5 className="issue-title">
              {issue.title}{" "}
              {issue.labels.map((label) => (
                <Badge variant="secondary" key={label.id}>
                  {label.name}
                </Badge>
              ))}
            </h5>
            <p className="issue-status text-muted">
              #{issue.number} last updated{" "}
              <Moment fromNow>{issue.updated_at}</Moment> by{" "}
              <a href="#main">{issue.user.login}</a>
            </p>
          </Col>
        </Row>
      </td>
    </tr>
  );
};

export default SingleIssue;
