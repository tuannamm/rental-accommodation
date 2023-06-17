import actionTypes from "./actionTypes";
import { apiGetPosts } from "../../services/post";

export const getPosts = () => async (dispatch) => {
  try {
    const response = await apiGetPosts();
    if (response.err === 0) {
      dispatch({
        type: actionTypes.GET_POSTS,
        data: response.data,
      });
    } else {
      dispatch({
        type: actionTypes.GET_POSTS,
        msg: response.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_POSTS,
      data: null,
    });
  }
};
