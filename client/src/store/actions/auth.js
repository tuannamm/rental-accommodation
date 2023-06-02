import actionTypes from "./actionTypes";
import { apiRegister, apiLogin } from "../../services/auth";

export const register = (payload) => async (dispatch) => {
  try {
    const response = await apiRegister(payload);
    console.log("response: ", response);
    if (response.err === 0) {
      dispatch({
        type: actionTypes.REGISTER_SUCCESS,
        data: response.accessToken,
      });
    } else {
      dispatch({
        type: actionTypes.REGISTER_FAILED,
        data: response.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.REGISTER_FAILED,
      data: null,
    });
  }
};

export const login = (payload) => async (dispatch) => {
  try {
    const response = await apiLogin(payload);
    if (response.err === 0) {
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        data: response.accessToken,
      });
    } else {
      dispatch({
        type: actionTypes.LOGIN_FAILED,
        data: response.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.LOGIN_FAILED,
      data: null,
    });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: actionTypes.LOGOUT,
  });
};
