import instance from "../axiosConfig";

// get all post
export const apiGetPosts = () => {
  return instance.get("/api/v1/post/all");
};
