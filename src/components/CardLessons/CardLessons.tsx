import { FC } from "react";
import { play } from "../../assets/img";
import {
  CardBox,
  ThumbVideo,
  Image,
  InfoBox,
  TitleCard,
  TextCard,
} from "./CardLessons.styled";

type Props = {
  order: number;
  title: string;
  previewImageLink: string;
  status: string;
};

export const CardLessons: FC<Props> = ({
  order,
  title,
  previewImageLink,
  status,
}) => {
  const image = previewImageLink
    ? `${previewImageLink}/lesson-${order}.webp`
    : play;
  return (
    <CardBox>
      <ThumbVideo>
        <Image src={image} title="photo cours" width={360} height={160} />
      </ThumbVideo>
      <InfoBox>
        <TitleCard>
          <span>{order} </span>
          {title}
        </TitleCard>
        <TextCard>{status}</TextCard>
      </InfoBox>
    </CardBox>
  );
};
