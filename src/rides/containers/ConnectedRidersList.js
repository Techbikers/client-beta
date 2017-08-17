import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { RideShape } from "rides/shapes";
import { UserShape } from "users/shapes";
import { getCurrentRide } from "rides/selectors";
import { getUsersOnCurrentRide } from "users/selectors";
import { fetchUsersByRide } from "users/actions";

import Spinner from "components/Spinner";
import RidersList from "rides/components/RidersList";

const RidersWrapper = styled.section`
  border-top: 1px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;
  background: #f5f5f5;
`;

const mapStateToProps = state => ({
  ride: getCurrentRide(state),
  riders: getUsersOnCurrentRide(state)
});

const mapDispatchToProps = {
  fetchUsersByRide
};

class ConnectedRidersList extends Component {
  static propTypes = {
    ride: RideShape,
    riders: PropTypes.arrayOf(UserShape),
    fetchUsersByRide: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.fetchUsersByRide(this.props.ride.id);
  }

  render() {
    const { riders } = this.props;

    return (
      <RidersWrapper>
        <div className="content">
          <h2>The Riders</h2>
          {riders.length === 0 ?
            <Spinner spacing="20px" />
            :
            <RidersList riders={riders} />
          }
        </div>
      </RidersWrapper>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedRidersList);
