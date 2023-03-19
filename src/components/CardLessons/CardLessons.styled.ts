import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const CardBox = styled.li`
  width: 360px;
  text-align: start;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
  overflow: hidden;
`;

export const ThumbVideo = styled.div`
  width: 100%;
  aspect-ratio: 360 / 160;
  border-radius: 10px 10px 0 0;
  background-color: var(--bg-body);
  overflow: hidden;
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
  height: calc(100% - 160px);
  padding: 15px 30px;
  text-align: start;
  color: var(--bg-body);
  background: linear-gradient(
    253.58deg,
    var(--acsent-color) 1.55%,
    var(--success-color) 95.8%
  );
`;

export const TitleCard = styled.h4`
  margin-bottom: 10px;
  color: var(--bg-body);
  font-size: 14px;
  line-height: 1.52;
`;

export const TextCard = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.52;
`;
