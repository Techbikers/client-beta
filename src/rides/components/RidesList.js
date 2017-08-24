import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { RideShape } from "rides/shapes";
import { tablet, desktop } from "utils/breakpoints";

import Container from "components/layout/Container";
import RideCard from "rides/components/RideCard";

const Grid = Container.extend`
  width: auto;
  margin-top: 1em;
  margin-right: -1em;
`

const Box = styled.div`
  flex: 1 0 auto;
  width: 100%;
  padding: 0 1em 1em 0;

  ${tablet`max-width: 50%;`}
  ${desktop`max-width: 33.33%;`}
`;

const RidesList = ({ rides }) => (
  <Grid>
    {rides.map(ride =>
      <Box>
        <RideCard key={ride.id} {...ride} />
      </Box>
    )}
  </Grid>
);

RidesList.propTypes = {
  rides: PropTypes.arrayOf(RideShape)
};

export default RidesList;
