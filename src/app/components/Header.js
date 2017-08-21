import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";
import styled from "styled-components";

import { textColor } from "utils/style-variables";

import LogoURL from "assets/logo@2x.png";
import Wrapper from "app/components/Wrapper";

const Container = styled.header`
  width: 100%;
`;

const Navigation = styled.nav`
  display: flex;
  flex: 1 0 auto;
  justify-content: flex-end;
  font-family: 'Raleway', sans-serif;
`;

const NavLink = styled(Link)`
  margin-right: 1em;
  color: ${textColor};
  text-decoration: none;
  text-transform: uppercase;
  font-size: .875em;
  font-weight: bold;
  cursor: pointer;
  transition: color .1s linear;

  &:hover {
    text-decoration: none;
    ${props => (props.color ? `color: ${props.color}` : "")}
  }
`;

NavLink.propTypes = {
  color: PropTypes.string
};

const BlogLink = NavLink.withComponent("a");

const Logo = styled(Link)`
  display: block;
`;

const Header = () => (
  <Container>
    <Wrapper>
      <Logo to="/">
        <img src={LogoURL} alt="TechBikers" width="125" />
      </Logo>
      <Navigation role="navigation">
        <NavLink to="/rides" color="#eb1c24">
          Rides
        </NavLink>

        <NavLink to="/about" color="#4494c7">
          About
        </NavLink>

        <NavLink to="/the_charity" color="#76c15a">
          Charity
        </NavLink>

        <BlogLink href="http://blog.techbikers.com/">
          Blog
        </BlogLink>

        <NavLink to="/donate">
          Donate
        </NavLink>
      </Navigation>
    </Wrapper>
  </Container>
);

export default Header;
