import * as types from "../constants/issue.constants";

const initialState = {
  issues: [],
  loading: false,
};

const issueReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.ISSUE_REQUEST:
      return { ...state, loading: true };
    case types.ISSUE_REQUEST_SUCCESS:
      return { ...state, issues: payload, loading: false };
    case types.ISSUE_REQUEST_FAILURE:
      console.log(payload);
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default issueReducer;
