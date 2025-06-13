import { StyleSheet } from 'react-native';
import { spacing } from '../../theme/spacing';

export const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: spacing.xs,
        paddingHorizontal: spacing.md,
    },
    
    label: {
        fontSize: 16,
        fontWeight: '600',
    },
    
    // Variant styles
    primaryButton: {
        backgroundColor: '#2196F3',
    },
    
    secondaryButton: {
        backgroundColor: '#9E9E9E',
    },
    
    dangerButton: {
        backgroundColor: '#F44336',
    },
    
    successButton: {
        backgroundColor: '#4CAF50',
    },
    
    warningButton: {
        backgroundColor: '#FF9800',
    },
    
    // Text colors
    whiteText: {
        color: '#FFFFFF',
    },
    
    primaryText: {
        color: '#2196F3',
    },
    
    secondaryText: {
        color: '#9E9E9E',
    },
    
    dangerText: {
        color: '#F44336',
    },
    
    successText: {
        color: '#4CAF50',
    },
    
    warningText: {
        color: '#FF9800',
    },
}); 