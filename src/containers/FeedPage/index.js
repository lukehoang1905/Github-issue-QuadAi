import React from "react";
import { Card, Container } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
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
              recentFive.map((issue, index) => (
                <>
                  <Card className="text-left" style={{ marginBottom: "2vh" }}>
                    <Card.Header>
                      <Card.Title>
                        <h3 style={{ color: "blue" }}>
                          Choice No.{index + 1} :
                        </h3>{" "}
                        {issue.title}
                      </Card.Title>
                    </Card.Header>
                    <Card.Body className="overflow-hidden">
                      <Card.Text>
                        <ReactMarkdown source={issue.body} skipHtml="false" />
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer
                      className="text-muted"
                      style={{ backgroundColor: "rgba(0,255,0,0.3)" }}
                    >
                      by {issue.user.login}
                    </Card.Footer>
                  </Card>
                </>
              ))
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
