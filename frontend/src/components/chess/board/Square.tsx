import { Piece } from "./Piece";
import type { Square as SquareData } from "@/lib/chess/types";

type SquareProps = {
  square: SquareData;
  isLight: boolean;
};

export function Square({ square, isLight }: SquareProps) {
  return (
    <div
      className={`
        relative aspect-square min-w-0 min-h-0
        flex items-center justify-center overflow-hidden
        ${isLight ? "bg-stone-200" : "bg-stone-700"}
      `}
    >
      {square && <Piece piece={square} />}
    </div>
  );
}