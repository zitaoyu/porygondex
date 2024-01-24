import { Gen } from "@/app/_utils/gen";

export type GridType = "regular" | "mini" | "table";
export type GenIndex =
  | [0, 1025]
  | [0, 151]
  | [152, 251]
  | [252, 386]
  | [387, 493]
  | [494, 649]
  | [650, 721]
  | [722, 809]
  | [810, 905]
  | [906, 1025];

export const genIndexMap: Record<Gen, GenIndex> = {
  all: [0, 1025],
  "red-blue": [0, 151],
  crystal: [152, 251],
  "firered-leafgreen": [252, 386],
  platinum: [387, 493],
  "black-2-white-2": [494, 649],
  "omega-ruby-alpha-sapphire": [650, 721],
  "ultra-sun-ultra-moon": [722, 809],
  "sword-shield": [810, 905],
  "scarlet-violet": [906, 1025],
};
