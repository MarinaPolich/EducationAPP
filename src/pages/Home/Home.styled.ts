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
  width: 1200px;
  margin: 0 auto;
`;

export const WraperHero = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const TitleBox = styled.div`
  padding: 109px 100px 0 100px;
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
  right: 0px;
`;

export const WraperCard = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(303px, 1fr));
  justify-content: center;
  grid-gap: 30px;
  margin: 0 auto;
  max-width: 100%;
  margin-block: 60px;
  margin-inline: 99px;
`;

export const TitleMain = styled.h2`
  margin-top: 60px;
  font-size: 40px;
  line-height: 1.58;
  text-align: center;
  background: linear-gradient(
    253.58deg,
    var(--acsent-color) 2.55%,
    var(--success-color) 94.8%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;

export const PaginationBox = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 60px;
  margin-inline: 99px;
`;

export const PaginationItem = styled.li`
  display: block;
  width: 60px;
  height: 60px;
  margin-right: 10px;
  padding-block: 20px;
  background: linear-gradient(
    253.58deg,
    var(--acsent-color) 1.55%,
    var(--success-color) 95.8%
  );
  border-radius: 100px;
  color: var(--bg-body);
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.64;
`;
