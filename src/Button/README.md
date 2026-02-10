# Button

A theme-aware, pressable button component with built-in variants, sizes, and full customization support.

```ts
import { Button } from 'react-native-nice-ui';
```

Optional type imports:

```ts
import type { ButtonProps, ButtonVariant, ButtonSize } from 'react-native-nice-ui';
import type { CustomVariants, ButtonVariantStyleFn, ButtonVariantStyleValue } from 'react-native-nice-ui';
```

---

## Quick Start

```tsx
<Button title="Save" onPress={() => {}} />
<Button title="Cancel" variant="secondary" onPress={() => {}} />
<Button title="Delete" variant="destructive" onPress={() => {}} />
```

---

## Built-in Variants

| Variant | Description |
|---|---|
| `primary` | Solid primary color background, white text (default) |
| `secondary` | Light background (`buttonSecondaryBackground`), primary text |
| `outline` | Transparent with colored border and text |
| `ghost` | Transparent, filled on press (`buttonGhostBackgroundPress`) |
| `destructive` | Solid red (#FF3B30), white text |
| `success` | Solid green (#34C759), white text |
| `tinted` | Light tinted primary background, primary text |

---

## Sizes

| Size | Height | Font Size |
|---|---|---|
| `small` | 36 | 14 |
| `medium` | 44 | 17 (default) |
| `large` | 52 | 20 |

---

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | — | Button label |
| `subtitle` | `string` | — | Smaller text below the title |
| `variant` | `ButtonVariant \| string` | `'primary'` | Visual style |
| `size` | `ButtonSize` | `'medium'` | Button size |
| `rounded` | `boolean` | `false` | Pill shape |
| `fullWidth` | `boolean` | `false` | Takes full container width |
| `iconOnly` | `boolean` | `false` | Square/circle with no text |
| `disabled` | `boolean` | `false` | Disabled state (opacity 0.5) |
| `loading` | `boolean` | `false` | Shows spinner, disables interaction |
| `leftIcon` | `ReactNode` | — | Icon before title |
| `rightIcon` | `ReactNode` | — | Icon after title |
| `variantStyle` | `ButtonVariantStyleValue` | — | Per-instance variant style override |
| `style` | `StyleProp<ViewStyle>` | — | Container style override |
| `textStyle` | `StyleProp<TextStyle>` | — | Title text style override |
| `subtitleStyle` | `StyleProp<TextStyle>` | — | Subtitle text style override |
| `onPress` | `() => void` | — | Press handler |
| `onLongPress` | `() => void` | — | Long press handler |
| `children` | `ReactNode` | — | Custom content (replaces title) |

---

## Subtitle

Add a secondary line of text below the title. The subtitle inherits the variant text color at 70% opacity, with a font size one step smaller than the title.

When a subtitle is present, the button switches from a fixed `height` to `minHeight` so it can grow to fit both lines.

```tsx
<Button
  title="Upgrade to Pro"
  subtitle="ab 4,99 € / Monat"
  size="large"
  onPress={() => {}}
/>

<Button
  title="Löschen"
  subtitle="Kann nicht rückgängig gemacht werden"
  variant="destructive"
  onPress={() => {}}
/>
```

| Size | Title Font | Subtitle Font |
|---|---|---|
| `small` | 14 (`fontSizeSm`) | 12 (`fontSizeXs`) |
| `medium` | 17 (`fontSizeMd`) | 14 (`fontSizeSm`) |
| `large` | 20 (`fontSizeXl`) | 14 (`fontSizeSm`) |

The subtitle is ignored when `iconOnly` is set.

---

## Custom Variants via Provider

Register new variants (or override built-in ones) globally via `UIThemeProvider`:

```tsx
import { UIThemeProvider, CustomVariants } from 'react-native-nice-ui';

const customVariants: CustomVariants = {
  // New variant
  warning: ({ pressed }) => ({
    container: {
      backgroundColor: '#FF9500',
      opacity: pressed ? 0.8 : 1,
    },
    text: { color: '#ffffff' },
  }),

  // Theme-aware variant
  premium: ({ colors, isDark, pressed }) => ({
    container: {
      backgroundColor: isDark ? '#2D1B69' : '#6B3FA0',
      borderWidth: 1,
      borderColor: '#D4AF37',
      opacity: pressed ? 0.8 : 1,
    },
    text: { color: '#D4AF37' },
  }),

  // Override built-in variant
  destructive: ({ pressed }) => ({
    container: {
      backgroundColor: '#CC0000',
      opacity: pressed ? 0.7 : 1,
    },
    text: { color: '#ffffff' },
  }),
};

<UIThemeProvider themeName="light" customVariants={customVariants}>
  <App />
</UIThemeProvider>
```

Then use them like any built-in variant:

```tsx
<Button title="Achtung" variant="warning" onPress={() => {}} />
<Button title="Upgrade" variant="premium" size="large" rounded onPress={() => {}} />
```

### Variant Function Signature

Each custom variant receives a context object:

```ts
interface VariantStyleContext {
  pressed: boolean;     // true while button is pressed
  colors: UIColors;     // current theme colors
  tokens: UITokens;     // current design tokens
  isDark: boolean;      // true if dark theme
}
```

And must return:

```ts
interface VariantStyleResult {
  container: ViewStyle;  // applied to the Pressable
  text: TextStyle;       // applied to the Text
}
```

---

## Per-Instance Override with `variantStyle`

Override or extend variant styles for a single button instance, without affecting others.

### Static object

```tsx
<Button
  title="Purple Primary"
  variant="primary"
  variantStyle={{
    container: { backgroundColor: '#8B5CF6' },
    text: { color: '#ffffff' },
  }}
  onPress={() => {}}
/>
```

### Dynamic function

```tsx
<Button
  title="Gold Outline"
  variant="outline"
  variantStyle={({ pressed, colors }) => ({
    container: {
      borderColor: pressed ? colors.primary : '#D4AF37',
      borderWidth: 2,
    },
    text: { color: '#D4AF37' },
  })}
  onPress={() => {}}
/>
```

---

## Style Merge Order

Styles are merged in this order (later wins):

```
Built-in Variant  →  customVariants (Provider)  →  variantStyle (Instance)  →  style / textStyle
```

1. **Built-in variant** — default styles from the component
2. **`customVariants`** — if the variant name matches a provider-registered variant, it replaces the built-in entirely
3. **`variantStyle`** — shallow-merged on top of the resolved variant (built-in or custom)
4. **`style` / `textStyle`** — final overrides, always applied last

---

## Examples

### Rounded Icon Button

```tsx
<Button
  iconOnly
  rounded
  variant="tinted"
  leftIcon={<PlusIcon width={20} height={20} fill={colors.primary} />}
  onPress={() => {}}
/>
```

### Full Width Loading Button

```tsx
<Button
  title="Submitting..."
  fullWidth
  loading={isSubmitting}
  onPress={handleSubmit}
/>
```

### Custom Variant with Icons

```tsx
<Button
  title="Upgrade to Pro"
  variant="premium"
  size="large"
  rounded
  leftIcon={<StarIcon width={20} height={20} fill="#D4AF37" />}
  onPress={() => {}}
/>
```

---

## Theming

All button styles consume theme values via `useTheme()`:

- **Colors**: `colors.primary`, `colors.buttonSecondaryBackground`, `colors.buttonGhostBackgroundPress`, `colors.textPrimary`, etc.
- **Tokens**: `tokens.buttonHeightSm/Md/Lg`, `tokens.buttonPaddingHorizontalSm/Md/Lg`, `tokens.buttonRadius`, `tokens.fontWeightSemibold`

Override these globally via `UIThemeProvider`:

```tsx
<UIThemeProvider
  themeName="light"
  colors={{ primary: '#FF6B6B' }}
  tokens={{ buttonRadius: 14, buttonHeightMd: 48 }}
>
  <App />
</UIThemeProvider>
```
