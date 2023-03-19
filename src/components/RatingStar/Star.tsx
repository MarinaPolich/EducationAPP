import { FC } from "react";
import { ReactSVG } from "react-svg";
import { star } from "../../assets/icon";

type Props = {
  percent: number;
};

export const Star: FC<Props> = ({ percent }) => {
  return (
    <ReactSVG
      src={star}
      width={15}
      height={14}
      afterInjection={(svg) => {
        svg?.querySelector("#percent")?.setAttribute("offset", percent + "%");
      }}
    />
  );
};
