# Maintainer Guide – react-native-nice-ui

This document describes **your responsibilities as the maintainer** of the  
`react-native-nice-ui` package.

It is intentionally practical and command-focused.

---

## Role & Responsibility

You are responsible for:

- keeping the package **buildable**
- keeping the public API **stable**
- ensuring the package can be **consumed by external projects**
- publishing **compiled output**, not source code
- enforcing architectural boundaries (UI ≠ App)

---

## Golden Rules

- **`dist/` is committed**
- **Apps never import from `src/`**
- **UI never imports from app code**
- **Breaking changes require a version bump**

---

## Repository Structure

```
react-native-nice-ui/
├─ src/
│  ├─ theme/
│  ├─ List/
│  └─ index.ts
│
├─ dist/
│  ├─ index.js
│  ├─ index.d.ts
│
├─ package.json
├─ tsconfig.json
├─ tsconfig.build.json
└─ README.md
```

---

## Daily Workflow

### Install dependencies
```bash
npm install
```

### Build package
```bash
npm run build
```

### Commit changes
```bash
git add src dist
git commit -m "feat: description"
```

---

## Versioning Rules

- Patch: bug fixes
- Minor: new features (compatible)
- Major: breaking changes

---

## Theme Contract Rules

- UI uses **UIColors only**
- App injects **AppColors**
- No app-specific colors inside UI

---

## Icons

Icons are exported as React components via `react-native-svg`.

Example:
```tsx
<ArrowRight width={20} height={20} fill={colors.listItemIcon} />
```

---

## Guiding Principle

Stability beats convenience.
