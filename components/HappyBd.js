import { Float, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Color, MeshPhongMaterial } from "three";
export function HappyBd() {
	const ref = useRef();
	const material = new MeshPhongMaterial({
		toneMapped: false,
		color: new Color(10, 0, 0),
		emissive: new Color(10, 0, 0),
	});
	useFrame((state) => {
		ref.current.scale.set(
			Math.abs(Math.sin(state.clock.elapsedTime * 0.25) * 1.2),
			Math.abs(Math.sin(state.clock.elapsedTime * 0.25) * 1.2),
			Math.abs(Math.sin(state.clock.elapsedTime * 0.25) * 1.2),
		);
	});
	return (
		<Text
			material={material}
			ref={ref}
			color="yellow"
			fontSize={1}
			rotation-y={-Math.PI / 4}
			position={[10, 18, -1]}
		>
			Happy Birthday Papa
			<ambientLight />
		</Text>
	);
}
