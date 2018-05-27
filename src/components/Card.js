import styled from 'styled-components';
import { rgba } from 'polished';

import { grey5 } from 'utils/style-variables';

const Card = styled.div`
  box-shadow: 0 0 20px ${rgba(grey5, 0.4)};
`;

export default Card;
