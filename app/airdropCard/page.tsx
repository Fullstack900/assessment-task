'use client';
import React from 'react';
import styled from 'styled-components';
import { questsData } from '@/data/quests';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useState } from 'react';
const backgroundWater = '/assets/backgroundWater.png';
const expLogo = '/assets/exp.png';
const solidityLogo = '/assets/solidity.svg';
const swordLogo = '/assets/sword.svg';
const goldLogo = '/assets/gold.png';

const StyledCard = styled.div`
	padding: 15px 15px 20px 15px;
	border: 1px solid #2f2b24;
	border-radius: 5px;
	width: 730px;
	@media (max-width: 1400px) {
		width: 600px; /* Adjust the width for mobile devices */
		padding: 10px; /* Adjust the padding for mobile devices */
	}
	@media (max-width: 500px) {
		width: 100%; /* Adjust the width for mobile devices */
		padding: 10px; /* Adjust the padding for mobile devices */
	}
`;
const QuestName = styled.div`
	font-family: Cinzel;
	font-size: 18px;
	font-weight: 700;
	line-height: 24px;
	letter-spacing: 0.01em;
	margin-top: 5px;
`;

const SolidityText = styled.div`
	font-family: Inter;
	font-size: 14px;
	font-weight: 400;
	line-height: 19px;
	text-align: center;
	color: #cccccc;
`;

const SwordCon = styled.div`
	border: 1px solid gray;
	padding: 9px 10px 9px 7px;
	border-radius: 8px;
	display: flex;
	gap: 2px;
	align-items: center;
	@media (max-width: 500px) {
		display: none;
	}
`;

const SolidityCon = styled.div`
	border: 1px solid gray;
	padding: 5px;
	border-radius: 8px;
	display: flex;
	gap: 5px;
	align-items: center;
`;

const QuestFlex = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	margin-top: 10px;
`;

const SolidityFlex = styled.div`
	display: flex;

	align-items: center;
	flex-direction: row;
	margin-top: 5px;
	gap: 5px;
`;

const StyledImage = styled.img`
	width: 700px;
	height: 175px;
	@media (max-width: 1400px) {
		width: 550px; /* Adjust the width for mobile devices */
	}
	@media (max-width: 500px) {
		width: 100%; /* Adjust the width for mobile devices */
	}
`;
const GoldText = styled.div`
	font-family: Cinzel;
	font-size: 14px;
	font-weight: 700;
	line-height: 16px;
	letter-spacing: 0.04em;
	text-align: left;
`;
const SmallText = styled.p`
	font-family: 'Inter', sans-serif;
	font-size: 14px;
	font-weight: 400;
	line-height: 19px;
	text-align: left;
	margin-top: 10px;
	color: #7c7c7c;
`;

const BackButton = styled.p`
	font-family: 'Cinzel', serif;
	font-size: 16px;
	font-weight: 700;
	line-height: 18px;
	letter-spacing: 0.01em;
	color: #b69e72;
	border: 1px solid gray;
	padding: 10px 30px 10px 30px;
	border-radius: 7px;
	cursor: pointer;
`;

const AirdropButton = styled.p`
	font-family: 'Cinzel', serif;
	font-size: 16px;
	font-weight: 700;
	line-height: 18px;
	letter-spacing: 0.01em;
	background-color: #b69e72;
	color: #080808;
	// border: 1px solid gray;
	padding: 10px 30px 10px 30px;
	border-radius: 7px;
	cursor: pointer;
`;

export default function AirdropCard() {
	const router = useRouter();
	const pathname = usePathname().split('/')[2];
	const { data } = questsData;
	const filterData = data.filter((item) => {
		return item.attributes.slug == pathname;
	});
	console.log(filterData);

	const swordImages = Array.from({ length: filterData[0]?.attributes?.difficulty }, (_, index) => (
		<img key={index} style={{ width: '12px', height: '12px' }} src={swordLogo} alt='' />
	));
	const [gold, setGold] = useState(filterData[0]?.attributes?.reward?.data?.attributes?.gold || 0);
	const [expPoints, setExpPoints] = useState(filterData[0]?.attributes?.reward?.data?.attributes?.expPoints || 0);

	const handleAirdrop = () => {
		// Increase gold and expPoints values
		setGold((prevGold) => prevGold + 20); // Increase gold by 100
		setExpPoints((prevExpPoints) => prevExpPoints + 100); // Increase expPoints by 50
	};

	return (
		<>
			<StyledCard>
				<StyledImage src={filterData[0]?.attributes?.cover?.data?.attributes.url} alt='' />

				<QuestName>{filterData[0]?.attributes?.title}</QuestName>

				<QuestFlex>
					<SolidityFlex>
						<SolidityCon>
							<img src={solidityLogo} alt='' />

							<SolidityText>{filterData[0]?.attributes?.tree?.data?.attributes.label}</SolidityText>
						</SolidityCon>
						<SwordCon>
							{swordImages.map((image, index) => (
								<React.Fragment key={index}>{image}</React.Fragment>
							))}
						</SwordCon>
					</SolidityFlex>

					<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
						<img src={goldLogo} alt='' />
						<GoldText>{gold}</GoldText>
						<img src={expLogo} alt='' />
						<GoldText>{expPoints} </GoldText>
					</div>
				</QuestFlex>
				<SmallText>{filterData[0]?.attributes?.description}</SmallText>
				<div style={{ marginTop: '60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
					<BackButton onClick={() => router.push('/quest')}>GO BACK</BackButton>
					<AirdropButton onClick={handleAirdrop}>Airdrop rewards to The Guardian</AirdropButton>
				</div>
			</StyledCard>
		</>
	);
}
