import Link from 'next/link';

export default function Page() {
	return (
		<main>
			<section className="hero hero-full">
				<div className="hero-media">
					<div className="hero-overlay">
						<div className="container">
							<div className="hero-copy">
								<h1>SmartMove Demo</h1>
								<p>Interactive features showcasing video overlays and scroll-driven animations.</p>
								<div className="hero-ctas">
									<Link href="/video" className="btn btn-primary">Video Overlay Demo</Link>
									<Link href="/frames" className="btn btn-ghost">Frames on Scroll</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
} 