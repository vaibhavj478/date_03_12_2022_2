import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUES = Object.freeze({
  SUCCESS: "success",
  LODGING: "loading",
  ERROR: "error",
});

const visitorSlice = createSlice({
  name: "visitor",
  initialState: {
    status: STATUES,
    token: "",
  },
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },

    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setStatus, setToken } = visitorSlice.actions;
export default visitorSlice.reducer;

export const signUpFun = (obj) => {
  return async (dispatch, getState) => {
    dispatch(setStatus(STATUES.LODGING));
    try {
      const res = await axios("http://localhost:8000/api/v1/users", {
        method: "post",
        data: obj,
      });

      
      if(res.status === 200 || res.status === 201  ){
        dispatch(setToken(res.data.token));
        dispatch(setStatus(STATUES.SUCCESS));
      }
      

     
    } catch (error) {
      console.log(error);

      dispatch(setStatus(STATUES.ERROR));
    }
  };
};
export const loginFun = (obj) => {
  return async (dispatch, getState) => {
    dispatch(setStatus(STATUES.LODGING));
    try {
      const res = await axios("http://localhost:8000/api/v1/users/login", {
        method: "post",
        data: obj,
      });

      console.log(res);

      if(res.status === 200){
        dispatch(setToken(res.data.token));
        dispatch(setStatus(STATUES.SUCCESS));
      }

    
    } catch (error) {
      console.log(error);

      dispatch(setStatus(STATUES.ERROR));
    }
  };
};
