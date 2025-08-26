import './globals.css';

export const metadata = {
	title: 'SmartMove — Demo',
	description: 'Video overlay and frames-on-scroll demo',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
} 