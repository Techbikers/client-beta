import React from "react";
import styled from "styled-components";

import HeroUrl from "assets/hero.jpg";

import Title from "components/Title";
import SubTitle from "components/SubTitle";
import Wrapper from "components/layout/Wrapper";

const Container = styled.div`
  width: 100%;
`;

const Banner = styled.div`
  width: 100%;
  height: 360px;
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
`;

const AboutPage = () => (
  <Container>
    <Wrapper column>
      <Title>Our Story</Title>
      <SubTitle>From startup to movement</SubTitle>

      <Banner src={HeroUrl} />

      <p>
        Techbikers was founded in 2012 by Eze Vidra and Mark Jennings in London.
        Eze wanted a means for the tech community to put down their laptops and
        pick up a bike to support charity, network, share ideas and spread the
        startup vibe. He wanted to bring together a mix of people to do one
        amazing thing.
      </p>

      <p>
        What started as a hastily organised, typically ‘startuppy’ MVP saw the
        first 40 bikers cycle 300km from Paris to London. What it became is a
        4-month programme of volunteer-led training rides, group meetings,
        personal fundraising and support that is shared on social media and in
        the press, involving cities all across Europe.
      </p>

      <p>
        We apply the startup principles of agility, hard work and great fun to
        create a unique, effective and transparent organisation powered by
        volunteers and sponsors.
      </p>

      <p>
        We started this to raise money for charity, but it is really so much
        more. Friendships have been formed, founders have met and raised through
        the rides, and riders of all abilities have fallen in love with cycling
        all over again. Whatever the story, every Techbiker has their own
        special tale to tell.
      </p>

      <p>
        Now all these years on, with thousands of kilometers cycled and hundreds
        of thousands of pounds raised for Room to Read, we can feel like it’s
        been a success – but like all startups, we reckon we’re not even in
        second gear yet. Join or sponsor a Techbikers ride to help the world,
        and yourself.
      </p>

      <h1>The Rides</h1>
      <p>
        “When you do a practice ride and you do 50km you feel like ‘50km, wow
        that was so long’. And then on Techbikers you do 50km before lunch”
        –Eze Vidra, Founder, Techbikers
      </p>

      <p>
        At its core, Techbikers is a multi-day day cycle over several hundred
        kilometers point-to-point, with up to 70 mixed ability riders – a 
        challenging but safe experience.
      </p>

      <p>
        To ensure that the maximum amount of money reaches the charity, we
        cover our ride costs with sponsorship and personal contributions.
        This presents some exciting and tangible reasons for sponsors to get
        involved. Contact Eze if you’d like to know more about these sponsorship
        opportunities.
      </p>
    </Wrapper>
  </Container>
);

export default AboutPage;
