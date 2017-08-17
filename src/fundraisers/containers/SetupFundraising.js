import React, { PropTypes } from "react";
import { connect } from "react-redux";

import { getCurrentEntity } from "app/selectors";
import { getAuthenticatedUserId } from "auth/selectors";
import { FundraiserShape } from "fundraisers/shapes";
import { CREATE_FUNDRAISER } from "fundraisers/actions";
import { getFundraiserForCurrentRideAndUser } from "fundraisers/selectors";

import SocialAuthButton from "auth/containers/SocialAuthButton";

const mapStateToProps = state => {
  const rideId = getCurrentEntity(state)["id"];
  const userId = getAuthenticatedUserId(state);

  return {
    fundraiser: getFundraiserForCurrentRideAndUser(state),
    // This is the action that we want to fire as the auth callback
    callbackAction: {
      type: CREATE_FUNDRAISER,
      payload: { rideId, userId }
    }
  };
};

const SetupFundraising = ({ fundraiser, callbackAction }) => {
  if (fundraiser) {
    return (
      <a className="btn btn-blue" href={fundraiser.pageUrl}>
        Go to my fundraising page
      </a>
    );
  } else {
    return (
      <SocialAuthButton connection="JustGiving" callbackAction={callbackAction}>
        Create Fundraising Page
      </SocialAuthButton>
    );
  }
};

SetupFundraising.propTypes = {
  fundraiser: FundraiserShape,
  callbackAction: PropTypes.shape({
    type: PropTypes.string,
    payload: PropTypes.shape({
      rideId: PropTypes.number,
      userId: PropTypes.number
    })
  })
};

export default connect(mapStateToProps)(SetupFundraising);
