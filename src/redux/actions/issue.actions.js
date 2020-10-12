import * as types from "../constants/issue.constants";

const issuesRequest = () => async (dispatch) => {
  dispatch({ type: types.ISSUE_REQUEST, payload: null });
  try {
    const res = await fetch(
      `https://api.github.com/repos/rails/rails/issues?page=1&per_page=5`
    );
    const data = await res.json();
    console.log("got data", data);
    dispatch({ type: types.ISSUE_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.ISSUE_REQUEST_FAILURE, payload: error });
  }
};

export const issueActions = {
  issuesRequest,
};
