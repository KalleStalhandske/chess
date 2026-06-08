"use client";

import { useState } from "react";
import { Square } from "./Square";
import type { Board } from "@/lib/chess/types";
import { initialBoard } from "@/lib/chess/initialBoard";


export function ChessBoard() {
  const files = ["a", "b", "c", "d", "e", "f", "g", "h"]
  const ranks = [8, 7, 6, 5, 4, 3, 2, 1]


  return (
    <div className="grid grid-cols-8 w-150 h-150 border border-zinc-800">
      {ranks.map((rank) =>
        files.map((file, fileIndex) => {
          const rankIndex = 8 - rank
          const isLight = (fileIndex + rankIndex) % 2 === 0

          return (
            <div
              key={`${file}${rank}`}
              className={
                isLight
                  ? "bg-[#f0d9b5] flex items-center justify-center"
                  : "bg-[#b58863] flex items-center justify-center"
              }
            >
              <span className="text-xs opacity-40">

              </span>
            </div>
          )
        })
      )}
    </div>
  )
}