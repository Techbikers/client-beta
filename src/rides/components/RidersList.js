import React, { PropTypes } from "react";
import styled from "styled-components";

import { UserShape } from "users/shapes";

import RiderCard from "users/components/RiderCard";

const List = styled.ul`
  margin: 20px 0;
  padding: 0;
  list-style: none;
  text-align: center;
`;

const RidersList = ({ riders }) => (
  <List>
    {riders.map(rider =>
      <RiderCard key={rider.id} {...rider} />
    )}
  </List>
);

RidersList.propTypes = {
  riders: PropTypes.arrayOf(UserShape)
};

export default RidersList;
