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
- `badge?: ReactNode` — badge element (e.g. `<Badge label="Aktiv" variant="success" />`)
- `badgePosition?: 'inline' | 'right' | 'top-right'` — badge position (`'right'` by default)
- `badgeStyle?: StyleProp<ViewStyle>` — style for the badge wrapper (e.g. override `top`/`right` for `'top-right'`)
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
  rightCmp={<StatusBadge />}
  onPress={() => router.push('/about')}
/>
```

### Example: Badge

```tsx
import { Badge } from 'react-native-nice-ui';

// Right position (default) — before chevron/checkbox/rightCmp
<List.Item
  title="Abo"
  subtitle="Premium Plan"
  badge={<Badge label="Aktiv" variant="success" />}
  onPress={() => {}}
/>

// Inline — next to title text
<List.Item
  title="Premium"
  badge={<Badge label="Neu" variant="info" size="small" />}
  badgePosition="inline"
/>

// Top-right — absolute positioned at top-right corner
<List.Item
  title="Abo"
  subtitle="Premium Plan"
  badge={<Badge label="Aktiv" variant="success" size="small" />}
  badgePosition="top-right"
/>

// Top-right with custom positioning via badgeStyle
<List.Item
  title="Abo"
  subtitle="Premium Plan"
  badge={<Badge label="Aktiv" variant="success" size="small" />}
  badgePosition="top-right"
  badgeStyle={{ top: 4, right: 16 }}
/>
```

Badge position layout:

```
┌──────────────────────────────────────────────────┐
│  [Icon]  Title  [① inline]       [② right]  [>]  │
│          Subtitle                       [③ top-right]
└──────────────────────────────────────────────────┘
```

Note: ③ is absolutely positioned at the top-right corner of the item.

| Position | `badgePosition` | Description |
|---|---|---|
| ① | `'inline'` | In the title row, right after the title text |
| ② | `'right'` | Right area, vertically centered, before chevron/checkbox (default) |
| ③ | `'top-right'` | Absolute positioned at top-right corner of the item |

See [Badge README](../Badge/README.md) for the full Badge component API.

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

## Global Style Overrides with `customStyles`

Override the default text styles for section titles, item titles, and item subtitles globally via `UIThemeProvider`:

```tsx
import { UIThemeProvider, CustomStyles } from 'react-native-nice-ui';

const customStyles: CustomStyles = {
  listSectionTitle: ({ colors }) => ({
    fontSize: 13,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    color: colors.textHint,
  }),
  listItemTitle: ({ tokens }) => ({
    fontSize: tokens.fontSizeMd,
    fontWeight: '600',
  }),
  listItemSubtitle: ({ colors }) => ({
    color: colors.textSecondary,
  }),
};

<UIThemeProvider themeName="light" customStyles={customStyles}>
  <App />
</UIThemeProvider>
```

Each function receives a context object:

```ts
interface CustomStyleContext {
  colors: UIColors;
  tokens: UITokens;
  isDark: boolean;
}
```

### Merge Order

```
Built-in Style  →  customStyles (Provider)  →  titleStyle / subtitleStyle (Instance Prop)
```

Local props always win, so you can still override per instance:

```tsx
// Global customStyles apply automatically
<List.Section title="Account">
  <List.Item title="Profile" subtitle="Name, email" />
</List.Section>

// Local prop overrides the global style
<List.Item
  title="Special Item"
  titleStyle={{ fontWeight: '800', fontStyle: 'italic' }}
/>
```

### Available Keys

| Key | Applies to | Component |
|---|---|---|
| `listSectionTitle` | Section header text | `List` / `List.Section` |
| `listItemTitle` | Item title text | `List.Item` |
| `listItemSubtitle` | Item subtitle text | `List.Item` |

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
