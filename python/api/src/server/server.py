from fastapi import FastAPI

from .routers import main_router

APP_HOST = "0.0.0.0"
APP_PORT = 8000

app = FastAPI()

app.include_router(main_router)