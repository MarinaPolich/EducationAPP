import { FC, useMemo } from "react";
import { ReactSVG } from "react-svg";
import { boy, hero_icon } from "../../assets/icon";
import { Card } from "../../components/Card/Card";
import { CourseInfo, useGetCoursesQuery } from "../../redux/courses/courses";
import {
  Container,
  HeroWraper,
  IconBox,
  IconHero,
  PaginationBox,
  PaginationItem,
  TitleBox,
  TitleHero,
  TitleMain,
  WraperCard,
  WraperHero,
} from "./Home.styled";

const Home: FC = () => {
  const { data } = useGetCoursesQuery();

  const courses: CourseInfo[] = useMemo(() => {
    return data?.slice(0, 10) ?? [];
  }, [data]);
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
        <TitleMain>Courses</TitleMain>
        <WraperCard>
          {courses?.map(({ id, meta: { skills }, ...props }) => (
            <Card key={id} id={id} skills={skills} {...props} />
          ))}
        </WraperCard>
        <PaginationBox>
          <PaginationItem>01</PaginationItem>
          <PaginationItem>02</PaginationItem>
          <PaginationItem>03</PaginationItem>
          <PaginationItem>04</PaginationItem>
        </PaginationBox>
      </Container>
    </>
  );
};

export default Home;
