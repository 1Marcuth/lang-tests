from fastapi import APIRouter

main_router = APIRouter()

@main_router.get("/")
def index():
    return "Essa é minha API em Python!"