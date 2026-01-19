# List (`ui/list`)

This folder provides a **compound List component** for React Native, designed for “Settings-style” screens.
It is theme-aware via `useTheme()` and exposes a clean API through a single export:

```ts
import { List } from '@/src/components/ui/list';
```

The public API is assembled in `index.ts` and looks like this:

- `List` (base container)
- `List.Section` (section wrapper / section header)
- `List.Item` (row)
- `List.Text` (helper text)
- `List.Wrapper` (layout wrapper)

---

## Installation / Import

```tsx
import { List } from '@/src/components/ui/list';
```

Optional type imports:

```ts
import type { ListProps, ListItemProps, ListSectionProps } from '@/src/components/ui/list';
```

---

## Quick Start

### Basic Section with Checkbox

```tsx
import React, { useState } from 'react';
import { List } from '@/src/components/ui/list';

export function PrivacySettings() {
  const [tracking, setTracking] = useState(false);

  return (
    <List.Section title="Privacy">
      <List.Item
        title="Allow Tracking"
        type="checkbox"
        checked={tracking}
        onPress={() => setTracking(v => !v)}
        hideChevron
      />
    </List.Section>
  );
}
```

### Multiple Items + Navigation

```tsx
import { router } from 'expo-router';
import { List } from '@/src/components/ui/list';

export function AccountSettings() {
  return (
    <List.Section title="Account">
      <List.Item
        title="Profile"
        subtitle="Name, email, password"
        onPress={() => router.push('/profile')}
      />
      <List.Item
        title="Security"
        subtitle="2FA and sessions"
        onPress={() => router.push('/security')}
        lastItem
      />
    </List.Section>
  );
}
```

---

## Component Reference

## `List`

Base container used to render list content with optional title row and borders.

Common props (see `ListProps`):
- `rounded?: boolean` — rounded corners and padded outer wrapper
- `borders?: boolean` — enable/disable borders
- `title?: string` — optional header title (if you are not using `List.Section`)
- `rightCmp?: ReactNode` — right-aligned header component
- `containerStyle?`, `titleStyle?`, `style?`

> In practice you will mostly use `List.Section`, which wraps `List` with a section header.

---

## `List.Section`

A convenience wrapper around `List` to create a consistent section layout.

Typical usage:

```tsx
<List.Section title="Privacy">
  <List.Item title="Allow Tracking" type="checkbox" />
</List.Section>
```

Common props (see `ListSectionProps`):
- `title?: string`
- `rounded?: boolean`
- `borders?: boolean`
- `rightCmp?: ReactNode`
- `children`

---

## `List.Item`

A single row. Can be pressable (navigation/action) and supports common patterns:
- title, subtitle
- left/right custom components
- image or SVG
- checkbox affordance
- chevron affordance for pressable rows
- disabled state
- `lastItem` to remove divider

Common props (see `ListItemProps`):
- `title?: string`
- `subtitle?: string | null`
- `rightTitle?: string`
- `onPress?: () => void`
- `onLongPress?: () => void`
- `type?: 'checkbox' | null`
- `checked?: boolean | null`
- `hideChevron?: boolean`
- `disabled?: boolean`
- `lastItem?: boolean`

### Example: Left Icon + Right Custom Component

```tsx
import InfoIcon from '@/assets/svg/info.svg';

<List.Item
  title="About"
  leftCmp={<InfoIcon width={20} height={20} />}
  rightCmp={<Badge />}
  onPress={() => router.push('/about')}
/>
```

---

## `List.Text`

Non-interactive helper text used between sections or below a list.

```tsx
<List.Text>
  Changes take effect immediately and apply to all devices.
</List.Text>
```

---

## `List.Wrapper`

A spacing/layout wrapper to align custom content with list row padding.

```tsx
<List.Wrapper>
  <CustomComponent />
</List.Wrapper>
```

---

## Theming

All list components consume colors via:

```ts
const { colors } = useTheme();
```

They rely only on UI color tokens (e.g. `colors.text`, `colors.border`, `colors.listItemBackground*`).
Project-specific colors live in `src/theme` and are injected by the app theme provider.

---

## Notes & Conventions

- Prefer composition over adding many props:
  - Use `leftCmp` / `rightCmp` / `titleCmp` to extend visuals
- If a new UI element needs a new color token, add it to `UIColors` and provide defaults
- Use `lastItem` to avoid double borders at the end of a section

---

## API Surface (from `index.ts`)

The public export is a compound component:

```ts
List.Item
List.Text
List.Wrapper
List.Section
```

This keeps call sites clean and consistent across the app.
