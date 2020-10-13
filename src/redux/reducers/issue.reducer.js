import * as types from "../constants/issue.constants";

const initialState = {
  issues: [],
  loading: false,
  selectedIssues: [],
  currentIssue: [],
};

const issueReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.ISSUE_REQUEST:
    case types.ISSUE_SELECT:
      return { ...state, loading: true };
    case types.ISSUE_REQUEST_SUCCESS:
      return { ...state, issues: payload, loading: false };
    case types.ISSUE_SELECT_SUCCESS:
      if (payload.currentId === "delete") {
        return {
          ...state,
          selectedIssues: state.selectedIssues.slice(0, -1),
          currentIssue: payload.currentId,
          loading: false,
        };
      } else {
        if (state.selectedIssues.includes(payload.issue.id)) {
          return {
            ...state,
            currentIssue: payload.currentId,
            loading: false,
          };
        } else {
          return {
            ...state,
            selectedIssues: [...state.selectedIssues, payload.issue],
            currentIssue: payload.currentId,
            loading: false,
          };
        }
      }
    case types.ISSUE_REQUEST_FAILURE:
    case types.ISSUE_SELECT_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default issueReducer;
