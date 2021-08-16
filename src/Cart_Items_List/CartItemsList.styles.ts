import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	font-family: inherit;
	border-bottom: 1px solid lightblue;
	padding-bottom: 20px;
	div {
		flex: 1;
	}
	.information,
	.buttons {
		display: flex;
		justify-content: space-between;
	}
	.buttons {
		background-color: rgb(226, 224, 224, 0.3);
		border-radius: 7px;
		font-weight: 700;
		font-size: 14px;
	}
	img {
		max-width: 80px;
		object-fit: cover;
		margin-left: 40px;
	}
`;
