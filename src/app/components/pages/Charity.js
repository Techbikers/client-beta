import React from "react";
import styled from "styled-components";

import Title from "components/Title";
import SubTitle from "components/SubTitle";
import Wrapper from "components/layout/Wrapper";

const Container = styled.div`
  width: 100%;
`;

const CharityPage = () => (
  <Container>
    <Wrapper column>
      <Title>Supporting Room to Read</Title>
      <SubTitle>Because world change starts with educated children</SubTitle>

      <p>
        Room to Read believes that World Change Starts with Educated Children. We
        are an international nonprofit transforming the lives of millions of children
        in low-income countries across Africa and Asia by focusing on literacy and
        gender equality in education. Working in collaboration with local communities,
        partner organisations and governments, we develop literacy skills and a
        habit of reading among primary school children, and support girls to
        complete secondary school with the relevant life skills to succeed in
        school and beyond. In 2015 we reached our goal of impacting 10 million
        children. By 2020 we anticipate reaching 15 million children.
      </p>

      <p style={{ padding: "0 80px" }}>
        <iframe width="480" height="360" src="//www.youtube.com/embed/9yMEIqyR3E8?rel=0" frameBorder="0" allowFullScreen />
      </p>

      <blockquote>
        “Literacy unlocks the door to learning throughout life, is essential to development and health, and opens the way for
        democratic participation and active citizenship.”
        <br/>
        – Kofi Annan, former United Nations Secretary-General
      </blockquote>
    </Wrapper>
  </Container>
);

export default CharityPage;
