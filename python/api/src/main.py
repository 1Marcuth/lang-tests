import uvicorn

from server import (
    app,
    APP_HOST,
    APP_PORT
)

def main():
    uvicorn.run(
        app=app,
        host=APP_HOST,
        port=APP_PORT
    )

if __name__ == "__main__":
    main()