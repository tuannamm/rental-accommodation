import instance from "../axiosConfig";

// get all category
export const apiGetCategories = () => {
  return instance.get("/api/v1/category");
};
