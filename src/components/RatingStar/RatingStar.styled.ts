import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  right: 30px;
  bottom: -30px;
  width: 83px;
  text-align: center;
`;

type Props = {
  value: number;
};

export const StarBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
