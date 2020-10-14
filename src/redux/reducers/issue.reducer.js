import * as types from "../constants/issue.constants";

const initialState = {
  issues: [],
  loading: false,
  selectionHistory: [],
  currentHighlight: [],
  notificationIsSeen: 0,
};

const issueReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.ISSUE_REQUEST:
      return { ...state, loading: true };
    case types.ISSUE_REQUEST_SUCCESS:
      return { ...state, issues: payload, loading: false };
    case types.SELECT_ISSUE:
      return { ...state, currentHighlight: payload };
    case types.RECORD_HISTORY:
      return {
        ...state,
        selectionHistory: [payload, ...state.selectionHistory.slice(0, 4)],
        notificationIsSeen: (state.notificationIsSeen += 1),
      };
    case types.RESET_NOTIFICATION:
      return { ...state, notificationIsSeen: payload };
    case types.ISSUE_REQUEST_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default issueReducer;
