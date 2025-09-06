
# SmileDesignsX

SmileDesignsX is a secure, AI-powered desktop application that enables dental providers to create realistic smile mockups using patient STL scans and facial photos. The system simulates veneers, crowns, bridges, implants, and full-arch restorations, providing high-fidelity before/after previews to aid in treatment acceptance and planning.

## 🔐 Vision & Purpose
To empower dentists with a visual tool that bridges communication between patient expectations and treatment outcomes—boosting case acceptance and elevating the patient experience.

---

## 🧱 Folder Structure

```
SmileDesignsX/
├── frontend/         # React + Electron desktop UI
├── backend/          # FastAPI backend for auth, API, image/STL handling
├── ai_engine/        # AI mockup models and STL-to-face alignment logic
├── assets/           # UI icons, logos, brand assets
├── design/           # Final UI/UX designs (PDFs, no Figma links)
├── tests/            # Unit, integration, and e2e tests
├── docs/             # API docs, coding standards, onboarding
├── deployment/       # GitHub Actions, Electron builder configs
├── stl_samples/      # Sample STL intraoral scan files
└── photo_samples/    # Sample JPEG/PNG profile photos
```

---

## 🛠 Tech Stack

| Layer           | Tool/Tech |
|----------------|-----------|
| UI Framework   | React (Electron) |
| 3D Engine      | Three.js or Unity |
| AI Engine      | Python + PyTorch (GAN or Diffusion) |
| API Gateway    | FastAPI |
| Auth/Security  | JWT, AES Encryption |
| Packaging      | Electron Builder |
| Storage        | Local + Optional HIPAA-compliant S3 |
| CI/CD          | GitHub Actions, Auto-updater |

---

## 🔁 App Workflow

1. **User Login**: Secure authentication using JWT and local AES session tokens.
2. **File Upload**: Drag-and-drop STL + facial photo.
3. **AI Processing**: Aligns STL to face and generates mockup (veneers, implants, etc.).
4. **3D Viewer**: Real-time manipulation, before/after toggles, shade selection.
5. **Export/Sync**: Image/PDF output, audit log, optional encrypted cloud backup.

---

## ✅ Definition of Done (DoD)

Each feature is considered done when:
- UI matches design specs pixel-for-pixel
- Code is fully tested and passes CI
- Backend meets documented API contract
- Security is validated (auth, encryption, compliance)
- QA passes functional and edge-case testing
- Documentation is updated

---

## 🚧 Phase Breakdown

### MVP
- [x] Login flow with local auth
- [x] File input (STL + photo)
- [x] Baseline AI model integration
- [x] 3D Viewer + export

### Phase 2
- [ ] Presets: Implants, bridges, AOX
- [ ] Gum simulation tools
- [ ] Shade guide integration

### Phase 3
- [ ] Multi-case library
- [ ] iPad/Web version
- [ ] PMS integration (Dentrix, Eaglesoft)

---

## 📜 Licensing & Compliance

SmileDesignsX is built with HIPAA, WCAG, and healthcare data protection regulations in mind. PHI is encrypted in transit and at rest.

---

## 🧠 Credits

- **Atlas** – Software Architect
- **Elena** – Front-End Engineer
- **Kade** – Back-End + AI Lead
- **Reva** – QA/Compliance
- **Hiro** – DevOps + CI/CD
- **Nova** – UI/UX Designer

