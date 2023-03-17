import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
    courses: { [key: string]: any }
}


const initialState: UserState = {
    courses: {}
};

export const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
        setVideoTime: (state, { payload: { courseId, ...data } }) => {
            state.courses[courseId] = data;
        }
    }
});

export const { setVideoTime } = currentUserSlice.actions;