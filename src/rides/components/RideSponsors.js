import React, { PropTypes } from "react";
import styled from "styled-components";

import { SponsorShape } from "sponsors/shapes";

import Sponsor from "sponsors/components/Sponsor";

const Wrapper = styled.section`
  border-top: 1px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;
  background: #f5f5f5;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
`;

const Group = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  
`

const Header = styled.h2`
  text-align: center;
  margin: 0;
  margin-top: 20px;
`;

const RideSponsors = ({ gold, silver, bronze, bottle, kit, inkind, homecoming }) => (
  <Wrapper>
    <Content>
      {gold &&
        <Group>
          <Header>Our headline sponsor</Header>
          {gold.map(sponsor =>
            <Sponsor key={sponsor.id} {...sponsor} />
          )}
        </Group>}

      {silver &&
        <Group>
          <Header>Silver sponsors</Header>
          {silver.map(sponsor =>
            <Sponsor key={sponsor.id} {...sponsor} />
          )}
        </Group>}

      {bronze &&
        <Group>
          <Header>Bronze sponsors</Header>
          {bronze.map(sponsor =>
            <Sponsor key={sponsor.id} {...sponsor} />
          )}
        </Group>}

      <Group>
        {bottle &&
          <Sponsors sponsors={bottle} label="Bottle sponsors"/>}

        {homecoming &&
          <Sponsors sponsors={homecoming} label="Homecoming party sponsors"/>}

        {kit &&
          <Sponsors sponsors={kit} label="Kit sponsors"/>}
      </Group>

      {inkind &&
        <Sponsors sponsors={inkind} label="In kind sponsors"/>}
    </Content>
  </Wrapper>
);

RideSponsors.propTypes = {
  gold: PropTypes.arrayOf(SponsorShape),
  silver: PropTypes.arrayOf(SponsorShape),
  bronze: PropTypes.arrayOf(SponsorShape),
  bottle: PropTypes.arrayOf(SponsorShape),
  kit: PropTypes.arrayOf(SponsorShape),
  inkind: PropTypes.arrayOf(SponsorShape),
  homecoming: PropTypes.arrayOf(SponsorShape)
};

export default RideSponsors;
