import { Square } from "./Square";
import { initialBoard } from "@/lib/chess/initialBoard";

export function ChessBoard() {
  return (
    <div className="grid grid-cols-8 grid-rows-8 w-[min(90vw,640px)] aspect-square border overflow-hidden">
      {initialBoard.map((piece, index) => {
        const row = Math.floor(index / 8);
        const col = index % 8;
        const isLight = (row + col) % 2 === 0;

        return (
          <Square
            key={index}
            square={piece}
            isLight={isLight}
          />
        );
      })}
    </div>
  );
}