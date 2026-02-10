# Badge

A small colored label for status indicators, counts, or tags.

```ts
import { Badge } from 'react-native-nice-ui';
```

Optional type imports:

```ts
import type { BadgeProps, BadgeVariant, BadgeSize } from 'react-native-nice-ui';
```

---

## Quick Start

```tsx
<Badge label="Aktiv" variant="success" />
<Badge label="3" variant="error" />
<Badge label="Neu" variant="info" size="small" />
```

---

## Variants

| Variant | Background | Text |
|---|---|---|
| `success` | #34C759 (green) | white |
| `warning` | #FF9500 (orange) | white |
| `error` | #FF3B30 (red) | white |
| `info` | #007AFF (blue) | white |
| `default` | #8E8E93 (gray) | white |

---

## Sizes

| Size | Font Size | Padding H | Padding V | Radius |
|---|---|---|---|---|
| `small` | 10 | 6 | 2 | 4 |
| `medium` | 12 | 8 | 3 | 5 |

---

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | **(required)** | Badge text |
| `variant` | `BadgeVariant` | `'default'` | Color preset |
| `size` | `BadgeSize` | `'medium'` | Badge size |
| `color` | `string` | — | Custom background (overrides variant) |
| `textColor` | `string` | — | Custom text color (overrides variant) |
| `style` | `StyleProp<ViewStyle>` | — | Container style override |
| `textStyle` | `StyleProp<TextStyle>` | — | Text style override |

---

## Custom Colors

```tsx
<Badge label="VIP" color="#D4AF37" textColor="#fff" />
<Badge label="Custom" color="#6B3FA0" textColor="#fff" />
```

---

## Usage with List.Item

The `Badge` component is designed to work seamlessly with `List.Item` via the `badge` prop:

```tsx
// Right position (default) — before chevron
<List.Item
  title="Abo"
  subtitle="Premium Plan"
  badge={<Badge label="Aktiv" variant="success" />}
  onPress={() => {}}
/>

// Inline position — next to title text
<List.Item
  title="Premium"
  subtitle="Jetzt verfügbar"
  badge={<Badge label="Neu" variant="info" size="small" />}
  badgePosition="inline"
  onPress={() => {}}
/>

// Combined with rightCmp
<List.Item
  title="Notifications"
  badge={<Badge label="3" variant="error" />}
  rightCmp={<Switch value={true} />}
  hideChevron
/>
```

See the [List README](../List/README.md) for more details on `badge` and `badgePosition`.
