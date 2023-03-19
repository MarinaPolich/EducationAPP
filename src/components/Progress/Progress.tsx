import { FC } from "react";
import {
  Container,
  Loader,
  ProgressBar,
  ProgressPrev,
} from "./Progress.styled";

type Props = {
  value: number;
};

export const Progress: FC<Props> = ({ value }) => {
  return (
    <Container>
      <ProgressPrev>
        <ProgressBar value={value}></ProgressBar>
        <Loader>
          <span>{value}%</span> Complete
        </Loader>
      </ProgressPrev>
    </Container>
  );
};
