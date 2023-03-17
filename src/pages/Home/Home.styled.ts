import styled from "styled-components";
import { ReactSVG } from "react-svg";

export const HeroWraper = styled.div`
  width: 100%;
  height: 500px;
  background: linear-gradient(
    253.58deg,
    var(--acsent-color) 1.55%,
    var(--success-color) 95.8%
  );
`;

export const Container = styled.div`
  width: 1500px;
  margin: 0 auto;
`;

export const WraperHero = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const TitleBox = styled.div`
  padding: 109px 156px 0 156px;
`;

export const TitleHero = styled.h1`
  width: 534px;
  color: var(--bg-body);
  font-size: 44px;
  line-height: 1.58;
`;
export const IconBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const IconHero = styled(ReactSVG)`
  position: absolute;
  top: 30px;
  right: 195px;
`;
