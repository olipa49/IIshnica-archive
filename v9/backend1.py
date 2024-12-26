import os
os.system('cls')
from fastapi import FastAPI

app = FastAPI()

@app.get('/{id}/{txt}')
async def read_item(id, txt):
    print(id, txt)
    return {"Ваш айди": id, "Ответ сервера": txt[::-1]}