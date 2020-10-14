import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { PulseLoader } from "react-spinners";
import SingleIssue from "../components/SingleIssue";
import { issueActions } from "../redux/actions/issue.actions";

const HomePage = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const issues = useSelector((state) => state.issues);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(issueActions.issuesRequest(currentPage));
  }, [dispatch, currentPage]);

  const handleNextPage = () => {
    if (currentPage > 70) return;
    setCurrentPage(currentPage + 1);
  };
  const handlePreviousPage = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <Container>
        <h1>Issue List</h1>
        {loading ? (
          <PulseLoader loading={loading} color="orange" />
        ) : (
          <>
            {issues && issues.length ? (
              <div className="issue-list">
                <Table bordered hover>
                  <tbody>
                    {issues.map((issue) => (
                      <SingleIssue issue={issue} key={issue.id} />
                    ))}
                  </tbody>
                </Table>
                <div className="d-flex justify-content-between">
                  <h6>{`Current Page: ${currentPage}`}</h6>
                  <div>
                    {currentPage !== 1 ? (
                      <Button
                        variant="dark"
                        onClick={() => handlePreviousPage()}
                      >
                        Previous
                      </Button>
                    ) : (
                      <></>
                    )}
                    <Button variant="dark" onClick={() => handleNextPage()}>
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default HomePage;
