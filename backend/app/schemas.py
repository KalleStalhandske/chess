from pydantic import BaseModel


class GameCreate(BaseModel):
    fen: str = "startpos"


class GameRead(BaseModel):
    id: int
    fen: str
    status: str

    model_config = {
        "from_attributes": True
    }


class MoveRequest(BaseModel):
    move: str
