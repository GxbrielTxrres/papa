import { Image } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useLayoutEffect, useRef } from "react";

export function Photos() {
	const ref = useRef();
	const ref2 = useRef();
	useLayoutEffect(() => {
		ref.current.children.forEach((mesh, index) => {
			mesh.position.set(0, (index * 1.2) / 2, (index * -1.2) / 2);
		});

		ref2.current.children.forEach((mesh, index) => {
			mesh.position.set(0, (index * 1.2) / 2, (index * -1.2) / 2);
		});
	}, []);

	useFrame((state) => {
		ref.current.children.forEach((child, index) => {
			child.rotation.y =
				index === 0
					? state.clock.elapsedTime
					: state.clock.elapsedTime * index * 0.5;
		});

		ref2.current.children.forEach((child, index) => {
			child.rotation.y =
				index === 0
					? -state.clock.elapsedTime
					: -state.clock.elapsedTime * index * 0.5;
		});
	});
	return (
		<>
			<group
				scale={3}
				ref={ref}
				rotation-x={Math.PI / 4}
				rotation-y={Math.PI / 2}
				rotation-z={-Math.PI / 2}
				position={[8, 20, -0.5]}
			>
				<Image url="./images/6.jpg" />
				<Image url="./images/4.jpg" />
				<Image url="./images/5.jpg" />
			</group>

			<group
				scale={3}
				ref={ref2}
				rotation-x={Math.PI / 4}
				position={[8, 14, -3]}
			>
				<Image zoom={0.8} url="./images/1.jpg" />
				<Image zoom={0.8} url="./images/2.jpg" />
				<Image url="./images/3.jpg" />
			</group>
		</>
	);
}
