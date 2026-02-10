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
- **Tags always point to a commit that includes `dist/`**

---

## Repository Structure

```
react-native-nice-ui/
├─ src/
│  ├─ theme/
│  ├─ List/
│  ├─ Button/
│  ├─ Badge/
│  ├─ Typography/
│  ├─ Space/
│  └─ index.ts
│
├─ dist/
│  ├─ index.js
│  ├─ index.d.ts
│
├─ package.json
├─ tsconfig.json
├─ tsconfig.build.json
├─ README.md
└─ MAINTAINER.md
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

### Verify output
```bash
ls dist
```

Must contain at least:
- `index.js`
- `index.d.ts`

---

## Commit Rules

Always commit **source + build output** together.

```bash
git add src dist
git commit -m "feat: add List.Section component"
```

---

## Versioning (Semantic Versioning)

- Patch: bug fixes
- Minor: new features
- Major: breaking changes

Update `package.json` accordingly.

---

## Release Workflow (Tagging)

```bash
git tag -a v0.1.3 -m "Release v0.1.3"
git push origin main
git push origin v0.1.3
```

---

## Icons

Icons are exported as React components via `react-native-svg`.

```tsx
<ArrowRight width={20} height={20} fill={colors.listItemIcon} />
```

---

## Guiding Principle

Stability beats convenience.
