# File: start-backend.ps1
# Location: C:\SmileDesignsX_Project_Structure\backend\start-backend.ps1

Write-Host "Activating SmileDesignsX virtual environment..." -ForegroundColor Cyan

# Step into backend directory
cd "C:\SmileDesignsX_Project_Structure\backend"

# Activate venv
.\env\Scripts\activate

# Run uvicorn
Write-Host "Launching API server at http://localhost:8000 ..." -ForegroundColor Green
uvicorn main:app --reload
