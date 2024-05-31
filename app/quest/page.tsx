'use client';
import styled from 'styled-components';
import Navbar from '../navbar/page';
import Card from '../card/page';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { questsData } from '@/data/quests';

const fetchQuests = async () => {
	const response = await axios.get('/api/quests');
	console.log(response, 'response..........................');
	return response.data;
};

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
	width: 90%;
	margin: 0 auto;
	color: white;
	margin-top: 20px;
	padding: 15px;
	border: 1px solid #2f2b24;
	background: black;
`;

export default function Quest() {
	// const { data, error, isLoading } = useQuery({
	// 	queryKey: ['quests'],
	// 	queryFn: fetchQuests
	// });

	// if (isLoading) return <div>Loading...</div>;
	// if (error) return <div>An error occurred: {error.message}</div>;
	const { data } = questsData;
	console.log(data, 'testtttttttttttttttttttt');

	return (
		<>
			<StyledDiv>
				<Navbar />
				<StyledCardCon>
					{data.map((item, index) => (
						<Card key={index} data={item.attributes} />
					))}
				</StyledCardCon>
			</StyledDiv>
		</>
	);
}
