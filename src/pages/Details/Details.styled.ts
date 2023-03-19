import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

export const PlayerThumba = styled.div`
  width: 100%;
  margin-bottom: 60px;
  padding: 30px 0;
  background: linear-gradient(
    253.58deg,
    var(--acsent-color) 1.55%,
    var(--success-color) 95.8%
  );
`;

export const Title = styled.h1`
  margin-bottom: 60px;
  font-size: 36px;
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

export const TitleLessons = styled.h2`
  margin-top: 30px;
  margin-inline: 30px;
  color: var(--bg-body);
  font-size: 18px;
  line-height: 1.58;
  text-align: start;
`;

export const TextLessons = styled.p`
  margin-inline: 30px;
  margin-bottom: 65px;
  color: var(--text-color);
  font-size: 18px;
  line-height: 1.76;
  text-align: start;
`;

export const WraperCard = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  justify-content: center;
  grid-gap: 30px;
  max-width: 100%;
  margin: 0 auto;
  margin-bottom: 60px;
  margin-inline: 30px;
`;

export const BackLink = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
  margin-left: 30px;
  font-size: 20px;
  line-height: 1.2;
  text-decoration: none;
  color: var(--bg-body);

  & span {
    margin-left: 10px;
  }
`;
