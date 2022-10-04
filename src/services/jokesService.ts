import Api from "../utils/axios";

export const getAllJokes = async (payload: any) => {
  try {
    const { data } = await Api.get(`/search?query=all`, payload);
    return data?.result;
  } catch (error) {
    console.log("first", error);
    // throw handleApiError(error);
  }
};

export const getAJoke = async (payload: any) => {
  try {
    const { data } = await Api.get(`/search?query=all`, payload);
    return data?.result;
  } catch (error) {
    console.log("first", error);
    // throw handleApiError(error);
  }
};

export const getByCategory = async (category: any) => {
  try {
    const { data } = await Api.get(`/category=${category}`);
    return data?.result;
  } catch (error) {
    console.log("first", error);
    // throw handleApiError(error);
  }
};

export const getAllCategories = async (category: any) => {
  try {
    const { data } = await Api.get(`/categories`);
    console.log(data);
    return data;
  } catch (error) {
    console.log("first", error);
    // throw handleApiError(error);
  }
};
