import './globals.css';
import Header from './components/Header';

export const metadata = {
	title: 'SmartMove — Demo',
	description: 'Video overlay and frames-on-scroll demo',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Header />
				{children}
			</body>
		</html>
	);
} 