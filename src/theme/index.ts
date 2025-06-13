import { MD3DarkTheme, MD3LightTheme } from 'react-native-paper';
import { AppColors, darkColors, lightColors } from './colors';
import { spacing, Spacing } from './spacing';
import { typography, Typography } from './typography';

export const lightTheme = {
    ...MD3LightTheme,
    colors: lightColors,
    spacing,
    typography,
};

export const darkTheme = {
    ...MD3DarkTheme,
    colors: darkColors,
    spacing,
    typography,
};

export type AppTheme = typeof lightTheme;

export { darkColors, lightColors, spacing, typography };
export type { AppColors, Spacing, Typography };

