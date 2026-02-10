import { Platform } from 'react-native';
export const lightUIColors = {
    primary: '#007AFF',
    tint: '#007AFF',
    background: '#F2F2F6',
    textPrimary: '#000000',
    textSecondary: 'rgba(0,0,0,0.7)',
    textTertiary: 'rgba(0,0,0,0.45)',
    textHint: 'rgba(0,0,0,0.38)',
    border: 'rgb(216, 216, 216)',
    listItemIcon: '#afafba',
    listItemBackground: '#ffffff',
    listItemBackgroundPress: '#e3e3e3',
    listItemBorder: Platform.select({
        ios: '#c8c7cc',
        android: '#e0e0e0',
        default: '#e0e0e0'
    }),
    checkboxDisabled: '#C7C7CC',
    buttonSecondaryBackground: '#ffffff',
    buttonGhostBackgroundPress: '#e3e3e3',
    statusBarStyle: 'dark-content',
    statusBar: '#ffffff',
};
export const darkUIColors = {
    primary: '#0099ff',
    tint: '#0099ff',
    background: '#1C1C1E',
    textPrimary: '#ffffff',
    textSecondary: 'rgba(255,255,255,0.7)',
    textTertiary: 'rgba(255,255,255,0.5)',
    textHint: 'rgba(255,255,255,0.4)',
    border: 'rgb(39, 39, 41)',
    listItemIcon: 'rgba(255,255,255,0.3)',
    listItemBackground: 'rgba(255,255,255,0.07)',
    listItemBackgroundPress: 'rgba(255,255,255,0.1)',
    listItemBorder: Platform.select({
        ios: 'rgba(255,255,255,0.24)',
        android: '#343434',
        default: '#343434'
    }),
    checkboxDisabled: 'rgba(255,255,255, 0.15)',
    buttonSecondaryBackground: 'rgba(255,255,255,0.07)',
    buttonGhostBackgroundPress: 'rgba(255,255,255,0.1)',
    statusBarStyle: 'light-content',
    statusBar: 'rgb(18, 18, 18)',
};
