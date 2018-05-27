import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchAllRides } from 'rides/actions';
import { getUpcomingRides, getPastRides } from 'rides/selectors';
import { RideShape } from 'rides/shapes';

import RideCard from 'rides/components/RideCard';
import RidesList from 'rides/components/RidesList';
import Spinner from 'components/Spinner';
import Title from 'components/Title';
import Wrapper from 'components/layout/Wrapper';

const Container = styled.div`
  width: 100%;
`;

const mapStateToProps = state => ({
  upcoming: getUpcomingRides(state),
  past: getPastRides(state)
});

const mapDispatchToProps = {
  fetchAllRides
};

class Rides extends Component {
  static propTypes = {
    upcoming: PropTypes.arrayOf(RideShape),
    past: PropTypes.arrayOf(RideShape),
    fetchAllRides: PropTypes.func.isRequired
  };

  static defaultProps = {
    upcoming: [],
    past: []
  };

  componentWillMount() {
    this.props.fetchAllRides();
  }

  render() {
    const { upcoming, past } = this.props;

    if (upcoming.length === 0 || past.length === 0) {
      return <Spinner />;
    }

    return (
      <Container>
        <Wrapper column>
          <Title>Upcoming & Current Rides</Title>
          <RidesList rides={upcoming} />

          <Title>Past Rides</Title>
          <RidesList rides={past} />
        </Wrapper>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rides);
