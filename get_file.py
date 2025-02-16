import os, time
os.system('cls')
from fastapi import FastAPI, UploadFile
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(redirect_slashes=False)
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
@app.post('/wav/')
async def get_file(file: UploadFile):
    t_file = open(str(int(time.time())) + ".wav", "wb")
    t_file.write(file.file.read())
    t_file.close()
    return {"ok"}
