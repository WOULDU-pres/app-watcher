import React from 'react';
import { Button as PaperButton } from 'react-native-paper';
import { styles } from './styles';

interface ButtonProps {
    mode?: 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal';
    onPress: () => void;
    children: React.ReactNode;
    icon?: string;
    loading?: boolean;
    disabled?: boolean;
    style?: any;
    labelStyle?: any;
    variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
}

export const Button: React.FC<ButtonProps> = ({
    mode = 'contained',
    onPress,
    children,
    icon,
    loading = false,
    disabled = false,
    style,
    labelStyle,
    variant = 'primary',
}) => {
    const getButtonStyle = () => {
        switch (variant) {
            case 'danger':
                return styles.dangerButton;
            case 'success':
                return styles.successButton;
            case 'warning':
                return styles.warningButton;
            case 'secondary':
                return styles.secondaryButton;
            default:
                return styles.primaryButton;
        }
    };

    const getLabelStyle = () => {
        switch (variant) {
            case 'danger':
                return mode === 'contained' ? styles.whiteText : styles.dangerText;
            case 'success':
                return mode === 'contained' ? styles.whiteText : styles.successText;
            case 'warning':
                return mode === 'contained' ? styles.whiteText : styles.warningText;
            case 'secondary':
                return mode === 'contained' ? styles.whiteText : styles.secondaryText;
            default:
                return mode === 'contained' ? styles.whiteText : styles.primaryText;
        }
    };

    return (
        <PaperButton
            mode={mode}
            onPress={onPress}
            icon={icon}
            loading={loading}
            disabled={disabled}
            style={[styles.button, getButtonStyle(), style]}
            labelStyle={[styles.label, getLabelStyle(), labelStyle]}
        >
            {children}
        </PaperButton>
    );
}; 