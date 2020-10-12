import React from "react";
import { Badge, Col, Row } from "react-bootstrap";
import Moment from "react-moment";

const SingleIssue = ({ issue }) => {
  return (
    <tr>
      <td>
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
