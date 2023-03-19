import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
  margin-bottom: 25px;
`;

export const ProgressPrev = styled.div`
  border-radius: 2px;
  background-color: var(--bg-body);
`;

type Props = {
  value: number;
};

export const ProgressBar = styled.div<Props>`
  width: ${({ value }) => value + "%"};
  height: 4px;
  border-radius: 2px;
  transition: 0.4s linear;
  transition-property: width, background-color;
  background-color: var(--text-color);

  @keyframes progress {
    0% {
      width: 0%;
      background: var(--text-color);
    }

    100% {
      width: 100%;
      background: var(--text-color);
    }
  }
`;

export const Loader = styled.div`
  position: absolute;
  bottom: -30px;
  left: 0;
  color: var(--bg-body);
  font-weight: 400;
  font-size: 14px;
  line-height: 1.52;
`;
