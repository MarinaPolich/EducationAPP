import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const CardBox = styled.li`
  width: 303px;
  text-align: start;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
  overflow: hidden;
`;

export const ThumbVideo = styled.div`
  width: 100%;
  height: 170px;
  aspect-ratio: 303 / 170;
  border-radius: 10px 10px 0 0;
  background-color: var(--bg-body);
  overflow: hidden;

  &:hover {
    & img,
    & video {
      transform: translateY(-170px);
    }
  }

  & img,
  & video {
    transition: transform var(--transition);
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`;

export const InfoBox = styled.div`
  width: 100%;
  height: calc(100% - 170px);
  padding: 15px 30px;
  text-align: start;
  color: var(--bg-body);
  background: linear-gradient(
    253.58deg,
    var(--acsent-color) 1.55%,
    var(--success-color) 95.8%
  );
`;

export const ProgressBox = styled.div`
  position: relative;
  margin-top: 15px;
  margin-bottom: 40px;
`;

export const LinkTitle = styled(NavLink)`
  margin-bottom: 10px;
  color: var(--bg-body);
`;

export const TitleCard = styled.h3`
  font-size: 14px;
  line-height: 1.52;
`;

export const TextCard = styled.ul`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.52;
`;
