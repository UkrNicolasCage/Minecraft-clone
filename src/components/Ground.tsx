import { usePlane } from "@react-three/cannon";
import { BufferGeometry, Mesh, RepeatWrapping } from "three";

import { useStore } from "../hooks/useStore";
import { groundTexture } from "../images/textures";

export const Ground = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.5, 0],
  }));

  const addCube = useStore((state: any) => {
    return state.addCube;
  });

  groundTexture.wrapS = RepeatWrapping;
  groundTexture.wrapT = RepeatWrapping;
  groundTexture.repeat.set(100, 100);

  return (
    <mesh
      ref={ref as React.Ref<Mesh<BufferGeometry>>}
      onClick={(e: any) => {
        e.stopPropagation();
       if (e.button !== 2){
        const [x, y, z] = Object.values<number>(e.point).map(val => Math.ceil(val));
        addCube(x, y, z);
       }
      }}
    >
      <planeGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" map={groundTexture} />
    </mesh>
  );
};
