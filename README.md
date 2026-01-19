# react-native-nice-ui

A reusable UI library for React Native, designed to be shared across multiple projects.

The library is intentionally decoupled from any specific application theme.
The application is always the source of truth for colors and theme state.
The UI only defines which design tokens it needs.

---

## Installation

This package is intended to be consumed directly from GitHub.

```bash
npm install github:help-cure-ALS/react-native-nice-ui
```
or with a specific version tag:

```bash
npm install github:help-cure-ALS/react-native-nice-ui#v0.1.2
```

---

## Usage

```tsx
import { List } from 'react-native-nice-ui';

<List.Section title="Settings">
  <List.Item title="Dark Mode" type="checkbox" />
</List.Section>
```

---

## Theme Architecture

### Two Layers

#### UI Theme (this package)
- Defines the minimal color contract (`UIColors`)
- Provides default colors for standalone usage
- Exposes `useTheme()` for UI components

#### App Theme (consumer project)
- Is the source of truth
- Defines `AppColors extends UIColors`
- Injects final colors into `UIThemeProvider`

---

## Theme Usage

```tsx
import { UIThemeProvider } from 'react-native-nice-ui';

<UIThemeProvider themeName={themeName} colors={appColors}>
  <App />
</UIThemeProvider>
```

Inside UI components:

```ts
const { colors, themeName, isDark } = useTheme();
```

---

## Package Structure

```
src/
├─ theme/
├─ list/
├─ assets/
│  └─ icons/
├─ platform/
└─ index.ts
```

---

## Rules

Allowed:
- UI components use `useTheme()`
- UI accesses only `UIColors`
- App controls all theme state

Not allowed:
- UI imports app colors
- UI manages device or system theme state

---

## Guiding Principle

The UI defines what it needs.
The app defines how it looks.
