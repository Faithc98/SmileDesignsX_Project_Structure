
# 🤝 Contributing to SmileDesignsX

We welcome high-integrity contributors to help build the future of restorative dentistry. This guide outlines how to contribute code, report issues, and join sprint cycles.

---

## 📥 Getting Started

1. Clone the repo:
```
git clone https://github.com/SmileDesignsX/smile-app.git
cd smile-app
```

2. Install dependencies:
```
npm install && pip install -r backend/requirements.txt
```

3. Create `.env` files from `.env.example` in both `frontend/` and `backend/`

4. Run the app:
```
npm run electron-dev
```

---

## 🌿 Branching Strategy

- `main` → Production-ready
- `dev` → Ongoing sprint work
- `feature/<name>` → One module per feature

---

## ✅ Pull Request Checklist

- PR title follows conventional commits (`feat:`, `fix:`, etc.)
- Tests written and passing (unit/integration)
- All functions documented
- Linked to issue/ticket number
- No commented-out code

---

## 🐞 Reporting Bugs

1. Check if the bug has already been filed
2. Submit via GitHub Issues with:
   - Exact steps to reproduce
   - Screenshots or logs
   - OS/environment details
   - Expected vs actual behavior

---

## 📆 Sprint Participation

We operate on biweekly sprints. Tasks are assigned with:
- Definition of Done (DoD)
- Estimated time to complete
- Reviewer assigned

Submit work via PR **before sprint close date.**
