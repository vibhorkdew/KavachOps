from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware

from app.api import auth

from app.database.db import engine

from app.models.user import Base

app = FastAPI()

Base.metadata.create_all(bind=engine)

app.add_middleware(

    CORSMiddleware,

    allow_origins=[
        "http://localhost:3000"
    ],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],
)

app.include_router(auth.router)