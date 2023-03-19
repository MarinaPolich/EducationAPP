import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LessonInfo, useGetCourseByIdQuery } from "../../redux/courses/courses";
import {
  BackLink,
  Container,
  PlayerThumba,
  TextLessons,
  Title,
  TitleLessons,
  WraperCard,
} from "./Details.styled";
import { ReactSVG } from "react-svg";

import { Player } from "../../components/Player/Player";
import { CardLessons } from "../../components/CardLessons/CardLessons";
import { arrow } from "../../assets/icon";
import { setVideoTime } from "../../redux/currentUser/currentUserSlice";
import { useDispatch, useSelector } from "react-redux";
import { getVideoTime } from "../../redux/currentUser/selectors";

const Details: FC = () => {
  const { courseId } = useParams();
  const { data: details } = useGetCourseByIdQuery(courseId as string);
  const [selectedLesson, setSelectedLesson] = useState<LessonInfo>();
  const lessonsPosition = useSelector(getVideoTime(courseId ?? ""));
  const dispatch = useDispatch();
  useEffect(() => {
    if (details) setSelectedLesson(details.lessons[0]);
  }, [details]);

  return (
    <Container>
      <PlayerThumba>
        <BackLink to="/">
          <ReactSVG src={arrow} width={27} height={16} title="decor" />{" "}
          <span>Courses</span>
        </BackLink>
        {selectedLesson && (
          <Player
            src={selectedLesson.link}
            autoPlay={false}
            controls={true}
            startPosition={
              lessonsPosition && lessonsPosition[selectedLesson.id]
            }
            onChangePosition={(position) => {
              dispatch(
                setVideoTime({
                  courseId,
                  lessonId: selectedLesson.id,
                  position,
                })
              );
            }}
            width="100%"
            height="auto"
          />
        )}
        <TitleLessons>
          <span>{selectedLesson?.order} </span> {selectedLesson?.title}
        </TitleLessons>
      </PlayerThumba>
      <Title>{details?.title}</Title>
      <TextLessons>{details?.description}</TextLessons>
      <WraperCard>
        {details?.lessons.map(({ id, ...props }, index) => (
          <CardLessons
            key={id}
            {...props}
            onSelected={() => setSelectedLesson(details.lessons[index])}
          />
        ))}
      </WraperCard>
    </Container>
  );
};

export default Details;
