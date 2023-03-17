import { FC } from "react";
import { ReactSVG } from "react-svg";
import { boy, hero_icon } from "../../assets/icon";
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
      <Container></Container>
    </>
  );
};

export default Home;
