import { FC } from "react";
import { Container, StarBox } from "./RatingStar.styled";
import { Star } from "./Star";

const getPercent = (value: number, index: number) => {
  const res = (value > index ? value - index : 0) * 100;
  return res > 100 ? 100 : res;
};

type Props = {
  value: number;
};

export const RatingStar: FC<Props> = ({ value }) => {
  return (
    <Container>
      <StarBox>
        {[...new Array(5)].map((_, index) => (
          <Star key={index} percent={getPercent(value, index)} />
        ))}
      </StarBox>
    </Container>
  );
};
