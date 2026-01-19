import { Platform } from 'react-native';
export const lightUIColors = {
    statusBarStyle: 'dark-content',
    statusBar: '#ffffff',
    tint: '#007AFF',
    background: '#f5f5f5',
    card: '#ffffff',
    text: '#000000',
    textHint: 'rgba(0,0,0,0.38)',
    border: 'rgb(216, 216, 216)',
    primary: '#007AFF',
    listText: 'rgba(0,0,0,0.4)',
    listItemIcon: '#afafba',
    listItemBackground: '#ffffff',
    listItemBackgroundPress: '#e3e3e3',
    listItemBorder: Platform.select({
        ios: '#c8c7cc',
        android: '#e0e0e0',
        default: '#e0e0e0'
    }),
    checkboxDisabled: '#C7C7CC'
};
export const darkUIColors = {
    statusBarStyle: 'light-content',
    statusBar: 'rgb(18, 18, 18)',
    tint: '#0099ff',
    background: '#000',
    card: '#1a1a1a',
    text: '#ffffff',
    textHint: 'rgba(255,255,255,0.4)',
    border: 'rgb(39, 39, 41)',
    primary: '#0099ff',
    listText: 'rgba(255, 255, 255, 0.35)',
    listItemIcon: 'rgba(255,255,255,0.3)',
    listItemBackground: 'rgba(255,255,255,0.07)',
    listItemBackgroundPress: 'rgba(255,255,255,0.1)',
    listItemBorder: Platform.select({
        ios: 'rgba(255,255,255,0.24)',
        android: '#343434',
        default: '#343434'
    }),
    checkboxDisabled: 'rgba(255,255,255, 0.15)'
};
