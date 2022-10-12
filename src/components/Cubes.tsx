import { JsxElement } from "typescript";
import { useStore } from "../hooks/useStore"
import { Cube as ICube} from "../interfaces";
import { Cube } from "./Cube";

export const Cubes = () => {
  const [cubes ] = useStore((state: any) => [state.cubes as ICube[]])

  const cubesJSX = cubes.map(({ key, pos, texture }) => {
    return (<Cube key={key} position={pos} texture={texture} />);
  });
  return <>{cubesJSX}</>;
}