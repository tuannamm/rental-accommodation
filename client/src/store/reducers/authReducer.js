import actionTypes from "../actions/actionTypes";

const initState = {
  isLoggedIn: false,
  accessToken: null,
  msg: "",
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        accessToken: action.data,
      };
    case actionTypes.REGISTER_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        msg: action.data,
        accessToken: null,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        accessToken: action.data,
      };
    case actionTypes.LOGIN_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        msg: action.data,
        accessToken: null,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        accessToken: null,
        msg: "",
      };
    default:
      return state;
  }
};

export default authReducer;
