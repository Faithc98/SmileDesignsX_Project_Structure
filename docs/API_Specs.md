
# 🔗 SmileDesignsX API Specification (v1.0)

The backend is powered by **FastAPI** and provides endpoints for auth, file handling, mockup generation, and exports.

---

## 🔐 Authentication

### `POST /api/login`
Authenticate user and return JWT.

#### Request:
```json
{
  "email": "user@example.com",
  "password": "********"
}
```

#### Response:
```json
{
  "token": "<jwt_token>",
  "user": {
    "id": 1,
    "name": "Dr. Matian"
  }
}
```

### `POST /api/logout`
Invalidates token and clears session.

---

## 📂 File Upload

### `POST /api/upload`
Uploads STL + photo for processing.

#### Multipart Form:
- `stl_file`: .stl file
- `photo_file`: .jpeg or .png file

#### Response:
```json
{
  "session_id": "abc123",
  "status": "pending"
}
```

---

## 🤖 AI Mockup

### `POST /api/generate`
Runs AI engine for mockup.

#### Request:
```json
{
  "session_id": "abc123",
  "preset": "veneer"
}
```

#### Response:
```json
{
  "mockup_id": "xyz456",
  "image_url": "/mockups/xyz456.png"
}
```

---

## 🧾 Export

### `GET /api/export/pdf?mockup_id=xyz456`
Returns PDF of the mockup and treatment notes.

---

## 🔒 Security Notes

- All endpoints require `Authorization: Bearer <token>`
- Rate limiting enabled on login and file upload
- Files expire after 24 hours unless saved
