from fastapi import FastAPI, File, UploadFile, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from starlette.responses import FileResponse
from dotenv import load_dotenv
import os
import uuid

load_dotenv()
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

class LoginRequest(BaseModel):
    email: str
    password: str

@app.post("/api/login")
def login(data: LoginRequest):
    if data.email == "demo@smile.com" and data.password == "demo123":
        return {"token": "mock-jwt-token", "user": {"id": 1, "name": "Dr. Smile"}}
    raise HTTPException(status_code=401, detail="Invalid credentials")

@app.post("/api/upload")
async def upload(stl_file: UploadFile = File(...), photo_file: UploadFile = File(...)):
    session_id = str(uuid.uuid4())
    stl_path = os.path.join(UPLOAD_DIR, f"{session_id}.stl")
    photo_path = os.path.join(UPLOAD_DIR, f"{session_id}.jpg")

    with open(stl_path, "wb") as f:
        f.write(await stl_file.read())

    with open(photo_path, "wb") as f:
        f.write(await photo_file.read())

    return {"session_id": session_id, "status": "pending"}

@app.post("/api/generate")
def generate(session_id: str = Form(...), preset: str = Form(...)):
    mockup_id = str(uuid.uuid4())
    output_path = os.path.join(UPLOAD_DIR, f"{mockup_id}.png")
    with open(output_path, "wb") as f:
        f.write(b"FAKE_IMAGE_DATA")
    return {"mockup_id": mockup_id, "image_url": f"/mockups/{mockup_id}.png"}

@app.get("/mockups/{filename}")
def get_mockup(filename: str):
    path = os.path.join(UPLOAD_DIR, filename)
    if not os.path.exists(path):
        raise HTTPException(status_code=404, detail="File not found")
    return FileResponse(path)

@app.get("/")
def root():
    return {"message": "SmileDesignsX backend is running"}