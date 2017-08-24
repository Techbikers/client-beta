import { css } from 'styled-components';

export const tablet = (...args) => css`
	@media (min-width: 768px) {
		${css(...args)}
	}
`;

export const desktop = (...args) => css`
	@media (min-width: 1200px) {
		${css(...args)}
	}
`;
