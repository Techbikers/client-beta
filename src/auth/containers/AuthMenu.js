import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import styled from 'styled-components';

import { logout } from 'auth/actions';
import { getCurrentPathname } from 'app/selectors';
import { getAuthenticatedUserId } from 'auth/selectors';

const mapStateToProps = state => {
  const { state: authState } = state.auth;
  const isAuthenticated = authState === 'authenticated';
  const pathname = getCurrentPathname(state);
  const userId = getAuthenticatedUserId(state);

  return { isAuthenticated, pathname, userId };
};

const mapDispatchToProps = {
  logout
};

const LogOutLink = styled.a`
  margin-right: 20px;
  cursor: pointer;

  &,
  &:hover {
    color: #fdec18;
  }
`;

const StyledLink = styled(Link)`
  &,
  &:hover {
    color: #fdec18;
  }
`;

class AuthMenu extends Component {
  static propTypes = {
    pathname: PropTypes.string,
    isAuthenticated: PropTypes.bool,
    logout: PropTypes.func.isRequired,
    userId: PropTypes.number
  };

  render() {
    const { isAuthenticated, pathname, userId } = this.props;

    if (isAuthenticated) {
      return (
        <div className="span2">
          <LogOutLink onClick={() => this.props.logout()}>Log out</LogOutLink>
          <StyledLink to={`/riders/${userId}`}>Profile</StyledLink>
        </div>
      );
    } else {
      return (
        <StyledLink
          to={{
            pathname: '/login',
            state: { modal: true, returnTo: pathname }
          }}
        >
          Login to Techbikers
        </StyledLink>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthMenu);
