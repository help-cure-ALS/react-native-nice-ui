# react-native-nice-ui

A reusable UI component library for React Native with theming support, designed to be shared across multiple projects.

## Features

- **List Components** - Section, Item, InputItem, SliderItem, SectionCard, Text, Wrapper
- **Typography** - Text component with 15 variants (display, headline, title, body, label)
- **Button** - 7 variants, 3 sizes, icons, loading state
- **Theme System** - Colors and design tokens with light/dark mode
- **iOS 26 Support** - Automatic adjustments for larger paddings and radii
- **Icons** - SVG icons using react-native-svg

---

## Installation

```bash
npm install github:help-cure-ALS/react-native-nice-ui#v1.0.0
```

### Peer Dependencies

```bash
npm install react-native-svg
```

Optional (for List.SliderItem):
```bash
npm install @react-native-community/slider
```

---

## Quick Start

```tsx
import { UIThemeProvider, List, Text, Button } from 'react-native-nice-ui';

function App() {
    return (
        <UIThemeProvider themeName="light">
            <List.Section title="Settings" rounded>
                <List.Item
                    title="Notifications"
                    subtitle="Enable push notifications"
                    onPress={() => {}}
                />
                <List.Item
                    title="Dark Mode"
                    type="checkbox"
                    checked={isDark}
                    onPress={toggleTheme}
                />
            </List.Section>

            <Text variant="headlineMedium">Welcome</Text>
            <Text variant="bodyLarge" color="secondary">
                This is a description text.
            </Text>

            <Button title="Get Started" onPress={() => {}} />
        </UIThemeProvider>
    );
}
```

---

## Components

### List

Compound component for building iOS-style lists.

```tsx
// Basic Section
<List.Section title="Account" rounded>
    <List.Item title="Profile" onPress={() => {}} />
    <List.Item title="Settings" subtitle="Manage preferences" onPress={() => {}} />
</List.Section>

// Checkbox Items
<List.Section title="Options">
    <List.Item title="Option 1" type="checkbox" checked={checked} onPress={toggle} />
</List.Section>

// Spaced Card Layout
<List.Section title="Cards" spaced>
    <List.Item title="Card 1" onPress={() => {}} />
    <List.Item title="Card 2" onPress={() => {}} />
</List.Section>

// Input Items
<List.Section title="Form" rounded>
    <List.InputItem label="Email" value={email} onChangeText={setEmail} />
    <List.InputItem label="Password" secureTextEntry showPasswordToggle />
    <List.InputItem label="Name" placeholder="John" inline />
</List.Section>

// Input with Right Label (units)
<List.Section title="Measurements" rounded>
    <List.InputItem label="Weight" placeholder="0.0" rightLabel="kg" />
    <List.InputItem label="Price" placeholder="0.00" rightLabel="€" />
    <List.InputItem label="Discount" placeholder="0" rightLabel="%" inline />
</List.Section>

// Section Card (with header/title/body)
<List.SectionCard
    header="Step 1 of 3"
    title="Personal Information"
    body="Please fill in your details."
>
    <List.InputItem label="Name" />
    <List.InputItem label="Email" />
</List.SectionCard>

// Slider Items (requires @react-native-community/slider)
<List.Section title="Settings">
    <List.SliderItem
        label="Volume"
        value={50}
        valueSuffix="%"
        minimumValue={0}
        maximumValue={100}
        onSlidingComplete={setVolume}
    />
</List.Section>
```

### Text (Typography)

```tsx
// Variants
<Text variant="displayLarge">Display Large</Text>
<Text variant="headlineMedium">Headline Medium</Text>
<Text variant="titleSmall">Title Small</Text>
<Text variant="bodyLarge">Body text content</Text>
<Text variant="labelMedium">Label</Text>

// Colors
<Text variant="bodyMedium" color="primary">Primary</Text>
<Text variant="bodyMedium" color="secondary">Secondary</Text>
<Text variant="bodyMedium" color="tertiary">Tertiary</Text>
<Text variant="bodyMedium" color="hint">Hint</Text>

// Alignment
<Text variant="headlineLarge" align="center">Centered</Text>
```

**Available Variants:**
| Category | Variants |
|----------|----------|
| Display | displayLarge, displayMedium, displaySmall |
| Headline | headlineLarge, headlineMedium, headlineSmall |
| Title | titleLarge, titleMedium, titleSmall |
| Body | bodyLarge, bodyMedium, bodySmall |
| Label | labelLarge, labelMedium, labelSmall |

### Button

