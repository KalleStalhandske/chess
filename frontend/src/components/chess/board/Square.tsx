"use client";

import { Piece } from "./Piece";
import type { Square as SquareData } from "@/lib/chess/types";

type SquareProps = {
  square: SquareData;
  index: number;
  isLight: boolean;
  isSelected: boolean;
  onClick: (index: number) => void;
};


export function Square({ square, index, isLight, isSelected, onClick }: SquareProps) {
  return (
    <div
      onClick={() => onClick(index)}
      className={`
        relative aspect-square min-w-0 min-h-0
        flex items-center justify-center overflow-hidden
        ${isLight ? "bg-[#eeeed2]" : "bg-[#769656]"}
        ${isSelected ? "bg-[#f6f669]" : isLight ? "bg-[#eeeed2]" : "bg-[#769656]"}
      `}
    >
      {square && <Piece piece={square} />}
    </div>
  );
}