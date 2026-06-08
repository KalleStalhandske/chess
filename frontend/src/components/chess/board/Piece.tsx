import type { Piece as PieceData } from "@/lib/chess/types";
import Image from "next/image";


type PieceProps = {
  piece: PieceData;
};

export function Piece({ piece }: PieceProps) {
  const src = `/${piece.type}-${piece.color}.svg`;

  return (
    <Image
      src={src}
      alt={`${piece.color} ${piece.type}`}
      width={56}
      height={56}
      draggable={false}
      className="pointer-events-none select-none"
      priority={false}
    />
  );
}