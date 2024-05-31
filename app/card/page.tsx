'use client';
import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
const backgroundWater = '/assets/backgroundWater.png';
const expLogo = '/assets/exp.png';
const solidityLogo = '/assets/solidity.svg';
const swordLogo = '/assets/sword.svg';
const goldLogo = '/assets/gold.png';

const StyledCard = styled.div`
	padding: 15px 15px 45px 15px;
	border: 1px solid #2f2b24;
	border-radius: 5px;
	width: 508px;
	cursor: pointer;
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
`;
const QuestValue = styled.div`
	font-family: Cinzel;
	font-size: 14px;
	font-weight: 700;
	line-height: 16px;
	letter-spacing: 0.02em;
	text-align: left;
`;

const SolidityText = styled.div`
	font-family: Inter;
	font-size: 14px;
	font-weight: 400;
	line-height: 19px;
	text-align: center;
	color: #cccccc;
`;

const BuildCtfDiv = styled.div`
	border: 1px solid gray;
	padding: 5px;
	border-radius: 8px;
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
	width: 476px;
	height: 86px;
	@media (max-width: 500px) {
		width: 100%; /* Adjust the width for mobile devices */
	}
`;

export default function Card({ data }) {
	const router = useRouter();
	// console.log(data.type.data.attributes.technicalID, 'in card component...........');
	// console.log(data.tree.data.attributes.technicalID, 'in tree component...........');
	console.log(data.difficulty, 'in tree component...........');
	const swordImages = Array.from({ length: data.difficulty }, (_, index) => (
		<img key={index} style={{ width: '12px', height: '12px' }} src={swordLogo} alt='' />
	));
	// return {
	//   title: attributes.title,
	//   difficulty: attributes.difficulty,
	//   description: attributes.description,
	//   slug: attributes.slug,
	//   cover: attributes.cover?.data?.attributes?.url,
	//   language: {
	//     label: attributes.tree.data.attributes.label,
	//     id: attributes.tree.data.attributes.technicalID
	//   },
	//   type: {
	//     label: attributes.type.data.attributes.label,
	//     id: attributes.type.data.attributes.technicalID
	//   },
	//   rewards: {
	//     expPoints: attributes.reward.data.attributes.expPoints,
	//     gold: attributes.reward.data.attributes.gold
	//   }
	// };
	return (
		<>
			<StyledCard onClick={() => router.push(`/quest/${data.slug}`)}>
				<StyledImage
					src={data.cover?.data?.attributes?.url ? data.cover?.data?.attributes?.url : backgroundWater}
					alt=''
				/>
				<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '5px' }}>
					<QuestName>{data.title}</QuestName>
					<div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
						<img src={expLogo} alt='' />
						<QuestValue>{data.reward.data.attributes.expPoints}</QuestValue>
					</div>
				</div>
				<QuestFlex>
					<SolidityFlex>
						<SolidityCon>
							<img src={solidityLogo} alt='' />
							{/* <i style={{ color: 'gray' }} className='devicon-solidity-plain'></i> */}
							<SolidityText>{data.tree.data.attributes.label}</SolidityText>
						</SolidityCon>
						<SwordCon>
							{swordImages.map((image, index) => (
								<React.Fragment key={index}>{image}</React.Fragment>
							))}
						
						</SwordCon>
						<BuildCtfDiv>
							<SolidityText>{data.type.data.attributes.label}</SolidityText>
						</BuildCtfDiv>
						<BuildCtfDiv>
							<SolidityText>CTF</SolidityText>
						</BuildCtfDiv>
					</SolidityFlex>
					<div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
						<img src={goldLogo} alt='' />
						<QuestValue>{data.reward.data.attributes.gold}</QuestValue>
					</div>
				</QuestFlex>
			</StyledCard>
		</>
	);
}
