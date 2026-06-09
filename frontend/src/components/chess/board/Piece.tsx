import type { Piece as PieceData } from "@/lib/chess/types";
import Image from "next/image";

type PieceProps = {
  piece: PieceData;
};

export function Piece({ piece }: PieceProps) {
  const src = `/${piece.type}-${piece.color}.svg`;

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <Image
        src={src}
        alt={`${piece.color} ${piece.type}`}
        width={56}
        height={56}
        draggable={false}
        className="h-[80%] w-[80%] object-contain pointer-events-none select-none"
        priority={false}
      />
    </div>
  );
}