import { Platform } from 'react-native';

export function isIOSVersionOrHigher(minVersion: number): boolean {
    if (Platform.OS !== 'ios') return false;

    const v = Platform.Version;
    const major =
        typeof v === 'number'
            ? v
            : Number(String(v).split('.')[0]); // falls mal "17.2" o.ä.

    return Number.isFinite(major) && major >= minVersion;
}
