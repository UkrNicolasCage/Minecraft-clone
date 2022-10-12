import { useEffect, useState } from "react";

import { useKeyboard } from "../hooks/useKeyBoard";
import { useStore } from "../hooks/useStore";
import { dirtImg, glassImg, grassImg, logImg, woodImg } from "../images/images";

const images = {
  dirt: dirtImg,
  grass: grassImg,
  glass: glassImg,
  wood: woodImg,
  log: logImg,
};

export const TextureSelector = () => {
  const activeTexture = useStore((state: any) => state.texture) as String;
  const setTexture = useStore((state: any) => state.setTexture) as Function;
  const { dirt, grass, glass, wood, log } = useKeyboard();

  useEffect(() => {
    const textures = {dirt, grass, glass, wood, log};
    const pressedTexture = Object.entries(textures).find(([k, v]) => v);
    if (pressedTexture) {

      setTexture(pressedTexture[0]);
    }
  }, [setTexture,dirt, grass, glass, wood, log]);


  return (
    
        <div className="absolute bottom texture-selector">
          {Object.entries(images).map(([k, src]) => {
            return (
              <img
                key={k}
                src={src}
                alt={k}
                className={`${k === activeTexture ? "active" : ""}`}
              />
            );
          })}
        </div>
  );
};
