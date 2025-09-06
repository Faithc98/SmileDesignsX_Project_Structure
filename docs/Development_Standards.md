
# 🧠 SmileDesignsX Development Standards

These coding, testing, and security standards must be followed without exception. Every contributor is expected to enforce these rules through code review, CI pipelines, and manual audits.

---

## 🔒 Code Quality

- Use descriptive, consistent naming conventions (camelCase for JS, snake_case for Python)
- Avoid magic numbers — always declare named constants
- Functions must be modular, testable, and single-responsibility
- Reuse components, hooks, and services — DRY code only
- No inline styles — use component-driven style systems (Tailwind or CSS Modules)

---

## 🔐 Security

- Store no secrets in code — use .env and GitHub Secrets
- JWTs must expire and use rotating signing keys
- Passwords must be hashed with bcrypt (min 12 salt rounds)
- All local data must be encrypted with AES-256
- Secure IPC between Electron and backend (CSP + sandboxed modules)

---

## 🧪 Testing Protocol

- Minimum 90% coverage on all modules
- Each PR must include matching unit/integration tests
- Manual testing required for drag/drop, 3D viewer, and export functions
- QA must confirm all edge cases before merging (via @Reva)
- Run full regression suite before release

---

## 📦 CI/CD & Branching

- `main` → production-ready, deployable at all times
- `dev` → integration branch for tested features
- Feature branches: `feature/<module-name>`
- Pull requests must include:
  - Linked issue number
  - Description of changes
  - Test results (screenshots or CLI output)

---

## ✅ Commit Standards

```
feat: add STL drag/drop handler
fix: correct JWT token refresh bug
test: add unit tests for auth API
docs: update README with usage flow
refactor: isolate 3D rendering logic
```

---

## 🛑 Non-Negotiables

- No hardcoded credentials or tokens
- No commented-out code in PRs
- No deployment to `main` without CI approval
- No undocumented API changes
