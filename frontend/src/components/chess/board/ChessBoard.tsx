"use client";

import { useState } from "react";
import { Square } from "./Square";
import { initialBoard } from "@/lib/chess/initialBoard";

export function ChessBoard() {
  const [board, setBoard] = useState(initialBoard);
  const [selectedSquare, setSelectedSquare] = useState<number | null>(null);

  function handleSquareClick(index: number) {
    const clickedPiece = board[index];

    if (selectedSquare === null) {
      // No square selected
      if (clickedPiece) {
        setSelectedSquare(index);
      }

      return;
    }

    if (selectedSquare === index) {
      // Same square was selected, deactivate
      setSelectedSquare(null);
      return;
    }

    setBoard((currentBoard) => {
      const newBoard = [...currentBoard];
      const movingPiece = newBoard[selectedSquare];
      if (!movingPiece) {
        return currentBoard;
      }

      newBoard[index] = movingPiece;
      newBoard[selectedSquare] = null;

      return newBoard;
    })
    setSelectedSquare(null);
  }


  return (
    <div className="grid grid-cols-8 grid-rows-8 w-[min(90vw,640px)] aspect-square border overflow-hidden">
      {board.map((piece, index) => {
        const row = Math.floor(index / 8);
        const col = index % 8;
        const isLight = (row + col) % 2 === 0;
        const isSelected = selectedSquare === index;

        return (
          <Square
            key={index}
            square={piece}
            index={index}
            isLight={isLight}
            isSelected={isSelected}
            onClick={handleSquareClick}
          />
        );
      })}
    </div>
  );
}