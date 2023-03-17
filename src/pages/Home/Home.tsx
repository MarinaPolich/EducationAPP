import { FC, useMemo } from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { boy, hero_icon } from "../../assets/icon";
import { CourseInfo, useGetCoursesQuery } from "../../redux/courses/courses";
import {
  Container,
  HeroWraper,
  IconBox,
  IconHero,
  TitleBox,
  TitleHero,
  WraperHero,
} from "./Home.styled";

const Home: FC = () => {
  const { data } = useGetCoursesQuery();

  const courses: CourseInfo[] = useMemo(() => { return data?.slice(0, 10) ?? [] }, [data]);
  return (
    <>
      <HeroWraper>
        <Container>
          <WraperHero>
            <TitleBox>
              <TitleHero>
                Browse Thousands of Our Video Tutorials Curated Only for you.
              </TitleHero>
            </TitleBox>
            <IconBox>
              <ReactSVG
                src={hero_icon}
                width={461}
                height={299}
                title="decor"
              />
              <IconHero src={boy} width={601} height={470} title="decor hero" />
            </IconBox>
          </WraperHero>
        </Container>
      </HeroWraper>
      <Container>
        {courses?.map(({ id, title, previewImageLink, description, lessonsCount, rating, launchDate, meta: { skills, } }) =>
        (<Link key={id} to={`/details/${id}`}>
          <span>{title}</span>
          <img src={`${previewImageLink}/cover.webp`} />
          <span>{description}</span>
          <br />
          <span>{lessonsCount}</span>
          <br />
          <span>{rating}</span>
          <br />
          <span>{skills?.join(', ')}</span>
          <br />
          <span>{launchDate}</span>
        </Link>))}
      </Container>
    </>
  );
};

export default Home;
