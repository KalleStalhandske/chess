import type { Board } from "./types";

export const initialBoard: Board = [
  { type: "rook", color: "b" },
  { type: "knight", color: "b" },
  { type: "bishop", color: "b" },
  { type: "queen", color: "b" },
  { type: "king", color: "b" },
  { type: "bishop", color: "b" },
  { type: "knight", color: "b" },
  { type: "rook", color: "b" },

  { type: "pawn", color: "b" },
  { type: "pawn", color: "b" },
  { type: "pawn", color: "b" },
  { type: "pawn", color: "b" },
  { type: "pawn", color: "b" },
  { type: "pawn", color: "b" },
  { type: "pawn", color: "b" },
  { type: "pawn", color: "b" },

  null, null, null, null, null, null, null, null,
  null, null, null, null, null, null, null, null,
  null, null, null, null, null, null, null, null,
  null, null, null, null, null, null, null, null,

  { type: "pawn", color: "w" },
  { type: "pawn", color: "w" },
  { type: "pawn", color: "w" },
  { type: "pawn", color: "w" },
  { type: "pawn", color: "w" },
  { type: "pawn", color: "w" },
  { type: "pawn", color: "w" },
  { type: "pawn", color: "w" },

  { type: "rook", color: "w" },
  { type: "knight", color: "w" },
  { type: "bishop", color: "w" },
  { type: "queen", color: "w" },
  { type: "king", color: "w" },
  { type: "bishop", color: "w" },
  { type: "knight", color: "w" },
  { type: "rook", color: "w" },
];