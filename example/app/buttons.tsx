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
