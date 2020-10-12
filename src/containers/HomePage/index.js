import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import SingleIssue from "../../components/SingleIssue";
import { issueActions } from "../../redux/actions/issue.actions";

const HomePage = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.issue.loading);
  const issues = useSelector((state) => state.issue.issues);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(issueActions.issuesRequest(currentPage));
  }, [dispatch, currentPage]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePreviousPage = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <Container>
        {" "}
        <h1>Github Issue</h1>
        {loading ? (
          <ClipLoader color="#f86c6b" size={150} loading={loading} />
        ) : (
          <>
            {issues.length ? (
              <div className="issue-list">
                <Table bordered hover>
                  <tbody>
                    {issues.map((issue) => (
                      <SingleIssue issue={issue} key={issue.id} />
                    ))}
                  </tbody>
                </Table>
                <div>
                  <p>
                    <h6>{`Current Page: ${currentPage}`}</h6>
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
                  </p>
                </div>
              </div>
            ) : (
              <p>There is no issue</p>
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default HomePage;
