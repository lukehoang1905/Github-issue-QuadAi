import * as types from "../constants/issue.constants";

const issuesRequest = (currentPage) => async (dispatch) => {
  dispatch({ type: types.ISSUE_REQUEST, payload: null });

  try {
    const res = await fetch(
      `https://api.github.com/repos/rails/rails/issues?page=${currentPage}&per_page=5`
    );
    const data = await res.json();
    dispatch({ type: types.ISSUE_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.ISSUE_REQUEST_FAILURE, payload: error });
  }
};

const selectIssue = (issue) => (dispatch) => {
  dispatch({ type: types.ISSUE_SELECT, payload: null });
  try {
    dispatch({ type: types.ISSUE_SELECT_SUCCESS, payload: issue });
  } catch (error) {
    dispatch({ type: types.ISSUE_SELECT_FAILURE, payload: error });
  }
};

export const issueActions = {
  issuesRequest,
  selectIssue,
};
