import { FC, useRef } from "react";
import { useParams } from "react-router-dom";
import { useGetCourseByIdQuery } from "../../redux/courses/courses";
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

const Details: FC = () => {
  const { courseId } = useParams();
  const { data: details } = useGetCourseByIdQuery(courseId as string);
  console.log("details :>> ", details);
  return (
    <Container>
      <PlayerThumba>
        <BackLink to="/">
          <ReactSVG src={arrow} width={27} height={16} title="decor" />{" "}
          <span>Courses</span>
        </BackLink>
        {details?.lessons[0].link && (
          <Player
            src={details?.lessons[0].link}
            autoPlay={false}
            controls={true}
            width="100%"
            height="auto"
          />
        )}
        <TitleLessons>{details?.lessons[0].title}</TitleLessons>
      </PlayerThumba>
      <Title>{details?.title}</Title>
      <TextLessons>{details?.description}</TextLessons>
      <WraperCard>
        {details?.lessons.map(({ id, ...props }) => (
          <CardLessons key={id} {...props} />
        ))}
      </WraperCard>
    </Container>
  );
};

export default Details;
