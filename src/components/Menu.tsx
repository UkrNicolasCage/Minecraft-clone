import { useStore } from "../hooks/useStore"

export const Menu = () => {

  const saveWorld = useStore((state: any) => state.saveWorld) as Function;

  const resetWorld = useStore((state: any) => state.resetWorld) as Function;

  return (
    <div className="menu absolute">
      <button onClick={() => saveWorld()}>Save</button>
      <button onClick={() => resetWorld()}>Reset</button>
    </div>
  );
}