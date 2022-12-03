import { createSlice } from "@reduxjs/toolkit";

import axios from 'axios'

export const STATUES = Object.freeze({
  SUCCESS: "success",
  LODGING: "loading",
  ERROR: "error",
});

const profileSlice = createSlice({
  name: "profileSlice",
  initialState: {
    status: STATUES.LODGING,
    user: {},
  },
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },

    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setStatus, setUser } = profileSlice.actions;
export default profileSlice.reducer;

export const getProfileThunk = (token) => {
  return async (dispatch, getState) => {
    dispatch(setStatus(STATUES.LODGING));

    try {
      const config = {
        headers: {
          authorization: token,
        },
      };
      const res = await axios("http://localhost:8000/api/v1/myProfile", config);

      if(res.status === 200 ){
        // console.log(res.data.user);
        dispatch(setUser(res.data.user));
        dispatch(setStatus(STATUES.SUCCESS));
      }

    } catch (error) {
      console.log(error.message);

      dispatch(setStatus(STATUES.ERROR));
    }
  };
};
export const setProfileLocal = (data) => {
  return async (dispatch, getState) => {
    dispatch(setStatus(STATUES.LODGING));

    try {
     
        dispatch(setUser({...data}));
        dispatch(setStatus(STATUES.SUCCESS));
      

    } catch (error) {
      console.log(error.message);

      dispatch(setStatus(STATUES.ERROR));
    }
  };
};

export const setProfileApi=(token,data)=>{

  return async(dispatch , getState)=>{
    dispatch(setStatus(STATUES.LODGING));
        try {

          const res = await axios(`http://localhost:8000/api/v1/users/updateProfile`,{
            method:"put",
            headers: {
              authorization: token,
            },
            data
          });

          console.log(res.data);
          // dispatch(setUser(res.date.user));

          dispatch(setStatus(STATUES.SUCCESS));

        } catch (error) {
          console.log(error.message)

          dispatch(setStatus(STATUES.ERROR));
        }

  }
}