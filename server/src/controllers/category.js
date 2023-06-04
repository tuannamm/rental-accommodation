import * as categoryService from "../services";

export const getCategories = async (req, res) => {
  try {
    const response = await categoryService.getCategories();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      err: -1,
      msg: "Failed at getCategories controller" + error,
    });
  }
};
