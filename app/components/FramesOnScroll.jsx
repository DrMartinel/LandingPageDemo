'use client';
import { useEffect, useRef, useState } from 'react';

const FRAMES_DIR = '/assets/videoFrame';
const TOTAL_FRAMES = 80;

function padFrameNumber(i){
	return String(i).padStart(3,'0');
}

export default function FramesOnScroll(){
	const canvasRef = useRef(null);
	const imagesRef = useRef([]);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		const images = [];
		let loadedCount = 0;
		for(let i=1;i<=TOTAL_FRAMES;i++){
			const img = new Image();
			img.src = `${FRAMES_DIR}/${padFrameNumber(i)}.png`;
			img.onload = () => { loadedCount++; if(loadedCount===TOTAL_FRAMES) setLoaded(true); };
			images.push(img);
		}
		imagesRef.current = images;
	},[]);

	useEffect(() => {
		if(!loaded) return;
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');

		const resize = () => {
			const ratio = window.devicePixelRatio || 1;
			canvas.width = canvas.clientWidth * ratio;
			canvas.height = canvas.clientHeight * ratio;
			context.setTransform(ratio,0,0,ratio,0,0);
		};

		const render = () => {
			const section = document.getElementById('feature-frames');
			const rect = section.getBoundingClientRect();
			const total = rect.height - window.innerHeight;
			const scrolled = Math.min(Math.max(-rect.top, 0), total);
			const progress = total>0 ? scrolled/total : 0;
			const frameIndex = Math.min(TOTAL_FRAMES-1, Math.floor(progress*(TOTAL_FRAMES-1)));
			
			const image = imagesRef.current[frameIndex];
			if(!image) return;
			const { width: cw, height: ch } = canvas.getBoundingClientRect();
			context.clearRect(0,0,cw,ch);
			const iw=image.width, ih=image.height;
			const scale = Math.max(cw/iw, ch/ih);
			const dw = iw*scale, dh = ih*scale;
			const dx = (cw-dw)/2, dy=(ch-dh)/2;
			context.drawImage(image, dx, dy, dw, dh);
		};

		const onScroll = () => requestAnimationFrame(render);
		const onResize = () => { resize(); render(); };
		
		resize();
		render();
		window.addEventListener('scroll', onScroll);
		window.addEventListener('resize', onResize);
		return () => { 
			window.removeEventListener('scroll', onScroll); 
			window.removeEventListener('resize', onResize); 
		};
	},[loaded]);

	return (
		<section className="frames-section" id="feature-frames">
			<div className="sticky">
				<canvas ref={canvasRef} className="frames-canvas"></canvas>
			</div>
		</section>
	);
} 