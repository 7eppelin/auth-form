import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
		font-family: 'Roboto', sans-serif;
		-webkit-font-smoothing: antialiased;
  		-moz-osx-font-smoothing: grayscale;
	}

	*,
	*::after,
	*::before {
		box-sizing: border-box;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		margin: 0;
		padding: 0;
	}

	li {
		list-style: none;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	button {
		border: none;
		background: transparent;
		padding: 0;
		cursor: pointer;
	}

	input {
		border: none;
		outline: none;
	}

	a {
		text-decoration: none;
	}
`;
