import React from "react";
import styled from "styled-components";
import { rgba } from "polished";

import HeroUrl from "assets/hero.jpg";
import SamUrl from "assets/sam.jpg";
import ParisUrl from "assets/paris.jpg";
import CyclingUrl from "assets/cycling.jpg";

import { green, blue, purple, grey1 } from "utils/style-variables";

import Card from "components/Card";
import MailchimpForm from "components/MailchimpForm";
import Wrapper from "components/layout/Wrapper";

const Container = styled.div`
  width: 100%;
  margin-top: -70px;
`;

const HeroWrapper = Wrapper.extend`
  position: relative;
`;

const Strapline = styled.div`
  flex: 0 0 40%;

  span {
    display: block;
    font-weight: 300;
    font-size: 2.2em;
  }

  span:nth-child(3) {
    color: ${green};
  }
`;

const BlockImage = Card.extend`
  width: 60%;
  height: 70vh;
  background-image: url(${HeroUrl});
  background-position: center;
  background-size: cover;
`;

const Wheel = styled.div`
  position: absolute;
  right: -50vh;
  height: 112vh;
  width: 112vh;
  background: ${rgba(green, .4)};
  z-index: -1;
  border-radius: 50%;
`;

const Mission = styled.div`
  margin-top: 3em;
  margin-right: 3em;
  padding: 4em 0 7em 3em;
  background: ${grey1};

  p {
    font-size: 1.2em;
    font-weight: 200;
  }
`;

const MissionContents = styled.div`
  width: 70%;
`;

const Impact = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: -4em;
  margin-bottom: 200px;
`;

const Stats = Card.extend`
  display: flex;
  flex-wrap: wrap;
  padding: 2em 1em;
  width: 70%;
  background: ${purple};
`;

const Title = styled.div`
  padding: 1em;
  font-size: 1.2em;

  h1 { margin: .2em 0; }
`;

const StatContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.large ? "row" : "column"};
  justify-content: center;
  align-items: center;
  width: ${props => props.large ? "100%" : "50%"};
  padding: 2em 1em;
  color: white;

  div:nth-child(1) {
    font-size: ${props => props.large ? 4 : 3}em;
    font-weight: 400;
  }

  div:nth-child(2) {
    padding: .3em 1.2em;
    font-size: 1.2em;
    width: ${props => props.large ? "230px" : "auto"};
  }
`;

const Stat = ({ number, caption, large }) => (
  <StatContainer large={large}>
    <div>{number}</div>
    <div>{caption}</div>
  </StatContainer>
);

const IndexPage = () => (
  <Container>
    <HeroWrapper justify="space-between" align="center">
      <Strapline>
        <span>Drop your laptop.</span>
        <span>Get on your bike.</span>
        <span>Do Good.</span>
      </Strapline>
      <BlockImage />
      <Wheel />
    </HeroWrapper>
    <Mission>
      <Wrapper>
        <MissionContents>
          <h1>Our Mission</h1>
          <p>
            We believe that world change starts with educated children, and you
            can do one amazing thing to help make that happen.
          </p>
          <p>
            TechBikers is a collaboration of tech startup communities around the
            world, transforming the lives of millions of children in developing
            countries by raising money for literacy and gender equality in education.
          </p>
        </MissionContents>
      </Wrapper>
    </Mission>
    <Impact>
      <Stats>
        <Stat number="400+" caption="Cyclists" />
        <Stat number="1600km" caption ="Ridden" />
        <Stat number="$600K" caption ="Raised for Room to Read" large />
      </Stats>
      <Title>
        <h1>Our Impact</h1>
        Affecting real change around the world.
      </Title>
    </Impact>
  </Container>
);

export default IndexPage;
