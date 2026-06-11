from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from app.core.config import FRONTEND_ORIGIN
from app.database import Base, engine, get_db
from app.models import Game
from app.schemas import GameCreate, GameRead, MoveRequest

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Chess Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[FRONTEND_ORIGIN],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/games", response_model=GameRead)
def create_game(payload: GameCreate, db: Session = Depends(get_db)):
    game = Game(fen=payload.fen)
    db.add(game)
    db.commit()
    db.refresh(game)
    return game


@app.get("/games/{game_id}", response_model=GameRead)
def get_game(game_id: int, db: Session = Depends(get_db)):
    game = db.get(Game, game_id)

    if game is None:
        raise HTTPException(status_code=404, detail="Game not found")

    return game


@app.post("/games/{game_id}/move")
def make_move(game_id: int, payload: MoveRequest, db: Session = Depends(get_db)):
    game = db.get(Game, game_id)

    if game is None:
        raise HTTPException(status_code=404, detail="Game not found")

    # Placeholder.
    # Later this should call your chess engine:
    # result = engine.apply_move(game.fen, payload.move)
    # game.fen = result.new_fen

    return {
        "game_id": game.id,
        "received_move": payload.move,
        "current_fen": game.fen,
        "message": "Move endpoint works. Chess logic not implemented yet."
    }
