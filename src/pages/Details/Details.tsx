import { FC } from "react";
import { useParams } from "react-router-dom";
import { useGetCourseByIdQuery } from "../../redux/courses/courses";

const Details: FC = () => {
  const { courseId } = useParams();
  const { data: details } = useGetCourseByIdQuery(courseId as string);
  console.log(details);
  return <></>;
};

export default Details;
