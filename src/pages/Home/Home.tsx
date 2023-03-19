import { FC, useMemo, useState } from "react";
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
  const [page, setPage] = useState(0);

  let courses: CourseInfo[] = useMemo(() => {
    const start = page * 10;
    const end = page * 10 + 10;
    return data?.slice(start, end) ?? [];
  }, [data, page]);
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
          {courses?.map(
            ({ id, meta: { courseVideoPreview, skills }, ...props }) => (
              <Card
                key={id}
                id={id}
                skills={skills}
                // video={courseVideoPreview.link}
                {...props}
              />
            )
          )}
        </WraperCard>

        <PaginationBox>
          {[...new Array(Math.ceil((data?.length ?? 0) / 10))].map(
            (_, index) => (
              <PaginationItem
                key={index}
                className={index === page ? "active" : ""}
                onClick={() => {
                  setPage(index);
                }}
              >
                {index + 1}
              </PaginationItem>
            )
          )}
        </PaginationBox>
      </Container>
    </>
  );
};

export default Home;
