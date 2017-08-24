import React, { PropTypes } from "react";
import { Link } from "react-router";
import styled from "styled-components";

import { purplePastel } from "utils/style-variables";

import Timestamp from "components/Timestamp";

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 8em;
  margin: 0;
  padding: 1em;
  color: white;
  border: none;
  background: ${purplePastel};
  text-decoration: none;

  &:hover {

  }
`;

const Name = styled.h3`
  margin: 0;
`;

const Time = styled.h4`
  margin: 0;
  font-style: italic;
`;

const RideCard = ({ id, name, slug, startDate, endDate }) => (
  <Card to={`/rides/${id}/${slug}`}>
    <Name>{name}</Name>
    <Time>
      <Timestamp value={startDate} format="D MMM" />
      {" "}
      to
      {" "}
      <Timestamp value={endDate} format="D MMM YYYY" />
    </Time>
  </Card>
);

RideCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  slug: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string
};

export default RideCard;
