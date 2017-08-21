import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.column ? "column" : "row"};
  justify-content: ${props => props.justify || "flex-start"};
  align-items: ${props => props.align || "stretch"};
  width: 100%;
  max-width: 1120px;

  padding: 1rem;
  margin: 0 auto;
`;

export default Wrapper;
