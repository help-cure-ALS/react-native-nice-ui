import { ScrollView, StyleSheet, View, Text } from 'react-native';
import {
  useTheme,
  ArrowLeft,
  ArrowRight,
  CheckboxEmpty,
  CheckboxChecked,
  Check,
  Close,
  DragHandler,
  Info,
  More,
  Remove,
} from '../../src';

const ICON_SIZE = 32;

export default function IconsScreen() {
  const { colors } = useTheme();

  const icons = [
    { name: 'ArrowLeft', component: ArrowLeft },
    { name: 'ArrowRight', component: ArrowRight },
    { name: 'CheckboxEmpty', component: CheckboxEmpty },
    { name: 'CheckboxChecked', component: CheckboxChecked },
    { name: 'Check', component: Check },
    { name: 'Close', component: Close },
    { name: 'DragHandler', component: DragHandler },
    { name: 'Info', component: Info },
    { name: 'More', component: More },
    { name: 'Remove', component: Remove },
  ];

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.grid}>
        {icons.map(({ name, component: IconComponent }) => (
          <View key={name} style={[styles.iconCard, { backgroundColor: colors.listItemBackground }]}>
            <View style={[styles.iconWrapper, { backgroundColor: colors.background }]}>
              <IconComponent
                width={ICON_SIZE}
                height={ICON_SIZE}
                fill={colors.textPrimary}
              />
            </View>
            <Text style={[styles.iconName, { color: colors.textPrimary }]}>{name}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>Color Variants</Text>
        <View style={styles.colorRow}>
          <View style={styles.colorItem}>
            <Check width={28} height={28} fill={colors.primary} />
            <Text style={[styles.colorLabel, { color: colors.textHint }]}>primary</Text>
          </View>
          <View style={styles.colorItem}>
            <Check width={28} height={28} fill={colors.textPrimary} />
            <Text style={[styles.colorLabel, { color: colors.textHint }]}>text</Text>
          </View>
          <View style={styles.colorItem}>
            <Check width={28} height={28} fill={colors.textHint} />
            <Text style={[styles.colorLabel, { color: colors.textHint }]}>textHint</Text>
          </View>
          <View style={styles.colorItem}>
            <Check width={28} height={28} fill={colors.listItemIcon} />
            <Text style={[styles.colorLabel, { color: colors.textHint }]}>listItemIcon</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>Size Variants</Text>
        <View style={styles.sizeRow}>
          {[16, 24, 32, 48].map((size) => (
            <View key={size} style={styles.sizeItem}>
              <ArrowRight width={size} height={size} fill={colors.textPrimary} />
              <Text style={[styles.sizeLabel, { color: colors.textHint }]}>{size}px</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.spacer} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 12,
    gap: 12,
  },
  iconCard: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  iconWrapper: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  iconName: {
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'center',
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 16,
  },
  colorRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  colorItem: {
    alignItems: 'center',
  },
  colorLabel: {
    fontSize: 11,
    marginTop: 6,
  },
  sizeRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  sizeItem: {
    alignItems: 'center',
  },
  sizeLabel: {
    fontSize: 11,
    marginTop: 6,
  },
  spacer: {
    height: 40,
  },
});