```tsx
// Variants
<Button title="Primary" onPress={() => {}} />
<Button title="Secondary" variant="secondary" onPress={() => {}} />
<Button title="Outline" variant="outline" onPress={() => {}} />
<Button title="Ghost" variant="ghost" onPress={() => {}} />
<Button title="Tinted" variant="tinted" onPress={() => {}} />
<Button title="Destructive" variant="destructive" onPress={() => {}} />
<Button title="Success" variant="success" onPress={() => {}} />

// Sizes
<Button title="Small" size="small" />
<Button title="Medium" size="medium" />
<Button title="Large" size="large" />

// Rounded
<Button title="Rounded" rounded onPress={() => {}} />

// With Icons
<Button title="Save" leftIcon={<CheckIcon />} onPress={() => {}} />
<Button title="Next" rightIcon={<ArrowRightIcon />} onPress={() => {}} />

// Icon Only
<Button iconOnly leftIcon={<CloseIcon />} onPress={() => {}} />

// States
<Button title="Loading" loading onPress={() => {}} />
<Button title="Disabled" disabled />

// Full Width
<Button title="Submit" fullWidth onPress={() => {}} />
```

### Space

```tsx
<Space size="sm" />  // 8px
<Space size="md" />  // 12px
<Space size="lg" />  // 16px
<Space size={24} />  // custom
```

### Icons

```tsx
import { ArrowRight, Check, Close, Info } from 'react-native-nice-ui';

<ArrowRight width={24} height={24} fill={colors.textPrimary} />
```

Available icons: `ArrowLeft`, `ArrowRight`, `Check`, `CheckboxChecked`, `CheckboxEmpty`, `Close`, `DragHandler`, `Eye`, `EyeOff`, `Info`, `More`, `Remove`

---

## Theme System

### UIThemeProvider

```tsx
import { UIThemeProvider } from 'react-native-nice-ui';

<UIThemeProvider
    themeName="light"           // 'light' | 'dark'
    colors={customColors}       // Partial<UIColors> - override defaults
    tokens={customTokens}       // Partial<UITokens> - override defaults
>
    <App />
</UIThemeProvider>
```

### useTheme Hook

```tsx
import { useTheme } from 'react-native-nice-ui';

function MyComponent() {
    const { colors, tokens, themeName, isDark } = useTheme();

    return (
        <View style={{ backgroundColor: colors.background }}>
            <Text style={{ color: colors.textPrimary }}>Hello</Text>
        </View>
    );
}
```

### UIColors

| Color | Description |
|-------|-------------|
| `primary` | Primary brand color |
| `tint` | Tint color |
| `background` | Screen background |
| `textPrimary` | Primary text |
| `textSecondary` | Secondary text |
| `textTertiary` | Tertiary text |
| `textHint` | Hint/placeholder text |
| `border` | Border color |
| `listItemBackground` | List item background |
| `listItemBackgroundPress` | List item pressed state |
| `listItemBorder` | List item divider |
| `listItemIcon` | List item icon color |
| `checkboxDisabled` | Disabled checkbox |
| `statusBar` | Status bar background |
| `statusBarStyle` | 'light-content' or 'dark-content' |

### UITokens

```tsx
// Font Sizes
fontSizeXs, fontSizeSm, fontSizeMd, fontSizeLg, fontSizeXl

// Line Heights
lineHeightXs, lineHeightSm, lineHeightMd, lineHeightLg, lineHeightXl

// Font Weights
fontWeightNormal, fontWeightMedium, fontWeightSemibold, fontWeightBold

// Spacing
spacingXs (4), spacingSm (8), spacingMd (12), spacingLg (16), spacingXl (20)

// Border Radius
radiusNone, radiusSm, radiusMd, radiusLg, radiusXl, radiusFull

// Button
buttonHeightSm, buttonHeightMd, buttonHeightLg
buttonPaddingHorizontalSm, buttonPaddingHorizontalMd, buttonPaddingHorizontalLg
buttonRadius

// List
listItemMinHeight, listItemPaddingVertical, listItemPaddingRight
listItemMarginLeft, listItemRadius, listSectionMarginTop
listSectionPaddingHorizontal, listSectionRadius, listSpacedGap
```

---

## iOS 26 Support

The library automatically adjusts styles for iOS 26:

- Larger horizontal paddings on list sections
- Larger border radius on cards and sections
- Increased list item min height

Use `isIOSVersionOrHigher(26)` for custom adjustments:

```tsx
import { isIOSVersionOrHigher } from 'react-native-nice-ui';

const padding = isIOSVersionOrHigher(26) ? 20 : 16;
```

---

## Architecture

```
src/
├─ theme/           # UIThemeProvider, useTheme, colors, tokens
├─ Typography/      # Text component
├─ List/            # List compound components
├─ Button/          # Button component
├─ Space/           # Spacing component
├─ assets/icons/    # SVG icons
├─ platform/        # Platform utilities
└─ index.ts         # Main export
```

### Design Principles

- **UI defines what it needs** - Components use `useTheme()` to access colors and tokens
- **App defines how it looks** - Consumer app provides colors via `UIThemeProvider`
- **No hardcoded colors** - All colors come from the theme
- **Token-based styling** - Consistent spacing, typography, and sizing

---

## License

MIT
