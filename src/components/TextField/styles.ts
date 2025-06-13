import { StyleSheet } from 'react-native';
import { spacing } from '../../theme/spacing';

export const styles = StyleSheet.create({
    textField: {
        marginVertical: spacing.xs,
        backgroundColor: '#FFFFFF',
    },
    
    content: {
        paddingHorizontal: spacing.sm,
    },
    
    normalOutline: {
        borderColor: '#E0E0E0',
        borderWidth: 1,
        borderRadius: 8,
    },
    
    errorOutline: {
        borderColor: '#F44336',
        borderWidth: 2,
        borderRadius: 8,
    },
}); 