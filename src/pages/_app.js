import "@/styles/globals.css";

import { HappyBd } from "components/HappyBd";
import { Youtube } from "components/Youtube";
import { Photos } from "components/Photos";

import { Center, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
export default function App({ Component, pageProps }) {
	return (
		<div className="webgl">
			<Canvas
				camera={{
					position: [0, 10, 0],
					rotation: [0, -Math.PI / 4, 0],
				}}
			>
				<HappyBd />
				<Youtube />

				<Photos />

				<EffectComposer>
					<Bloom />
				</EffectComposer>

				<OrbitControls target={[10, 18, -2]} />
				<Environment
					preset="night"
					background
					ground={{ scale: 100, radius: 100, height: 10 }}
				/>
			</Canvas>
			<Component {...pageProps} />
		</div>
	);
}
