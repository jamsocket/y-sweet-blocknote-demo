import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const COLORS = [
  "#FF5C5C",
  "#FFB65C",
  "#88FF70",
  "#47F0FF",
  "#478EFF",
  "#745CFF",
  "#FF85FF",
];

const ADJECTIVES = [
  "Auspicious",
  "Brave",
  "Clever",
  "Daring",
  "Eager",
  "Fearless",
  "Gracious",
  "Happy",
  "Intelligent",
  "Jolly",
  "Kind",
  "Lively",
  "Mighty",
  "Noble",
  "Optimistic",
  "Polite",
  "Quick",
  "Reliable",
  "Strong",
  "Trustworthy",
  "Unique",
  "Valiant",
  "Witty",
  "Xenial",
  "Youthful",
  "Zesty",
];

const ANIMALS = [
  "Alligator",
  "Bear",
  "Cat",
  "Dog",
  "Elephant",
  "Fox",
  "Giraffe",
  "Horse",
  "Iguana",
  "Jaguar",
  "Kangaroo",
  "Lion",
  "Monkey",
  "Narwhal",
  "Owl",
  "Penguin",
  "Quetzal",
  "Rabbit",
  "Squirrel",
  "Tiger",
  "Urchin",
  "Vicuña",
  "Wombat",
  "Xerus",
  "Yak",
  "Zebra",
];

function choose<T>(items: T[]) {
  return items[Math.floor(Math.random() * items.length)];
}

function randomColor() {
  return choose(COLORS);
}

function randomUsername() {
  return choose(ADJECTIVES) + " " + choose(ANIMALS);
}

export interface User {
  name: string;
  color: string;
}

const self = atomWithStorage("ysweet-blocknote-user", {
  name: randomUsername(),
  color: randomColor(),
});

export function useSelf() {
  return useAtom(self);
}
