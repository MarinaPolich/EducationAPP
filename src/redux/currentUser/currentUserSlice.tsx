import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
    courses: { [key: string]: { [key: string]: number } }
}


const initialState: UserState = {
    courses: {}
};

export const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
        setVideoTime: (state, { payload: { courseId, lessonId, position } }) => {
            state.courses[courseId] = { ...state.courses[courseId], [lessonId]: position }
        }
    }
});

export const { setVideoTime } = currentUserSlice.actions;