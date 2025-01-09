import os
os.system('cls')
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/h')
async def p():
    return {"ok"}


@app.get('/ip/{ip}')
async def get_ip(ip):
    print(ip)
    ips = open("ips.txt", "a")
    ips.write(str(ip) + "\n")
    ips.close()
    return {"ok"}
