import React, { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import SingleIssue from "../../components/SingleIssue";
import { issueActions } from "../../redux/actions/issue.actions";

const HomePage = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.issue.loading);
  const issues = useSelector((state) => state.issue.issues);
  console.log("loading", loading);

  useEffect(() => {
    dispatch(issueActions.issuesRequest());
  }, [dispatch]);

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
