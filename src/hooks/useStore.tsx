import { nanoid } from "nanoid";
import { Texture } from "three";
import create from "zustand";
import { Cube } from "../interfaces";

const getLocalStorage = (key: string) => {
  const item = window.localStorage.getItem(key)!;
  return JSON.parse(item);
};
const setLocalStorage = (key: string, value: any) =>
  window.localStorage.setItem(key, JSON.stringify(value));

export const useStore = create((set) => ({
  texture: "dirt",
  cubes: getLocalStorage("cubes") || [],

  addCube: (x: number, y: number, z: number) => {
    set((prev: { cubes: Cube[]; texture: Texture }) => ({
      cubes: [
        ...prev.cubes,
        { key: nanoid(), pos: [x, y, z], texture: prev.texture },
      ],
    }));
  },

  removeCube: (x: number, y: number, z: number) => {
    set((prev: { cubes: Cube[] }) => ({
      cubes: prev.cubes.filter((cube) => {
        const [X, Y, Z] = cube.pos;
        return X !== x || Y !== y || Z !== z;
      }),
    }));
  },

  setTexture: (texture: string) => {
    set(() => ({
      texture,
    }));
  },
  saveWorld: () => {
    set((prev: { cubes: Cube[] }) => {
      
      setLocalStorage("cubes", prev.cubes);
      return prev.cubes;
    });
  },
  resetWorld: () => {
    set(() => ({
      cubes: [],
    }));
  },
}));
