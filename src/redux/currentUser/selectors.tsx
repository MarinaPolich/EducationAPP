import { RootState } from "../store";

export const getVideoTime = (courseId: string) => (state: RootState) => state.currentUser.courses[courseId];