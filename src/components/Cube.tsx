import { useBox } from "@react-three/cannon";
import { BufferGeometry, Mesh } from "three";
import { ThreeEvent } from "@react-three/fiber";
import { useStore } from "../hooks/useStore";
import * as textures from "../images/textures";
import { useState } from "react";
interface Props {
  key: string;
  position: [x: number, y: number, z: number];
  texture: string;
}

export const Cube = (props: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const [ref] = useBox(() => ({
    type: "Static",
    position: props.position,
  }));
  const activeTexture =
    textures[(props.texture + "Texture") as keyof typeof textures];

  const addCube = useStore((state: any) => {
    return state.addCube;
  });
  const removeCube = useStore((state: any) => {
    return state.removeCube;
  });
  console.log(activeTexture)
  return (
    <mesh
      onPointerMove={(e) => {
        e.stopPropagation();
        setIsHovered(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setIsHovered(false);
      }}
      ref={ref as React.Ref<Mesh<BufferGeometry>>}
      onClick={(e: any) => {
        e.stopPropagation();
        const clickedFace = Math.floor(e.faceIndex! / 2);
        const { x, y, z } = ref.current!.position;
        if (e.button === 2) {
          removeCube(x, y, z);
          return;
        } else if (clickedFace === 0) {
          addCube(x + 1, y, z);
          return;
        } else if (clickedFace === 1) {
          addCube(x - 1, y, z);
          return;
        } else if (clickedFace === 2) {
          addCube(x, y + 1, z);
          return;
        } else if (clickedFace === 3) {
          addCube(x, y - 1, z);
          return;
        } else if (clickedFace === 4) {
          addCube(x, y, z + 1);
          return;
        } else if (clickedFace === 5) {
          addCube(x, y, z - 1);
          return;
        }
      }}
    >
      <boxGeometry attach="geometry" />
      <meshStandardMaterial
        color={isHovered ? "lightgrey" : "white"}
        transparent
        opacity={props.texture === "glass" ? 0.5 : 1}
        attach="material"
        map={activeTexture}
      />
    </mesh>
  );
};
