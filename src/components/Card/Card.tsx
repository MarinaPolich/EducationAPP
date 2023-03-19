import { FC } from "react";
import { play } from "../../assets/img";
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
  skills: string[];
};

export const Card: FC<Props> = ({
  id,
  title,
  previewImageLink,
  lessonsCount,
  rating,
  skills,
}) => {
  const image = previewImageLink ? `${previewImageLink}/cover.webp` : play;
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
          <Progress value={45} />
          <RatingStar value={rating} />
        </ProgressBox>
        <TextCard>
          {skills.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </TextCard>
      </InfoBox>
    </CardBox>
  );
};
