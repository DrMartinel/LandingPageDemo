'use client';

export default function HeroVideo(){
	return (
		<section className="hero hero-full" id="feature-video">
			<div className="hero-media">
				<video className="video" src="/assets/Intro_Video_Generation_Plan.mp4" autoPlay muted loop playsInline />
				<div className="hero-overlay">
					<div className="container">
						<div className="hero-copy">
							<h1>Videos with overlay</h1>
							<p>Autoplay, muted, looped background video with readable text overlay.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
} 