import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
export function Youtube() {
	const ref = useRef();

	return (
		<mesh ref={ref}>
			<Html
				scale={0.17}
				position={[3.8, 11, -0.4]}
				rotation-y={Math.PI / 4}
				occlude="blending"
				transform
			>
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/mwgZalAFNhM"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				></iframe>
			</Html>
		</mesh>
	);
}
