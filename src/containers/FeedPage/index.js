import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const FeedPage = () => {
  const selectedIssues = useSelector((state) => state.issue.selectedIssues);
  const recentFive = selectedIssues.slice(-5);

  return (
    <>
      <Container className="text-center">
        <h1>News Feed</h1>

        <div>
          <ul>
            {recentFive.length ? (
              recentFive.map((issue) => <li>{issue.title}</li>)
            ) : (
              <p>There is no record</p>
            )}
          </ul>
        </div>
      </Container>
    </>
  );
};

export default FeedPage;
