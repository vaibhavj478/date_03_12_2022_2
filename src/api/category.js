import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const STATUES = Object.freeze({
  ERROR: "error",
  SUCCESS: "success",
  LOADING: "loading",
});

const categorySlice = createSlice({
  name: "category",
  initialState: {
    status: STATUES,
    category: [],
    total_page: 0,
  },
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setTotalPage: (state, action) => {
      state.total_page = action.payload;
    },
  },
});

export const { setStatus, setCategory, setTotalPage } = categorySlice.actions;

export default categorySlice.reducer;

export const getCategoryApi = (token, page, query = "") => {
  return async (dispatch, getState) => {
    dispatch(setStatus(STATUES.LOADING));
    try {
      const res = await axios(
        `http://localhost:8000/api/v1/category?pro_cate_name=${query}&page=${page}`,
        {
          headers: {
            authorization: token,
          },
        }
      );

      console.log(res);

      if (res.status === 200) {
        dispatch(setCategory(res.data.cate));
        dispatch(setTotalPage(res.data.total_page));
        dispatch(setStatus(STATUES.SUCCESS));
      }
    } catch (error) {
      console.log(error.message);
      dispatch(setStatus(STATUES.ERROR));
    }
  };
};

export const createCategoryApi = (token, pro_cate_name) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setStatus(STATUES.LOADING));

      const create = await axios(
        `http://localhost:8000/api/v1/category/create`,
        {
          method: "post",
          headers: {
            authorization: token,
          },
          data: {
            pro_cate_name,
          },
        }
      );

      if (create.status !== 201) {
        dispatch(setStatus(STATUES.SUCCESS));
      }
    } catch (error) {
      console.log(error.message);
      dispatch(setStatus(STATUES.ERROR));
    }
  };
};

export const deleteCategoryApi = (token, id) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setStatus(STATUES.LOADING));

      const res = await axios(`http://localhost:8000/api/v1/category/${id}`, {
        method:"delete",
        headers: {
          authorization: token,
        },
      });

      if (res.status !== 200) {
        dispatch(setStatus(STATUES.SUCCESS));
      }
    } catch (error) {
      console.log(error.message);
      dispatch(setStatus(STATUES.ERROR));
    }
  };
};
export const updateCategoryApi = (token, id , pro_cate_name) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setStatus(STATUES.LOADING));

      const res = await axios(`http://localhost:8000/api/v1/category/${id}`, {
        method:"put",
        headers: {
          authorization: token,
        },
        data:{
            pro_cate_name
        }
      });

console.log(res.data);
      if (res.status !== 200) {
        dispatch(setStatus(STATUES.SUCCESS));
      }
    } catch (error) {
      console.log(error.message);
      dispatch(setStatus(STATUES.ERROR));
    }
  };
};


