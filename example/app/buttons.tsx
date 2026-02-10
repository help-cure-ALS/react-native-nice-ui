import { useState } from 'react';
import { ScrollView, StyleSheet, View, Alert, Text } from 'react-native';
import { Button, useTheme, Check, ArrowRight, Close } from '../../src';

export default function ButtonsScreen() {
    const { colors } = useTheme();
    const [loading, setLoading] = useState(false);

    const handleLoadingPress = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
    };

    const SectionTitle = ({ children }: { children: string }) => (
        <Text style={[styles.sectionTitle, { color: colors.textHint }]}>{children}</Text>
    );

    return (
        <ScrollView
            style={[styles.container, { backgroundColor: colors.background }]}
            contentContainerStyle={styles.content}
        >
            <SectionTitle>Variants</SectionTitle>

            <View style={styles.section}>
                <Button
                    title="Primary"
                    onPress={() => Alert.alert('Primary')}
                />
            </View>

            <View style={styles.section}>
                <Button
                    title="Secondary"
                    variant="secondary"
                    onPress={() => Alert.alert('Secondary')}
                />
            </View>

            <View style={styles.section}>
                <Button
                    title="Outline"
                    variant="outline"
                    onPress={() => Alert.alert('Outline')}
                />
            </View>

            <View style={styles.section}>
                <Button
                    title="Ghost"
                    variant="ghost"
                    onPress={() => Alert.alert('Ghost')}
                />
            </View>

            <View style={styles.section}>
                <Button
                    title="Tinted"
                    variant="tinted"
                    onPress={() => Alert.alert('Tinted')}
                />
            </View>

            <View style={styles.section}>
                <Button
                    title="Destructive"
                    variant="destructive"
                    onPress={() => Alert.alert('Destructive')}
                />
            </View>

            <View style={styles.section}>
                <Button
                    title="Success"
                    variant="success"
                    onPress={() => Alert.alert('Success')}
                />
            </View>

            <SectionTitle>Sizes</SectionTitle>

            <View style={styles.section}>
                <Button title="Small" size="small" onPress={() => {}} />
            </View>

            <View style={styles.section}>
                <Button title="Medium (default)" size="medium" onPress={() => {}} />
            </View>

            <View style={styles.section}>
                <Button title="Large" size="large" onPress={() => {}} />
            </View>

            <SectionTitle>Rounded</SectionTitle>

            <View style={styles.section}>
                <Button title="Rounded Primary" rounded onPress={() => {}} />
            </View>

            <View style={styles.section}>
                <Button title="Rounded Outline" variant="outline" rounded onPress={() => {}} />
            </View>

            <View style={styles.section}>
                <Button title="Rounded Tinted" variant="tinted" rounded onPress={() => {}} />
            </View>

            <SectionTitle>With Icons</SectionTitle>

            <View style={styles.section}>
                <Button
                    title="Left Icon"
                    leftIcon={<Check width={18} height={18} fill="#ffffff" />}
                    onPress={() => {}}
                />
            </View>

            <View style={styles.section}>
                <Button
                    title="Right Icon"
                    rightIcon={<ArrowRight width={18} height={18} fill="#ffffff" />}
                    onPress={() => {}}
                />
            </View>

            <SectionTitle>Icon Only</SectionTitle>

            <View style={styles.row}>
                <Button
                    iconOnly
                    leftIcon={<Check width={20} height={20} fill="#ffffff" />}
                    onPress={() => {}}
                />
                <Button
                    iconOnly
                    variant="secondary"
                    leftIcon={<Close width={20} height={20} fill={colors.textPrimary} />}
                    onPress={() => {}}
                />
                <Button
                    iconOnly
                    variant="tinted"
                    leftIcon={<ArrowRight width={20} height={20} fill={colors.primary} />}
                    onPress={() => {}}
                />
                <Button
                    iconOnly
                    variant="ghost"
                    leftIcon={<Close width={20} height={20} fill={colors.primary} />}
                    onPress={() => {}}
                />
            </View>

            <SectionTitle>Full Width</SectionTitle>

            <View style={styles.section}>
                <Button title="Full Width Primary" fullWidth onPress={() => {}} />
            </View>

            <View style={styles.section}>
                <Button title="Full Width Outline" variant="outline" fullWidth onPress={() => {}} />
            </View>

            <SectionTitle>Custom Variants (Provider)</SectionTitle>

            <View style={styles.section}>
                <Button
                    title="Warning"
                    variant="warning"
                    onPress={() => Alert.alert('Warning')}
                />
            </View>

            <View style={styles.section}>
                <Button
                    title="Premium"
                    variant="premium"
                    onPress={() => Alert.alert('Premium')}
                />
            </View>

            <View style={styles.section}>
                <Button
                    title="Premium Rounded"
                    variant="premium"
                    rounded
                    size="large"
                    onPress={() => Alert.alert('Premium')}
                />
            </View>

            <SectionTitle>variantStyle (Per Instance)</SectionTitle>

            <View style={styles.section}>
                <Button
                    title="Static Override"
                    variant="primary"
                    variantStyle={{
                        container: { backgroundColor: '#8B5CF6' },
                        text: { color: '#ffffff' },
                    }}
                    onPress={() => Alert.alert('Static Override')}
                />
            </View>

            <View style={styles.section}>
                <Button
                    title="Dynamic Override"
                    variant="outline"
                    variantStyle={({ pressed, colors: c }) => ({
                        container: {
                            borderColor: pressed ? c.primary : '#D4AF37',
                            borderWidth: 2,
                        },
                        text: { color: '#D4AF37' },
                    })}
                    onPress={() => Alert.alert('Dynamic Override')}
                />
            </View>

            <SectionTitle>With Subtitle</SectionTitle>

            <View style={styles.section}>
                <Button
                    title="Upgrade to Pro"
                    subtitle="ab 4,99 € / Monat"
                    size="large"
                    onPress={() => {}}
                />
            </View>

            <View style={styles.section}>
                <Button
                    title="Löschen"
                    subtitle="Kann nicht rückgängig gemacht werden"
                    variant="destructive"
                    onPress={() => {}}
                />
            </View>

            <View style={styles.section}>
                <Button
                    title="Weiter"
                    subtitle="Schritt 2 von 3"
                    variant="tinted"
                    fullWidth
                    onPress={() => {}}
                />
            </View>

            <View style={styles.section}>
                <Button
                    title="Premium"
                    subtitle="Jetzt freischalten"
                    variant="premium"
                    rounded
                    size="large"
                    onPress={() => {}}
                />
            </View>

            <SectionTitle>States</SectionTitle>

            <View style={styles.section}>
                <Button title="Disabled" disabled onPress={() => {}} />
            </View>

            <View style={styles.section}>
                <Button
                    title="Loading State"
                    loading={loading}
                    onPress={handleLoadingPress}
                />
            </View>

            <View style={styles.spacer} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        padding: 16
    },
    sectionTitle: {
        fontSize: 13,
        fontWeight: '600',
        textTransform: 'uppercase',
        marginTop: 20,
        marginBottom: 12
    },
    section: {
        marginBottom: 12
    },
    row: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 12
    },
    spacer: {
        height: 40
    }
});
