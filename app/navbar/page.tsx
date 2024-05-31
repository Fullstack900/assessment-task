import styled from 'styled-components';
const navLogo = '/favicon.svg';
const avatarLogo = '/assets/avatar.png';
const goldLogo = '/assets/gold.png';
const expLogo = '/assets/exp.png';

const GoldText = styled.div`
	font-family: Cinzel;
	font-size: 14px;
	font-weight: 700;
	line-height: 16px;
	letter-spacing: 0.04em;
	text-align: left;
`;

export default function Navbar() {
	return (
		<>
			<div
				style={{
					padding: '10px 50px',
					color: '#CCCCCC',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center'
				}}
			>
				<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
					<p>N</p>
					<img src={navLogo} alt='' style={{ width: '24px', height: '35px', color: '#CCCCCC', fill: '#CCCCCC' }} />
					<p>G</p>
				</div>
				<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
					<img src={goldLogo} alt='' />
					<GoldText>12 023</GoldText>
					<img src={expLogo} alt='' />
					<GoldText>132 586 </GoldText>
					<img src={avatarLogo} alt='' />
				</div>
			</div>
		</>
	);
}
