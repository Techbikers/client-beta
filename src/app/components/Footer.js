import React from "react";
import styled from "styled-components";

import { grey6 } from "utils/style-variables";

import AuthMenu from "auth/containers/AuthMenu";
import Wrapper from "components/layout/Wrapper";

const Container = styled.footer`
  padding: 4em 0;
  color: white;
  background: ${grey6};
`;

const Link = styled.a`
  &, &:hover {
    color: #FDEC18;
  }
`;

const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SocialLinks = styled.p`
  text-align: center;
`;

const Footer = () => (
  <Container>
    <Wrapper>
      <FirstRow>
        <div>
          <Link href="mailto:hello@techbikers.com">hello@techbikers.com</Link>
          <br />
          4-5 Bonhill Street<br />London<br />EC2A 4BX
        </div>
        <AuthMenu />
      </FirstRow>

      <SocialLinks>
        <Link href="http://www.facebook.com/techbikers" target="_blank">
          Facebook
        </Link>
        {" "}
        ·
        {" "}
        <Link href="http://twitter.com/techbikers" target="_blank">
          Twitter
        </Link>
      </SocialLinks>
    </Wrapper>
  </Container>
);

export default Footer;
