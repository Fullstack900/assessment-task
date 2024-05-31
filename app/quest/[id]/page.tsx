'use client';
import AirdropCard from '@/app/airdropCard/page';
import Navbar from '@/app/navbar/page';
import styled from 'styled-components';


const backGroundPhoto = '/assets/background.png';

const StyledDiv = styled.div`
	background-image: url(${backGroundPhoto});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	// width: 100px;
	height: 100%;
	min-height: 100vh;
`;
const StyledCardCon = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	gap: 10px;
	width: 750px;
	margin: 0 auto;
	color: white;
	margin-top: 40px;
	padding: 5px;
	border: 1px solid #2f2b24;
	background: black;

	@media (max-width: 1400px) {
		width: 600px; /* Adjust the width for mobile devices */
		padding: 10px; /* Adjust the padding for mobile devices */
	}

	@media (max-width: 500px) {
		width: 90%; /* Adjust the width for mobile devices */
		padding: 10px; /* Adjust the padding for mobile devices */
	}
`;
export default function QuestSlug() {
	return (
		<>
			<StyledDiv>
				<Navbar />
				<StyledCardCon>
					<AirdropCard />
				</StyledCardCon>
			</StyledDiv>
		</>
	);
}
