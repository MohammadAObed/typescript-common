import { getRandomNumber } from "./src/utils/number";

const minRand = 1;
const maxrand = 10;

const rand = getRandomNumber(minRand, maxrand);
console.log(`Random number generated: ${rand.toString()}`);
