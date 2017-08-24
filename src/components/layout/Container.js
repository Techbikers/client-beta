import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.column ? "column" : "row"};
  flex-wrap: wrap;
  justify-content: ${props => props.justify || "flex-start"};
  align-items: ${props => props.align || "stretch"};
  width: 100%;
`;

export default Container;
