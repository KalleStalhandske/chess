import type { Piece as PieceData } from "@/lib/chess/types";
import { Piece } from "./Piece";

type SquareProps = {
  piece: PieceData | null;
};

export function Square({ piece }: SquareProps) {

  return (
    <button
      type="button"
    >
      {piece && <Piece piece={piece} />}
    </button>
  );
}