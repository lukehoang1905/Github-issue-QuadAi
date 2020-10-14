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

const selectIssue = (id) => (dispatch) => {
  dispatch({ type: types.SELECT_ISSUE, payload: id });
};

const recordHistory = (issue) => (dispatch) => {
  dispatch({ type: types.RECORD_HISTORY, payload: issue });
};

const resetNotification = (bool) => (dispatch) => {
  dispatch({ type: types.RESET_NOTIFICATION, payload: bool });
};

export const issueActions = {
  issuesRequest,
  selectIssue,
  recordHistory,
  resetNotification,
};
