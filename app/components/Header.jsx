'use client';
import Link from 'next/link';

export default function Header() {
	return (
		<header className="site-header">
			<div className="container header-inner">
				<Link href="/" className="logo">
					<img src="/assets/smartmoveLogo.png" alt="SmartMove logo" />
				</Link>
				<nav className="nav">
					<Link href="/video">Video Overlay</Link>
					<Link href="/frames" className="btn btn-ghost">Frames on Scroll</Link>
				</nav>
			</div>
		</header>
	);
} 