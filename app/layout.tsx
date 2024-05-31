import { ClientProviders } from './providers';
import StyledComponentsRegistry from './registry';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import queryClient from './queryClient';

export default function RootLayout({
	// Layouts must accept a children prop.
	// This will be populated with nested layouts or pages
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<head>
				<link rel='manifest' href='/manifest.json' crossOrigin='use-credentials' />

				<link
					rel='stylesheet'
					type='text/css'
					href='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css'
				/>
				<link href='https://fonts.googleapis.com/css?family=Cinzel' rel='stylesheet' />
				<link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet' />
				<meta name='application-name' content='Node Guardians' />
				<meta name='theme-color' content='#151515' />
			</head>

			<body>
				<QueryClientProvider client={queryClient}>
					<StyledComponentsRegistry>
						<ClientProviders>{children}</ClientProviders>
					</StyledComponentsRegistry>
					<ReactQueryDevtools initialIsOpen={false} />
				</QueryClientProvider>
			</body>
		</html>
	);
}
