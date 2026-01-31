import { useState, useCallback, createContext, useContext } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme, Pressable, Text } from 'react-native';
import { UIThemeProvider, ThemeName } from '../../src';

// Context for theme toggle
export const ThemeToggleContext = createContext<() => void>(() => {});

export function useThemeToggle() {
  return useContext(ThemeToggleContext);
}

export default function RootLayout() {
  const systemColorScheme = useColorScheme();
  const [themeOverride, setThemeOverride] = useState<ThemeName | null>(null);

  const themeName: ThemeName = themeOverride ?? (systemColorScheme === 'dark' ? 'dark' : 'light');

  const toggleTheme = useCallback(() => {
    setThemeOverride((prev) => {
      if (prev === null) {
        return systemColorScheme === 'dark' ? 'light' : 'dark';
      }
      return prev === 'dark' ? 'light' : 'dark';
    });
  }, [systemColorScheme]);

  const ThemeToggleButton = () => (
    <Pressable onPress={toggleTheme} style={{ paddingHorizontal: 12 }}>
      <Text style={{ color: themeName === 'dark' ? '#0099ff' : '#007AFF', fontSize: 16 }}>
        {themeName === 'dark' ? 'Light' : 'Dark'}
      </Text>
    </Pressable>
  );

  return (
    <ThemeToggleContext.Provider value={toggleTheme}>
      <UIThemeProvider themeName={themeName}>
        <StatusBar style={themeName === 'dark' ? 'light' : 'dark'} />
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: themeName === 'dark' ? '#1a1a1a' : '#ffffff',
            },
            headerTintColor: themeName === 'dark' ? '#ffffff' : '#000000',
            contentStyle: {
              backgroundColor: themeName === 'dark' ? '#000000' : '#f5f5f5',
            },
            headerRight: () => <ThemeToggleButton />,
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              title: 'Nice UI Examples',
            }}
          />
          <Stack.Screen
            name="list"
            options={{
              title: 'List Components',
            }}
          />
          <Stack.Screen
            name="buttons"
            options={{
              title: 'Buttons',
            }}
          />
          <Stack.Screen
            name="icons"
            options={{
              title: 'Icons',
            }}
          />
        </Stack>
      </UIThemeProvider>
    </ThemeToggleContext.Provider>
  );
}
