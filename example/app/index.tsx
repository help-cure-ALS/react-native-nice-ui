import { ScrollView, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { List, useTheme } from '../../src';

export default function HomeScreen() {
    const { colors } = useTheme();

    return (
        <ScrollView style={ [styles.container, { backgroundColor: colors.background }] }>
            <List.Section title="Components">
                <Link href="/typography" asChild>
                    <List.Item title="Typography" subtitle="Text variants, colors, alignment" />
                </Link>
                <Link href="/list" asChild>
                    <List.Item title="List Components" subtitle="Section, Item, Text, Wrapper" />
                </Link>
                <Link href="/buttons" asChild>
                    <List.Item title="Buttons" subtitle="Variants, sizes, icons, loading" />
                </Link>
                <Link href="/icons" asChild>
                    <List.Item title="Icons" subtitle="All available SVG icons" />
                </Link>
            </List.Section>

            <List.Text>
                This example app demonstrates all components from the react-native-nice-ui library.
                Use the theme toggle button in the header to switch between light and dark mode.
            </List.Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
