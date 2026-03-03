# ListItem Children Refactoring

## Problem
`children` is rendered inside the row-wrapper (`flexDirection: 'row'`), making it unusable for custom content below the title/subtitle area.

## Solution
Restructure ListItem so `children` renders **below the entire row** but still **inside the item** (above the divider).

### New Structure

```
<Pressable>                          // Container (press-handling)
  <View column-wrapper>              // NEW: column wrapper inherits divider + marginLeft
    <View row-wrapper>               // existing wrapper (minus divider/marginLeft)
      leftCmp / image / title / rightTitle / badge / rightCmp / chevron
    </View>
    {children && (                   // NEW: below the row
      <View style={childrenStyle}>
        {children}
      </View>
    )}
  </View>
  {top-right badge}                  // unchanged
</Pressable>
```

### Changes

1. **New `childrenStyle` prop** (`StyleProp<ViewStyle>`) - unstyled by default
2. **Move divider** - `borderBottom` + `marginLeft` move from row-wrapper to new column-wrapper
3. **Row-wrapper keeps** padding, minHeight, flexDirection: row (minus borderBottom/marginLeft)
4. **Column-wrapper gets** marginLeft + borderBottom from the old wrapper

### API

```tsx
<List.Item title="Details" subtitle="Premium Plan">
  <View style={{ paddingHorizontal: 16, paddingBottom: 12 }}>
    <ProgressBar value={0.7} />
  </View>
</List.Item>

<List.Item title="Content" childrenStyle={{ padding: 12 }}>
  <TagList tags={['React', 'TypeScript']} />
</List.Item>
```

### Unchanged
- All existing props and behavior
- Badge positions (inline, right, top-right)
- Spaced/card mode
- Checkbox/chevron
