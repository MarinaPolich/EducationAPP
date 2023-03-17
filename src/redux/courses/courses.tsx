
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface MetaInfo {
    slug: string;
    skills: string[];
    courseVideoPreview: {
        link: string,
        duration: number,
        previewImageLink: string
    }
}
export interface LessonInfo {
    id: string;
    title: string;
    duration: number;
    order: number;
    type: string;
    status: "unlocked" | "locked";
    link: string;
    previewImageLink: string
}

interface BaseCourseInfo {
    id: string;
    title: string;
    tags: string[];
    launchDate: string;
    status: string;
    description: string;
    duration: number;
    containsLockedLessons: boolean;
    previewImageLink: string;
    rating: number;
    meta: MetaInfo,

}
export interface CourseInfo extends BaseCourseInfo {
    lessonsCount: number;
}

export interface CourseDetailsInfo extends BaseCourseInfo {
    lessons: LessonInfo[]
}

export const coursesApi = createApi({
    reducerPath: 'coursesApi',
    tagTypes: ['Courses', 'CourseDetails'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://api.wisey.app/api/v1/core/preview-courses',
        prepareHeaders: (headers) => {
            headers.set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkOTRlNjg4NS1kM2U5LTQwY2EtYTVjYy01MDRkNjZlZDVlN2QiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3MDQ3NjIsImV4cCI6MTY3OTYwNDc2Mn0.Qw3LF39CDp27ZxoGzt5rikJM_OTx0eNaoyFFLxxrXUM`)
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getCourses: builder.query<CourseInfo[], void>({
            query: () => '',
            transformResponse: (response: { courses: CourseInfo[] }, meta, arg) =>
                response.courses,
            providesTags: [{ type: 'Courses' }]
        }),
        getCourseById: builder.query<CourseDetailsInfo, string>({
            query: (id) => id,
            providesTags: (result, error, id) => [{ type: 'CourseDetails', id }]
        })
    })
})

export const { useGetCoursesQuery, useGetCourseByIdQuery } = coursesApi;