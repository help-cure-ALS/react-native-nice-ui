# UI Library (`src/components/ui`)

This folder contains a **reusable UI library** for React Native.

The UI is intentionally **decoupled from the app theme** to keep it portable, testable, and maintainable over time.

The **app** is the single source of truth for colors and theme state.  
The **UI** only defines **which tokens it requires**.

---

## Architecture Overview

### Two Theme Layers

#### 1. UI Theme (this folder)
- Defines the **minimal color contract** (`UIColors`)
- Provides **default colors** for standalone usage (e.g. Storybook)
- Exposes `useTheme()` for UI components

#### 2. App Theme (`src/theme`)
- Is the **source of truth**
- Defines `AppColors extends UIColors`
- Contains **all project-specific colors** (branding, screens, features)
- Injects the final colors into `UIThemeProvider`

---

## Folder Structure

```
ui/
├─ theme/
│  ├─ colors.types.ts   // UIColors: minimal color contract
│  ├─ colors.ui.ts      // Default UI colors (light/dark)
│  ├─ ThemeProvider.tsx // UIThemeProvider + useTheme()
│  └─ index.ts
│
├─ list/
│  ├─ List.tsx
│  ├─ ListItem.tsx
│  └─ ...
│
└─ ...
```

---

## Colors & Theme – Core Concept

### UIColors
`UIColors` describes **only** the colors that UI components actually need  
(e.g. text, borders, list backgrounds).

If a UI component requires a new color:
1. Add it to `UIColors`
2. Provide a default value in `colors.ui.ts`
3. Implement the concrete value in the app’s `AppColors`

---

### `colors.ui.ts` (Defaults)

`colors.ui.ts` serves as:
- Fallback
- Reference
- Documentation of the UI color contract
- Base for isolated UI usage

**Important:**  
UI components must **never import** `lightUIColors` or `darkUIColors` directly.

---

## Runtime Source of Truth

At runtime, the UI always reads colors from context:

```ts
const { colors } = useTheme();
```

These colors come from:
- `AppThemeProvider` during normal app runtime
- `colors.ui.ts` when the UI runs standalone

**App-provided colors always override UI defaults.**

---

## Rules (Mandatory)

### Allowed
- UI components use `useTheme()`
- UI accesses **only `UIColors`**
- UI provides default colors for standalone usage

### Not Allowed
- UI imports colors from `src/theme`
- UI accesses app-only color tokens
- UI manages its own theme state

---

## `useTheme()` – UI Only

```ts
import { useTheme } from '@/src/components/ui/theme';

const { colors, themeName, isDark } = useTheme();
```

`useTheme()` provides:
- `colors` → `UIColors`
- `themeName` → `'light' | 'dark'`
- `isDark` → boolean

No app-specific state (`deviceTheme`, `setDeviceTheme`, etc.).

---

## Outside of UI

In screens, features, and app-level code:

```ts
import { useAppTheme } from '@/src/theme';
```

`useAppTheme()` provides:
- `colors` → `AppColors`
- `deviceTheme`, `setDeviceTheme`, `toggleTheme`, …

---

## When Does a Color Belong in `UIColors`?

### ✔Yes, if
- it is used by **multiple UI components**
- it defines the **visual behavior** of a UI component

### No, if
- it is feature- or screen-specific
- it is only used by the app (prompts, scenarios, chats, …)

---

## Guiding Principle

> **The UI defines what it needs.  
> The app defines how it looks.**
