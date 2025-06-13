import React from 'react';
import { TextInput } from 'react-native-paper';
import { styles } from './styles';

interface TextFieldProps {
    label?: string;
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    mode?: 'flat' | 'outlined';
    multiline?: boolean;
    numberOfLines?: number;
    secureTextEntry?: boolean;
    disabled?: boolean;
    error?: boolean;
    errorText?: string;
    helperText?: string;
    left?: React.ReactNode;
    right?: React.ReactNode;
    style?: any;
    variant?: 'default' | 'search' | 'password';
}

export const TextField: React.FC<TextFieldProps> = ({
    label,
    value,
    onChangeText,
    placeholder,
    mode = 'outlined',
    multiline = false,
    numberOfLines = 1,
    secureTextEntry = false,
    disabled = false,
    error = false,
    errorText,
    helperText,
    left,
    right,
    style,
    variant = 'default',
}) => {
    const getVariantProps = () => {
        switch (variant) {
            case 'search':
                return {
                    left: <TextInput.Icon icon="magnify" />,
                    placeholder: placeholder || '검색...',
                };
            case 'password':
                return {
                    secureTextEntry: true,
                    right: <TextInput.Icon icon="eye" />,
                };
            default:
                return {};
        }
    };

    const variantProps = getVariantProps();

    return (
        <TextInput
            label={label}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            mode={mode}
            multiline={multiline}
            numberOfLines={numberOfLines}
            secureTextEntry={secureTextEntry || variantProps.secureTextEntry}
            disabled={disabled}
            error={error}
            left={left || variantProps.left}
            right={right || variantProps.right}
            style={[styles.textField, style]}
            contentStyle={styles.content}
            outlineStyle={error ? styles.errorOutline : styles.normalOutline}
            {...(errorText && { error: true })}
        />
    );
}; 