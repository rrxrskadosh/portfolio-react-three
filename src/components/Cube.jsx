import React, { useRef } from "react";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";

const Cube = () => {
  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial metalness={0.5} clearcoat={1} >
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[2, 2, 2]} />
          <color attach="background" args={["#00CBF9"]} />
          <Text color={"#D65732"}>Hello</Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube;