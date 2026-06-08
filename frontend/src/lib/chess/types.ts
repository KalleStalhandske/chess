export type PieceColor = "w" | "b";

export type PieceType =
  | "pawn"
  | "knight"
  | "bishop"
  | "rook"
  | "queen"
  | "king";

export type Piece = {
  type: PieceType;
  color: PieceColor;
};

export type Square = Piece | null;

export type Board = Square[];