import { TextureLoader, NearestFilter } from "three";
import { dirtImg, glassImg, logImg, grassImg, woodImg } from "./images";

const dirtTexture = new TextureLoader().load(dirtImg);
const glassTexture = new TextureLoader().load(glassImg);
const logTexture = new TextureLoader().load(logImg);
const grassTexture = new TextureLoader().load(grassImg);
const woodTexture = new TextureLoader().load(woodImg);
const groundTexture = new TextureLoader().load(grassImg);

dirtTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
groundTexture.magFilter = NearestFilter;

export {
  dirtTexture,
  glassTexture,
  logTexture,
  grassTexture,
  woodTexture,
  groundTexture,
};
