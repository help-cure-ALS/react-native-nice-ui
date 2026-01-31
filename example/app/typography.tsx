import { ScrollView, StyleSheet, View } from 'react-native';
import { Text, List, useTheme } from '../../src';

export default function TypographyScreen() {
    const { colors } = useTheme();

    return (
        <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
            {/* Display */}
            <List.Section title="Display">
                <View style={styles.section}>
                    <Text variant="displayLarge">Display Large</Text>
                    <Text variant="displayMedium">Display Medium</Text>
                    <Text variant="displaySmall">Display Small</Text>
                </View>
            </List.Section>

            {/* Headline */}
            <List.Section title="Headline">
                <View style={styles.section}>
                    <Text variant="headlineLarge">Headline Large</Text>
                    <Text variant="headlineMedium">Headline Medium</Text>
                    <Text variant="headlineSmall">Headline Small</Text>
                </View>
            </List.Section>

            {/* Title */}
            <List.Section title="Title">
                <View style={styles.section}>
                    <Text variant="titleLarge">Title Large</Text>
                    <Text variant="titleMedium">Title Medium</Text>
                    <Text variant="titleSmall">Title Small</Text>
                </View>
            </List.Section>

            {/* Body */}
            <List.Section title="Body">
                <View style={styles.section}>
                    <Text variant="bodyLarge">Body Large - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                    <Text variant="bodyMedium">Body Medium - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                    <Text variant="bodySmall">Body Small - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                </View>
            </List.Section>

            {/* Label */}
            <List.Section title="Label">
                <View style={styles.section}>
                    <Text variant="labelLarge">Label Large</Text>
                    <Text variant="labelMedium">Label Medium</Text>
                    <Text variant="labelSmall">Label Small</Text>
                </View>
            </List.Section>

            {/* Colors */}
            <List.Section title="Colors">
                <View style={styles.section}>
                    <Text variant="bodyLarge" color="primary">Primary Color</Text>
                    <Text variant="bodyLarge" color="secondary">Secondary Color</Text>
                    <Text variant="bodyLarge" color="tertiary">Tertiary Color</Text>
                    <Text variant="bodyLarge" color="hint">Hint Color</Text>
                </View>
            </List.Section>

            {/* Alignment */}
            <List.Section title="Alignment">
                <View style={styles.section}>
                    <Text variant="bodyMedium" align="left">Left aligned text</Text>
                    <Text variant="bodyMedium" align="center">Center aligned text</Text>
                    <Text variant="bodyMedium" align="right">Right aligned text</Text>
                </View>
            </List.Section>

            <View style={styles.spacer} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    section: {
        padding: 16,
        gap: 8
    },
    spacer: {
        height: 40
    }
});
