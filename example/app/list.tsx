import { useState } from 'react';
import { ScrollView, StyleSheet, View, Alert } from 'react-native';
import {
    List,
    Text,
    Badge,
    useTheme,
    ArrowRight,
    Info,
    Check
} from '../../src';

export default function ListDemoScreen() {
    const { colors } = useTheme();
    const [checkboxStates, setCheckboxStates] = useState({
        option1: false,
        option2: true,
        option3: false
    });

    // Input states
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const toggleCheckbox = (key: keyof typeof checkboxStates) => {
        setCheckboxStates((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <ScrollView style={ [styles.container, { backgroundColor: colors.background }] }>
            {/* Basic List Items */ }
            <List.Section title="Basic Items" rounded>

                <List.Item title="Simple Item" />
                <List.Item title="With Subtitle" subtitle="This is a subtitle text" />
                <List.Item
                    title="Automatische Sperre"
                    rightTitle="30 Sekunden"
                />
                <List.Item
                    title="Pressable Item"
                    subtitle="Tap to see action"
                    onPress={ () => Alert.alert('Pressed!') }
                />
                <List.Item
                    title="Without Chevron"
                    hideChevron
                    onPress={ () => Alert.alert('No chevron!') }
                />

            </List.Section>

            {/* Checkbox Items */ }
            <List.Section title="Checkbox Items">
                <List.Item
                    title="Option 1"
                    subtitle="Unchecked by default"
                    type="checkbox"
                    checked={ checkboxStates.option1 }
                    onPress={ () => toggleCheckbox('option1') }
                />
                <List.Item
                    title="Option 2"
                    subtitle="Checked by default"
                    type="checkbox"
                    hideChevron={ false }
                    checked={ checkboxStates.option2 }
                    onPress={ () => toggleCheckbox('option2') }
                />
                <List.Item
                    title="Option 3"
                    type="checkbox"
                    checked={ checkboxStates.option3 }
                    onPress={ () => toggleCheckbox('option3') }
                />
            </List.Section>

            {/* Items with Icons */ }
            <List.Section title="With Custom Components">
                <List.Item
                    title="Left Icon"
                    leftCmp={ <Info width={ 24 } height={ 24 } fill={ colors.primary } /> }
                    onPress={ () => {
                    } }
                />
                <List.Item
                    title="Right Component"
                    rightCmp={ <Check width={ 20 } height={ 20 } fill={ colors.primary } /> }
                    hideChevron
                />
                <List.Item
                    title="Custom Right Icon"
                    rightIconColor={ colors.primary }
                    onPress={ () => {
                    } }
                />

            </List.Section>

            {/* Disabled Items */ }
            <List.Section title="Disabled Items">

                <List.Item
                    title="Disabled Item"
                    subtitle="This item is disabled"
                    disabled
                    onPress={ () => {
                    } }
                />
                <List.Item
                    title="Disabled Checkbox"
                    type="checkbox"
                    checked={ true }
                    disabled
                />

            </List.Section>

            {/* List Text */ }
            <List.Text>
                This is a List.Text component. It's useful for adding helper text or descriptions below a list section.
            </List.Text>

            {/* Wrapped List */ }
            <List.Section title="Wrapped List">
                <List.Wrapper>

                    <List.Item title="Inside Wrapper" subtitle="List.Wrapper adds padding and styling" />
                    <List.Item title="Another Item" />

                </List.Wrapper>
            </List.Section>

            {/* Long Content */ }
            <List.Section title="Long Content">

                <List.Item
                    title={"Very long title that should be truncated when it exceeds the available width. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. \n\nStet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}
                    titleNumberOfLines={ 15 }
                />
                <List.Item
                    title="Multi-line Subtitle"
                    subtitle="This is a very long subtitle that spans multiple lines. It demonstrates how the component handles longer text content gracefully."
                    subtitleNumberOfLines={ 3 }
                />

            </List.Section>

            {/* Formatted Text (ReactNode) */}
            <List.Section title="Formatted Text" rounded>
                <List.Item
                    title={
                        <Text>
                            Normal und <Text style={{ fontWeight: '700' }}>Bold</Text> gemischt
                        </Text>
                    }
                />
                <List.Item
                    title="Mit formatiertem Subtitle"
                    subtitle={
                        <Text color="tertiary">
                            Status: <Text style={{ fontWeight: '600', color: colors.primary }}>Aktiv</Text>
                        </Text>
                    }
                />
                <List.Item
                    title={<Text>Zeile 1{'\n'}Zeile 2</Text>}
                    subtitle={<Text color="tertiary">Auch im Subtitle{'\n'}funktionieren Zeilenumbrüche</Text>}
                />
            </List.Section>

            {/* Badge - Right Position (Default) */}
            <List.Section title="Badge (Right)" rounded>
                <List.Item
                    title="Abo"
                    subtitle="Premium Plan"
                    badge={<Badge label="Aktiv" variant="success" />}
                    onPress={() => {}}
                />
                <List.Item
                    title="Zahlung"
                    subtitle="Visa •••• 4242"
                    badge={<Badge label="Ausstehend" variant="warning" />}
                    onPress={() => {}}
                />
                <List.Item
                    title="Konto"
                    badge={<Badge label="Gesperrt" variant="error" />}
                    onPress={() => {}}
                />
                <List.Item
                    title="Version"
                    subtitle="1.2.0"
                    badge={<Badge label="Info" variant="info" />}
                />
            </List.Section>

            {/* Badge - Inline Position */}
            <List.Section title="Badge (Inline)" rounded>
                <List.Item
                    title="Premium"
                    subtitle="Jetzt verfügbar"
                    badge={<Badge label="Neu" variant="info" size="small" />}
                    badgePosition="inline"
                    onPress={() => {}}
                />
                <List.Item
                    title="Dark Mode"
                    badge={<Badge label="Beta" variant="default" size="small" />}
                    badgePosition="inline"
                    onPress={() => {}}
                />
                <List.Item
                    title="VIP Bereich"
                    subtitle="Exklusive Inhalte"
                    badge={<Badge label="VIP" color="#D4AF37" textColor="#fff" size="small" />}
                    badgePosition="inline"
                    onPress={() => {}}
                />
            </List.Section>

            {/* Badge + rightCmp combined */}
            <List.Section title="Badge + Right Component" rounded>
                <List.Item
                    title="Benachrichtigungen"
                    badge={<Badge label="3" variant="error" />}
                    rightCmp={<Check width={20} height={20} fill={colors.primary} />}
                    hideChevron
                />
            </List.Section>

            {/* Standalone Badge */}
            <List.Section title="Standalone Badge">
                <List.Wrapper>
                    <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
                        <Badge label="Success" variant="success" />
                        <Badge label="Warning" variant="warning" />
                        <Badge label="Error" variant="error" />
                        <Badge label="Info" variant="info" />
                        <Badge label="Default" variant="default" />
                        <Badge label="Small" variant="info" size="small" />
                        <Badge label="Custom" color="#6B3FA0" textColor="#fff" />
                    </View>
                </List.Wrapper>
            </List.Section>

            {/* customStyles Override Demo */}
            <List.Section title="Custom Styles (Global)" rounded>
                <List.Item
                    title="Global Title Style"
                    subtitle="Global Subtitle Style"
                />
                <List.Item
                    title="Local Override"
                    subtitle="Local Subtitle Override"
                    titleStyle={{ fontWeight: '800', fontStyle: 'italic' }}
                    subtitleStyle={{ color: colors.primary }}
                />
            </List.Section>

            {/* Spaced Card Layout */ }
            <List.Section title="Spaced (Card Layout)" spaced>
                <List.Item
                    title="Card Item 1"
                    subtitle="Each item is a separate card"
                    leftCmp={ <Info width={ 24 } height={ 24 } fill={ colors.primary } /> }
                    onPress={ () => Alert.alert('Card 1') }
                />
                <List.Item
                    title="Card Item 2"
                    subtitle="With gap between items"
                    onPress={ () => Alert.alert('Card 2') }
                />
                <List.Item
                    title="Card Item 3"
                    subtitle="Rounded corners automatic"
                    leftCmp={ <ArrowRight width={ 24 } height={ 24 } fill={ colors.primary } /> }
                    onPress={ () => Alert.alert('Card 3') }
                />
            </List.Section>

            {/* SectionCard - Card with Header/Title/Body */ }
            <List.SectionCard
                header="Question 1 of 7"
                title="What is your favorite color?"
                body="Select one option from the list below."
            >
                <List.Item
                    title="Red"
                    type="checkbox"
                    checked={ checkboxStates.option1 }
                    checkboxSize={ 24 }
                    wrapperStyle={ {
                        paddingTop: 10,
                        paddingBottom: 10,
                        minHeight: 33
                    } }
                    onPress={ () => toggleCheckbox('option1') }
                />
                <List.Item
                    title="Green"
                    type="checkbox"
                    checked={ checkboxStates.option2 }
                    checkboxSize={ 24 }
                    wrapperStyle={ {
                        paddingTop: 10,
                        paddingBottom: 10,
                        minHeight: 33
                    } }
                    onPress={ () => toggleCheckbox('option2') }
                />
                <List.Item
                    title="Blue"
                    type="checkbox"
                    checked={ checkboxStates.option3 }
                    checkboxSize={ 24 }
                    wrapperStyle={ {
                        paddingTop: 10,
                        paddingBottom: 10,
                        minHeight: 33
                    } }
                    onPress={ () => toggleCheckbox('option3') }
                />
            </List.SectionCard>

            {/* SectionCard - Title Only */ }
            <List.SectionCard title="Settings">
                <List.Item
                    title="Notifications"
                    subtitle="Enable push notifications"
                    onPress={ () => Alert.alert('Notifications') }
                />
                <List.Item
                    title="Privacy"
                    subtitle="Manage your privacy settings"
                    onPress={ () => Alert.alert('Privacy') }
                />
            </List.SectionCard>

            {/* Input Items */ }
            <List.Section title="Input Items" rounded>
                <List.InputItem
                    label="Name"
                    placeholder="Enter your name"
                    value={ formData.name }
                    onChangeText={ (text) => setFormData(prev => ({ ...prev, name: text })) }
                    autoCapitalize="words"
                />
                <List.InputItem
                    label="Email"
                    required
                    placeholder="Enter your email"
                    value={ formData.email }
                    onChangeText={ (text) => setFormData(prev => ({ ...prev, email: text })) }
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <List.InputItem
                    label="Password"
                    required
                    placeholder="Enter your password"
                    value={ formData.password }
                    onChangeText={ (text) => setFormData(prev => ({ ...prev, password: text })) }
                    secureTextEntry
                    showPasswordToggle
                />
            </List.Section>

            {/* Input Items in SectionCard */ }
            <List.SectionCard
                header="Step 2 of 3"
                title="Account Details"
                body="Please provide your login credentials."
            >
                <List.InputItem
                    label="Username"
                    placeholder="Choose a username"
                    autoCapitalize="none"
                />
                <List.InputItem
                    label="Password"
                    placeholder="Create a password"
                    secureTextEntry
                    showPasswordToggle
                />
            </List.SectionCard>

            {/* Inline Input Items (like List.Item with rightTitle) */ }
            <List.Section title="Inline Input Items" rounded>
                <List.InputItem
                    label="First Name"
                    placeholder="John"
                    inline
                />
                <List.InputItem
                    label="Last Name"
                    placeholder="Doe"
                    inline
                />
                <List.InputItem
                    label="Age"
                    placeholder="25"
                    inline
                    keyboardType="number-pad"
                />
            </List.Section>

            {/* Input Items with Right Label (Units) */ }
            <List.Section title="Input with Right Label" rounded>
                <List.InputItem
                    label="Gewicht"
                    placeholder="0.0"
                    rightLabel="kg"
                    keyboardType="decimal-pad"
                />
                <List.InputItem
                    label="Preis"
                    placeholder="0.00"
                    rightLabel="€"
                    keyboardType="decimal-pad"
                />
                <List.InputItem
                    label="Rabatt"
                    placeholder="0"
                    rightLabel="%"
                    keyboardType="number-pad"
                    inline
                />
            </List.Section>

            {/* Slider Items */ }
            <List.Section title="Slider Items" rounded>
                <List.SliderItem
                    label="Volume"
                    value={ 0.5 }
                    valueSuffix="%"
                    toFixed={ 0 }
                    minimumValue={ 0 }
                    maximumValue={ 100 }
                />
                <List.SliderItem
                    label="Brightness"
                    value={ 75 }
                    valueSuffix="%"
                    toFixed={ 0 }
                    minimumValue={ 0 }
                    maximumValue={ 100 }
                />
                <List.SliderItem
                    label="Weight"
                    value={ 70 }
                    valueSuffix=" kg"
                    toFixed={ 1 }
                    minimumValue={ 30 }
                    maximumValue={ 150 }
                    step={ 0.5 }
                />
            </List.Section>

            {/* Slider with Prefix */ }
            <List.Section title="Slider with Prefix">
                <List.SliderItem
                    label="Price Range"
                    value={ 50 }
                    valuePrefix="$"
                    toFixed={ 0 }
                    minimumValue={ 0 }
                    maximumValue={ 500 }
                    step={ 10 }
                />
            </List.Section>

            {/* Disabled Input */ }
            <List.Section title="Disabled Input">
                <List.InputItem
                    label="Read-only Field"
                    value="This field is disabled"
                    disabled
                />
            </List.Section>

            <View style={ styles.spacer } />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    spacer: {
        height: 40
    }
});
