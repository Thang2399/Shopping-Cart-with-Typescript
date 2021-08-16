import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;

	width: 100%;
	border: 1px solid lightblue;
	border-radius: 20px;
	height: 100%;

	font-family: "Montserrat", sans-serif;

	h3 {
		font-size: 20px;
		font-weight: 700;
	}
	p {
		font-size: 16px;
	}

	button {
		border-radius: 0 0 20px 20px;
	}
	img {
		max-height: 250px;
		object-fit: cover;
		border-radius: 20px 20px 0 0;
	}
	div {
		padding: 1rem;
		height: 100%;

		letter-spacing: 1px;
		line-height: 2;
	}
`;
