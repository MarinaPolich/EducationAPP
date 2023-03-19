import { FC, useMemo } from "react";
import { useSelector } from "react-redux";
import { play } from "../../assets/img";
import { getVideoTime } from "../../redux/currentUser/selectors";
import { Progress } from "../Progress/Progress";
import { RatingStar } from "../RatingStar/RatingStar";
import {
  CardBox,
  ThumbVideo,
  Image,
  InfoBox,
  TitleCard,
  TextCard,
  ProgressBox,
  LinkTitle,
} from "./Card.styled";

type Props = {
  id: string;
  title: string;
  previewImageLink: string;
  lessonsCount: number;
  rating: number;
  skills?: string[];
  duration: number
};

export const Card: FC<Props> = ({
  id,
  title,
  previewImageLink,
  lessonsCount,
  rating,
  skills,
  duration
}) => {
  const image = previewImageLink ? `${previewImageLink}/cover.webp` : play;
  const lessonsPosition = useSelector(getVideoTime(id ?? ""));
  const educationTime = useMemo(() => {
    if (!lessonsPosition)
      return 0;
    return Object.values(lessonsPosition).reduce((acc, item) => (acc + item))
  }, [lessonsPosition]);
  return (
    <CardBox>
      <ThumbVideo>
        <Image src={image} title="photo cours" />
      </ThumbVideo>
      <InfoBox>
        <LinkTitle key={id} to={`/details/${id}`}>
          <TitleCard>{title}</TitleCard>
        </LinkTitle>

        <span>Lessons: {lessonsCount}</span>
        <ProgressBox>
          <Progress value={Math.ceil((educationTime / duration) * 100)} />
          <RatingStar value={rating} />
        </ProgressBox>
        <TextCard>
          {skills?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </TextCard>
      </InfoBox>
    </CardBox>
  );
};
